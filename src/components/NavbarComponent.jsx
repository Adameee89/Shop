import logo from '../assets/logo.png'
//icons
import { FaUser } from 'react-icons/fa'
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from 'react-icons/fa'

//nav link
import { Link, NavLink } from 'react-router-dom'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import CategoryComponent from './CategoryComponent';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function NavbarComponent() {
    const [totalItem, setTotalItem] = useState(0);
    const {totalProduct} = useSelector(state => state.cartStore);
    const {favoriteTotal} = useSelector(state => state.favoriteStore);
    
    useEffect(() => {
        if(localStorage.hasOwnProperty('total_item')) {
            setTotalItem(localStorage.getItem('total_item'));
        }
    }, [totalProduct]);

    return (
        <>
        <nav className='bg-mainBlue py-3 lg:py-0 lg:h-24 w-full flex items-center shadow-md'>
            <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-0 px-4'>
                <Link to='/'>
                    <img src={logo} alt="logo" className='h-12 lg:h-16' />
                </Link>

                {/* Search Component */}
                <div className='flex items-center bg-white rounded-full shadow-lg'>
                    <input type="text" placeholder='Search products...' className='rounded-l-full px-6 py-3 outline-none flex-grow' />
                    <button className='rounded-r-full px-6 py-3 bg-mainOrange text-textWhite hover:bg-orange-600 transition'>Search</button>
                </div>

                {/* General Info */}
                <div className='flex gap-6 text-textWhite'>
                    <div className='flex items-center gap-2'>
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaHeart size={24} />
                        <span className='w-6 h-6 bg-mainOrange rounded-full flex justify-center items-center text-textWhite text-xs'>
                            {favoriteTotal}
                        </span>
                        <NavLink to="/favorite" className='hover:underline'>Favorite</NavLink>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaShoppingCart size={24} />
                        <span className='w-6 h-6 bg-mainOrange rounded-full flex justify-center items-center text-textWhite text-xs'>
                            {totalItem}
                        </span>
                        <NavLink to="/cart" className='hover:underline'>Cart</NavLink>
                    </div>
                </div>
            </div>
        </nav>
        <CategoryComponent />
        </>
    )
}

export default NavbarComponent
