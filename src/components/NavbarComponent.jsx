import logo from '../assets/logo.png'
//icons
import { FaUser } from 'react-icons/fa'
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from 'react-icons/fa'

//nav link
import { NavLink } from 'react-router-dom'




function NavbarComponent() {
  return (
    <nav className='bg-mainBlue h-[100%] py-[10px] lg:py-[0px] lg:h-[100px] w-full flex items-center '>
        <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center gap-[20px] '>
            <img src={logo} alt="logo" />

            {/* Search Component */}
            <div className='bg-white rounded-[20px] flex'>
                <input type="text" placeholder='Search products...' className='rounded-l-[20px] px-[25px] py-[17px] outline-none' />
                <button className='rounded-r-[20px] px-[25px] py-[17px] bg-mainOrange text-textWhite'>Search</button>
            </div>

            {/* general info */}
            <div className='flex gap-[20px] text-textWhite'>
                <div className='flex items-center gap-[10px]'>
                    <FaUser size={24}/>
                    <p>Clerk</p> 
                </div>
                <div className='flex items-center gap-[10px]'>
                    <FaHeart size={24}/>
                    <span className='w-[25px] h-[25px] bg-mainOrange rounded-full flex justify-center items-center text-textWhite text-[12px]'>0</span>
                    <NavLink to="/">Favorite</NavLink>
                    
                </div>
                <div className='flex items-center gap-[10px]'>
                    <FaShoppingCart size={24}/>
                    <span className='w-[25px] h-[25px] bg-mainOrange rounded-full flex justify-center items-center text-textWhite text-[12px]'>0</span>
                    <NavLink>Cart</NavLink>
                    
                </div>
            </div>

        </div>
    </nav>
  )
}

export default NavbarComponent