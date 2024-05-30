import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductsService from '../services/productsService';
import LoadingComponent from '../components/LoadingComponent';
import { Rating } from '@mui/material';
import { FaCheck, FaHeart } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { saveInCartAction } from '../store/cartSlice';
import { updateFavoriteAction } from '../store/favoriteSlice';

function SingleProductPage() {
    const [currentImage, setCurrentImage] = useState(0);
    const [singleProduct, setSingleProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [favoriteIdIcon, setFavoriteIdIcon] = useState(null);
    const { allFavorite } = useSelector(state => state.favoriteStore);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        ProductsService.getSingleProduct(id)
            .then(res => {
                setSingleProduct(res.data);
                setIsLoading(true);
            })
            .catch(err => console.log(err));
    }, [id]);

    useEffect(() => {
        if (allFavorite.length > 0) {
            allFavorite.find((item) => {
                if (item.id === parseInt(id)) {
                    setFavoriteIdIcon(item.id);
                    return;
                }
            });
        } else {
            setFavoriteIdIcon(null);
        }
    }, [allFavorite, id]);

    function handleImage(index) {
        setCurrentImage(index);
    }

    function handleAddCart() {
        dispatch(saveInCartAction(singleProduct));
    }

    return (
        <div className='px-5 md:px-10'>
            {isLoading ? (
                <div className='container mx-auto flex flex-col md:flex-row mt-12 items-center gap-8'>
                    {/* Left */}
                    <div className='w-full md:w-1/2 flex flex-col gap-5 mb-12'>
                        <img
                            src={singleProduct.images[currentImage]}
                            alt={singleProduct.title}
                            className='w-full h-96 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300'
                        />

                        {/* Small images */}
                        <div className='flex justify-between'>
                            {singleProduct.images.map((el, index) => (
                                <img
                                    src={el}
                                    onClick={() => handleImage(index)}
                                    alt='Product'
                                    className='w-24 h-24 border border-mainBlue rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-300'
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right */}
                    <div className='w-full md:w-1/2 flex flex-col gap-5'>
                        <h2 className='text-2xl font-semibold'>{singleProduct.title}</h2>
                        <span className='text-xl font-medium text-gray-700'>${singleProduct.price}</span>

                        {/* Rating */}
                        <p className='flex items-center gap-5'>
                            <span className='font-medium'>Reviews:</span>
                            <Rating name='read-only' value={singleProduct.rating} readOnly />
                        </p>

                        <p className='text-lg'>{singleProduct.description}</p>

                        <p className='flex items-center gap-5'>
                            <span className='font-medium'>Availability:</span>
                            {singleProduct.stock ? (
                                <span className='flex items-center gap-2 text-green-500'>
                                    <FaCheck /> In Stock
                                </span>
                            ) : (
                                <span className='flex items-center gap-2 text-red-500'>
                                    <ImCross /> Out of Stock
                                </span>
                            )}
                        </p>

                        <div className='mt-10 flex gap-5'>
                            <Link
                                to='/cart'
                                className='bg-mainBlue text-white px-5 py-2 rounded-lg hover:bg-mainOrange transition-colors duration-300 ease-in-out flex items-center justify-center'
                                onClick={handleAddCart}
                            >
                                Add to Cart
                            </Link>
                            <button
                                className='bg-mainBlue text-white px-5 py-2 rounded-lg hover:bg-mainOrange transition-colors duration-300 ease-in-out flex items-center justify-center'
                                onClick={() => dispatch(updateFavoriteAction(singleProduct))}
                            >
                                {favoriteIdIcon === parseInt(id) ? (
                                    <FaHeart size={25} color='red' />
                                ) : (
                                    <FaHeart size={25} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <LoadingComponent />
            )}
        </div>
    );
}

export default SingleProductPage;
