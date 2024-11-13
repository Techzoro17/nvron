import React from 'react'
import {  LiaFacebookF } from 'react-icons/lia'
import { RiInstagramLine, RiTwitterXFill } from 'react-icons/ri'


const Footer = () => {
  return (
    <div className='py-10 bg-black bg-opacity-85 text-white'>
        <div className=''>
            <ul className='flex justify-between px-10'>
                <li>LOGO</li>
                <li> 
                    <h2  className='  font-bold pb-5'> MENU</h2>
                    <ul className='flex flex-col gap-2'>
                        <li>Shop</li>
                        <li>About US</li>
                        <li>Ingredients</li>
                        <li>Content</li>
                        <li>Blogs</li>
                    </ul>
                </li>
                <li> 
                    <h2 className='  font-bold pb-5'>POLICIES</h2>
                    <ul className='flex flex-col gap-2'>
                       
                        <li>Shipping policy & Return Policy</li>
                        <li>Terms of service</li>
                        <li>Privacy Policy</li>
                    </ul>
                </li>
                <li className='bg-green-30'>
                    <h2 className='text-xl text-start  font-bold pb-5'>Follow Us</h2>
                    <div className=' border-2 rounded-full justify-evenly  flex my-5 mx-10  overflow-hidden '>
                        <LiaFacebookF className=' outline-none hover:cursor-pointer  h-[5vh] w-full  p-2  hover:bg-white duration-150   hover:text-black '/>
                        <RiTwitterXFill   className=' outline-none hover:cursor-pointer  h-[5vh] w-full  p-2 hover:bg-white  hover:text-black '/>
                        <RiInstagramLine  className=' outline-none hover:cursor-pointer  hover:bg-white  hover:text-black h-[5vh] w-full p-2  '/>
                        
                    </div>
                </li>
            </ul>
        </div>
        <div className='px-10 py-5'>
            Natural Infusion Store
        </div>
    </div>
  )
}

export default Footer