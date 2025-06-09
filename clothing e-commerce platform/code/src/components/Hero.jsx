import React, { useState, useEffect } from 'react';
import { assets } from '../assets/frontend_assets/assets';
const Hero = () => {

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-[#EFE8C2] text-[#6E6A42] relative">
       <div className="absolute top-4 right-4 grid grid-cols-4 gap-2">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-[#6E6A42] rounded-full" />
        ))}
      </div>
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img
          src={assets.b_3}
          alt="Woman in red dress and black hat"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-4xl font-bold mb-4">Uncover And Cultivate Your Distinctive Style</h2>
        <p className="text-sm mb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, dicta commodi enim nulla accusamus, dolorem ipsa neque voluptatibus possimus, quia doloribus inventore esse obcaecati distinctio sint! Ipsam iste dolorem laboriosam.
        </p>
        
        <button className="w-auto bg-[#6E6A42] hover:bg-[#4a4a35] text-white py-2 px-4 rounded">
          EXPLORE NOW 
        </button>
      </div>
      <div className="absolute bottom-4 left-4 grid grid-cols-4 gap-2">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-[#6E6A42] rounded-full" />
        ))}
      </div>
    </div>
  )
}

export default Hero
