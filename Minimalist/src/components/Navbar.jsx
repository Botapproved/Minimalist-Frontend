import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  const [visible,setVisible] = useState(false);
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to={'/'}><img src={assets.logo} className="w-36" alt=""/></Link>
      <ul className='hidden sm:flex gap-5 text-md text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
        <p>HOME</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
        <p>COLLECTION</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
        <p>CONTACT</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img src={assets.searchIcon} className='w-5 cursor-pointer' alt="" />
        <div className='group relative'>
          <img src={assets.profileIcon} className='w-5 cursor-pointer' alt=''/>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className="relative">
        <img src={assets.cartIcon} alt="cart" className='w-5 min-w-5'/>
        <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
        
        </Link>
        <img onClick={()=>setVisible(true)} src={assets.menuIcon} alt='Menu' className='w-5 cursor-pointer sm:hidden' />


      </div>
      {/* Sidebar Menu for small screen */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden z-50 bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img className='h-4 rotate-180' src={assets.dropDownIcon} alt="dropDown" />
            <p>Back</p>

          </div>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border hover:bg-black' to='/'>HOME</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border  hover:bg-black' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border  hover:bg-black' to='/contact'>CONTACT</NavLink>

        </div>

      </div>

    </div>
  )
}

export default Navbar;