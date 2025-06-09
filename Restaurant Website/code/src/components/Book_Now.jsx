import React from 'react'
import { assets } from '../assets/img/assets.js'
const Book_Now = () => {
  return (
    <div className="relative h-80 w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={assets.background_img_2}
          alt="Restaurant terrace"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className=" relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className=" federo-regular mb-4 text-6xl font-bold tracking-tight sm:text-7xl">
          Book Early & Save
        </h1>
        <p className=" montserrat mb-8 text-xl sm:text-2xl">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <button className="bg-[#00BCA8] size-max p-2 text-white rounded-md hover:bg-[#00bca9b3] active:bg-[#2effea]">
          Book Now
        </button>
      </div>
    </div>
  )

}

export default Book_Now
