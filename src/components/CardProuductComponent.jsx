import { Rating } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function CardProductComponent({ product, activeView }) {
  return (
    <div className={activeView === 'gridView' ? 'max-w-sm w-full bg-white rounded-lg border border-gray-300 shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105' :
    ' w-full flex justify-between items-center  bg-white rounded-lg border border-gray-300 shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105'
    }>
      {/* Image Section */}
      <div className='relative'>
        <img
          src={product.thumbnail}
          alt={product.title}
          className='w-full h-64 object-cover rounded-t-lg transition-transform duration-300 ease-in-out transform hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 hover:opacity-40 transition-opacity duration-300 rounded-t-lg'></div>
      </div>
      {/* Content Section */}
      <div className={activeView === 'gridView' ? 'p-6 flex flex-col items-center' : 'p-6 flex items-center justify-center gap-[70px]'}>
        <h2 className='text-2xl font-bold text-gray-900 mb-2 text-center transition-colors duration-300 hover:text-mainOrange '>
          {product.title}
        </h2>
        <span className='text-xl font-semibold text-gray-800 mb-4'>
          ${product.price}
        </span>
        <Rating name="read-only" value={product.rating} readOnly className='mb-4' />
        <Link
          to={`/singleProduct/${product.id}`}
          className='bg-mainBlue text-white  px-5 py-2 rounded-full hover:bg-mainOrange transition-colors duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
        >
          View Detail
        </Link>
      </div>
    </div>
  );
}

export default CardProductComponent;
