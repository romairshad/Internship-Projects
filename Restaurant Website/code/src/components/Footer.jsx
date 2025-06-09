import React from 'react'
import { assets } from '../assets/img/assets.js'

export default function Footer() {
  return (
    <div className='container pt-40'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-stone-300 px-4 sm:px-8 lg:px-20 py-8 gap-8'>
        <div className='space-y-4'>
          <h2 className='federo-regular text-xl'>LOGO</h2>
          <p className='montserrat text-xs'>Lorem ipsum dolor sit amet</p>
          <div className='flex'>
            <input className='montserrat text-xs py-1 px-1 flex-grow' type="email" name="email" id="email" placeholder='Enter Your Email' required />
            <button type="submit">
              <img className='cursor-pointer w-6 h-6' src={assets.send_1} alt="Send" />
            </button>
          </div>
        </div>
        <div className='space-y-4'>
          <h3 className='federo-regular text-lg'>Contact Us</h3>
          <div className='flex gap-2 items-start'>
            <img className='w-4 h-4 mt-1' src={assets.location_1} alt="Location" />
            <p className='montserrat text-xs'>25950 Long Lane, North Ismael 142080</p>
          </div>
          <div className="flex gap-2 items-center">
            <img className='w-4 h-4' src={assets.phone_1} alt="Phone" />
            <p className='montserrat text-xs'>00965 - 96659986</p>
          </div>
          <div className="flex gap-2 items-center">
            <img className='w-4 h-4' src={assets.open_mail_1} alt="Email" />
            <p className='montserrat text-xs'>Jermaine.Connelly@yahoo.com</p>
          </div>
          <div className="flex gap-2 items-start">
            <img className='w-4 h-4 mt-1' src={assets.clock_1} alt="Hours" />
            <p className='montserrat text-xs'>Sun - Sat /10:00 AM - 8:00 PM</p>
          </div>
        </div>
        <div className='space-y-4'>
          <h3 className='federo-regular text-lg'>Links</h3>
          <p className='montserrat text-xs'>About Us</p>
          <p className='montserrat text-xs'>Contact Us</p>
          <p className='montserrat text-xs'>Our Menu</p>
          <p className='montserrat text-xs'>Team</p>
          <p className='montserrat text-xs'>FAQ</p>
        </div>
        <div className='space-y-4'>
          <h3 className='federo-regular text-lg'>Gallery</h3>
          <div className='grid grid-cols-3 gap-2'>
            <img src={assets.p_img_11} alt="" className='w-full h-20 object-cover' />
            <img src={assets.p_img_1} alt="" className='w-full h-20 object-cover' />
            <img src={assets.p_img_4} alt="" className='w-full h-20 object-cover' />
            <img src={assets.p_img_7} alt="" className='w-full h-20 object-cover' />
            <img src={assets.p_img_13} alt="" className='w-full h-20 object-cover' />
            <img src={assets.p_img_5} alt="" className='w-full h-20 object-cover' />
          </div>
        </div>
      </div> 

      <div className='bg-[#00BCA8] text-white text-xs federo-regular flex flex-col sm:flex-row justify-between px-4 sm:px-8 lg:px-20 py-4'>
        <p className='text-center sm:text-left mb-2 sm:mb-0'>Copyright © 2000-2020.logo.com. All rights reserved</p>
        <div className='flex flex-wrap justify-center sm:justify-end gap-4'>
          <p>Privacy Policy</p>
          <p>Term of Use</p>
          <p>Partner</p>
        </div>
      </div>
    </div>
  )
}