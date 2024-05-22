import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import ProductsService from '../services/productsService';
import LoadingComponent from '../components/LoadingComponent';
import { Rating } from '@mui/material';

//icons

import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { FaHeart } from 'react-icons/fa';

function SingleProductPage() {
    const [currentImage, setCurrentImage] = useState(0);
    const [singleProduct, setSingleProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const {id} = useParams();



    useEffect(() => {
        ProductsService.getSingleProduct(id)
               .then(res => {
                setSingleProduct(res.data)
                setIsLoading(true);
               })
               .catch(err => console.log(err))
    }, [])


    //change images
    function handleImage (index){
        setCurrentImage(index)

    }

  return (
    <div className='px-[20px]'>
        {isLoading ? <div className=' container mx-auto flex flex-col md:flex-row mt-[50px] items-center gap-[20px]'>
            {/* left */}
            <div className='w-full md:w-[50%] flex flex-col gap-[20px]'>
                <img src={singleProduct.images[currentImage]} alt={singleProduct.title} className='w-full h-[400px] object-cover'/>

                {/*  small images */  }

                <div className='flex justify-between'>
                    {singleProduct.images.map((el, index) => {
                        return <img src={el} 
                                    onClick={() => handleImage(index)} 
                                    alt="slika"  
                                    className='w-[90px] h-[90px] border border-mainBlue rounded-xl cursor-pointer' 
                                    key={index}/>
                    })}
                </div>
            </div>


            {/* right */}
            <div className='w-full md:w-[50%]'>
                <h2>{singleProduct.title}</h2>
                <span>${singleProduct.price}</span>

                {/* Rating */}
                <p className='flex items-center gap-[20px]'>
                    <span>Reviews: </span>
                    <Rating name="read-only" value={singleProduct.rating} readOnly />
                </p>

                <p className='text-[16px]'>{singleProduct.description}</p>

                <p className='flex items-center gap-[20px]'>
                    <span >Availibilty:</span>
                        {singleProduct.stock ? 
                        <span className='flex items-center gap-[5px]  text-green-500'><FaCheck />In Stock</span> : 
                        <span className='flex items-center gap-[5px] text-red-500'><ImCross />Out of Stock</span> }
                </p>

                <div className='mt-[40px] flex gap-[20px]'>
                    <Link to='/cart' className='bg-mainBlue text-textWhite px-[16px] py-[8px] rounded-xl hover:bg-mainOrange transition-all
                     duration-300 ease-in-out flex items-center justify-center'>Add Cart</Link>
                    <Link to='/' className='bg-mainBlue text-textWhite px-[16px] py-[8px] rounded-xl hover:bg-mainOrange transition-all
                     duration-300 ease-in-out flex items-center justify-center' ><FaHeart size={25} /></Link>
                </div>
            </div>
        </div> : <LoadingComponent />}
    </div>
  )
}

export default SingleProductPage