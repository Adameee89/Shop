import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemCartAction, setPriceHandlerAction } from '../store/cartSlice';

function CartPage() {

  const [cartData, setCartData] = useState();
  const {cart, totalPrice} = useSelector(state => state.cartStore)
  const [currentCoupon, setCurrentCoupon] = useState(null)
  const coupon = useRef();
  const dispatch = useDispatch()

  useEffect(() => {
    setCartData(JSON.parse(localStorage.getItem('cart_item')))
  }, [cart])

function handleCoupon(){
  setCurrentCoupon(coupon.current.value);
  coupon.current.value = '';

}

  return (
    <div className='mt-[50px] '>
      <div className='container mx-auto flex flex-col lg:flex-row gap-[20px]'>
        {/* left side */}
        <TableContainer component={Paper} className='w-full lg:w-[70%]'>
      <Table sx={{ md: {minWidth: 650 }} } aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Products</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="left">Subtotal</TableCell>
            <TableCell align="right">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* our data */}
          
          {cartData ? cartData.map((product, index) => (
            <TableRow
              key={product.id}
            >
              <TableCell component="th" scope="row">
                <img src={product.thumbnail} alt="" className='w-[90px] h-[90px] border border-mainBlue rounded-lg' />
              </TableCell>
              <TableCell align="left">
                ${product.price}
                </TableCell>
              <TableCell align="left">
                <div className='flex items-center'>
                  <button 
                  className='px-[8px] py-[4px] bg-slate-300 text-[18px]'
                  onClick={() => dispatch(setPriceHandlerAction({increment: -1, index}))}
                  
                  >-</button>
                  <span className='px-[8px] py-[4px] bg-slate-300 text-[18px]'>{product.count}</span>
                  <button 
                  className='px-[8px] py-[4px] bg-slate-300 text-[18px]'
                  onClick={() => dispatch(setPriceHandlerAction({increment: 1, index}))}
                  >+</button>
                </div>
              </TableCell>
              <TableCell align="left">
                ${Math.round(product.subTotal * 100) / 100}
              </TableCell>
              <TableCell align="right">
                <button className='text-red-500'
                        onClick={() => dispatch
                  (deleteItemCartAction(product))} >Remove</button>
              </TableCell>
            </TableRow>
          )) : <p>Cart is empty</p>} 
        </TableBody>
      </Table>
    </TableContainer>
    {/* right side */}
    <div className='w-full lg:w-[30%] px-[30px] lg:px-[0px] md:px-[0px] mb-[50px]'>
      <h2 className='bg-mainBlue text-textWhite px-[16px] py-[8px] rounded-lg text-center '>CART TOTAL</h2>
      <div className='flex flex-col gap-[20px] mt-[30px]'>
        <h2>Total Price</h2>
        <span className='text-[20px] font-weight-[600]'>${currentCoupon === 'izi'  ?  Math.round((totalPrice * 100) / 100) / 2 : Math.round(totalPrice * 100) / 100}</span>

        <input 
        type="text"  
        placeholder='Enter coupon code' 
        className='border border-mainBlue px-[20px] py-[10px] rounded-lg'
        ref={coupon}
        disabled={currentCoupon}
        />
        <button onClick={handleCoupon} className='bg-mainBlue text-textWhite px-[20px] py-[10px] rounded-lg'>Use Discount</button>
      </div>
    </div>
      </div>
    </div>
  )
}

export default CartPage