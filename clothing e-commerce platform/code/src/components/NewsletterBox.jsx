import React from 'react'

const NewsletterBox = () => {

  const onSubmitHandler  = (event) => {
    event.preventDefault();
  }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-[#6E6A42] '>Stay in the Loop</p>
      <p className='text-black mt-3'> Enter your email address below to get started</p>
      <form className='w-full sm:w-1/2 flex item-center gap-3 mx-auto my-6 border pl-3 '>
        <input type="email" placeholder="Enter your email address" className="w-full sm:flex-1 outline-none" required />
        <button type="submit" className='bg-transparent text-black border-2 border-emerald-800 text-xs px-10 py-4 active:bg-emerald-700'> Subscribe</button>

      </form>
    </div>
  )
}

export default NewsletterBox
