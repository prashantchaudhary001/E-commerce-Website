import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      <div>
        <img src={assets.logo} className='w-40 h-20 rounded-full' alt="" />
        <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab nihil nam doloremque, quaerat dolorum optio odit dignissimos dolorem minus, fugit atque earum minima laboriosam doloribus accusamus officiis iste facere!</p>
      </div>

      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
      </div>

      <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-212-356-7890</li>
            <li>ankit@90.com</li>
        </ul>
       
      </div>
    </div>
    <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ ModaMart.com -All rights reserved</p>
    </div>
    
    </div>
  )
}

export default Footer
