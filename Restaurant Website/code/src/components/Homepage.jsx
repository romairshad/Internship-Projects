import React from 'react';

import { assets } from "../assets/img/assets.js"



export default function Homepage() {

  return (
    <div className="relative h-screen w-full overflow-hidden  text-white background" style={{backgroundImage:`url(${assets.p_img_1})`}}>
      <div className="flex h-full">
        <div className="flex w-1/2 flex-col justify-center px-12">
          <p className="mb-4 font-serif text-xl italic text-gray-300">It's Quick & Amusing!</p>
          <h1 className="mb-4 font-serif text-5xl font-bold">Lorem ipsum dolor sit amet consectetur.</h1>
          <p className="mb-8 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p>
          <button className="w-32 rounded-full bg-teal-500 px-6 py-2 font-semibold text-white hover:bg-teal-600">
            See Menu
          </button>
        </div>
        <div className="w-1/2">
          <img
            src={assets.p_img_1}
            alt="Delicious dish"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
     
      
    </div>
  );
}