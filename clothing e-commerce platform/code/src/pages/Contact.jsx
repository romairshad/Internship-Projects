import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-20'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-black '>Our Store</p>
          <p className='text-gray-500'> Shop 2025 <br />Packages Mall, 26 Walton Rd </p>
          <p className='text-gray-500'>Tel: 042 389 142 30 <br /> Email: contactus@forever.com</p>
          <p className='font-semibold text-xl text-black'>Careers at Forever</p>
          <p className='text-gray-500'> Learn more about our teams and job opening </p>
          <button className='border border-emerald-800 px-8 py-4 text-sm hover:bg-emerald-700 hover:text-white transition-all duration-500 '>Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact
