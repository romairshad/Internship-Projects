import React from "react";
import { assets } from "../assets/img/assets.js";
import { CheckIcon } from 'lucide-react';

export default function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="federo-regular text-3xl sm:text-4xl lg:text-5xl">About Us</h2>
          <h3 className="federo-regular text-2xl sm:text-3xl lg:text-4xl">We Create the best foody product</h3>
          <p className="montserrat text-sm sm:text-base">
            Lorem ipsum dolor sit, consectetur adipiscing elit. Quisque diam
            pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
            augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
            sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
            consequat.
          </p>
          <ul className="montserrat text-sm sm:text-base space-y-2">
            {[
              "Lacus nisi, et ac dapibus sit eu vlite i consequat.",
              "Quisque diam pellebtesque bibendum bibendum non dui volutpat fringilla.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckIcon className="w-5 h-5 mr-2 text-black flex-shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button className="bg-[#00BCA8] px-6 py-3 text-white rounded-md hover:bg-[#00bca9b3] active:bg-[#2effea] transition duration-300 ease-in-out text-sm sm:text-base">
            Read More
          </button>
        </div>
        <div className="lg:w-1/2 space-y-4">
          <img 
            className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg" 
            src={assets.p_img_7} 
            alt="Delicious food presentation" 
          />
          <div className="grid grid-cols-2 gap-4">
            <img 
              className="w-full h-40 sm:h-48 lg:h-56 object-cover rounded-lg" 
              src={assets.p_img_6} 
              alt="Chef preparing a meal" 
            />
            <img 
              className="w-full h-40 sm:h-48 lg:h-56 object-cover rounded-lg" 
              src={assets.p_img_8} 
              alt="Restaurant interior" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}