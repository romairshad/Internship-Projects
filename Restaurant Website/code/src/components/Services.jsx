import React from "react";
import { serviceItems } from "../assets/img/assets.js";

export default function Services() {
  
  return (
    <div className="bg-teal-100 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className=" py-10 px-4 sm:px-6 lg:px-8 rounded-lg">
        <h1 className="federo-regular text-3xl sm:text-4xl lg:text-5xl text-center p-5">Our Services</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              <img className="w-16 h-16 mb-4" src={item.icon} alt={item.title} />
              <h2 className="federo-regular text-xl sm:text-2xl mb-2 text-center">{item.title}</h2>
              <p className="montserrat text-sm text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}