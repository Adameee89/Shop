import { Rating } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function CardProuductComponent({product}) {

  return (
    <div className='w-[300px] h-full rounded-lg border border-mainBlue flex flex-col items-center gap-[20px] cursor-pointer'>
      {/*overlay  */}
        <div className='w-full relative '>
          <img src={product.thumbnail} alt={product.title} className='w-full h-[150px] object-cover rounded-t-lg' />
          {/* Overlay div black */}
          <div className=' bg-black opacity-40 absolute inset-0 hover:opacity-0 transition-all cursor-pointer duration-500'></div>
        </div>
        <h2>{product.title}</h2>
        <span>${product.price}</span>
        {/* Rating */}
        <Rating name="read-only" value={product.rating} readOnly />

        <Link to={`/singleProduct/${product.id}`} className='bg-mainBlue text-textWhite px-[16px] py-[8px] rounded-lg
         hover:bg-mainOrange transition-all ease-in-out mb-[20px]'>View Detail</Link>

        
    </div>
  )
}

export default CardProuductComponent