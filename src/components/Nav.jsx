import React from 'react'
import {FaSearch , FaRegUser,FaShoppingCart }  from "react-icons/fa";
import Logo from '../Image/logo.jpg';

import './Nav.css';


const Nav = () => {
  return (
    <div className=' '>
        {/* Nav part */}
        <div className="">
          <div className=" flex justify-between px-4 h-24 border-b-2 border-black border-opacity-25 items-center  bg-white">
            <div className="logo w-1/3 h-full">
              <img src={Logo} alt="Logo_of_store"  className='h-full p-4'/>
            </div>
            <div className=" w-1/3 ">
              <ul className='menu flex justify-evenly '>
                <li>Shop</li>
                <li>About us</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>

            </div>
            <div className="icons flex w-1/3 justify-end pr-6">
                <div className='flex w-1/4 justify-between '>
                  <FaSearch/>
                  <FaRegUser/>
                  <FaShoppingCart/>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Nav