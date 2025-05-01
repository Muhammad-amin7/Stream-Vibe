import React from 'react'
import logo from "../../assets/Logo.svg"
import { FaBars, FaBell, FaSearch } from "react-icons/fa";
import Menu from './Menu';

export default function NavBar() {
      return (
            <nav className='py-5 w-screen bg-transparent fixed top-0 left-0 z-50'>
                  <div className='w-[80%] max-xl:w-9/10 sm:grid grid-cols-[200px_auto_200px] max-2xl:grid-cols-[160px_auto_160px] max-xl:grid-cols-[120px_auto_120px]  m-auto justify-between items-center flex'>
                        <div className='flex items-center text-2xl max-2xl:text-xl max-xl:text-lg max-lg:text-sm font-extrabold text-white gap-1 cursor-pointer'>
                              <img src={logo} alt="Stream Vibe Logo" className='max-2xl:w-10 max-lg:w-6' />
                              <span>StreamVibe</span>
                        </div>

                        <div className='hidden sm:block'>
                              <Menu />
                        </div>

                        <div className='justify-end text-white text text-2xl max-2xl:text-xl max-lg:text-sm gap-5 cursor-pointer hidden sm:flex'>
                              <FaSearch />
                              <FaBell />
                        </div>

                        <div className='sm:hidden text-end text-white text-sm'>
                              <FaBars />
                        </div>
                  </div>
            </nav>
      )
}
