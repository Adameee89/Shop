import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';

function CartPage() {

  let cart = JSON.parse(localStorage.getItem('cart_item'))



  return (
    <div className='mt-[50px]'>
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
          
          {cart ? cart.map((product) => (
            <TableRow
              key={product.id}
            >
              <TableCell component="th" scope="row">
                <img src={product.thumbnail} alt="" className='w-[90px] h-[90px] border border-mainBlue rounded-lg' />
              </TableCell>
              <TableCell align="left">${product.price}</TableCell>
              <TableCell align="left">
                <div className='flex items-center'>
                  <button className='px-[8px] py-[4px] bg-slate-300 text-[18px]'>+</button>
                  <span className='px-[8px] py-[4px] bg-slate-300 text-[18px]'>{product.count}</span>
                  <button className='px-[8px] py-[4px] bg-slate-300 text-[18px]'>-</button>
                </div>
              </TableCell>
              <TableCell align="left">
                ${product.cartTotal}
              </TableCell>
              <TableCell align="right">
                <button className='text-red-500' >Remove</button>
              </TableCell>
            </TableRow>
          )) : <p>Cart is empty</p>} 
        </TableBody>
      </Table>
    </TableContainer>
    {/* right side */}
    <div className='w-full lg:w-[30%]'>
      <h2>CARD TOTAL</h2>
    </div>


      </div>
    </div>
  )
}

export default CartPage