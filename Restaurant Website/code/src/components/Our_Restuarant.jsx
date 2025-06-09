import React from "react";
import { assets } from "../assets/img/assets.js";

export default function Our_Restaurant() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-4 border-solid border-teal-500 rounded-lg overflow-hidden">
        <div className="order-1 lg:order-1">
          <img src={assets.background_img_3} alt="Restaurant interior" className="w-full h-full object-cover" />
        </div>
        <div className="order-2 lg:order-2 p-6 sm:p-8 flex flex-col justify-center">
          <h2 className="federo-regular text-3xl sm:text-4xl lg:text-5xl mb-4 text-center lg:text-right">Our Restaurant</h2>
          <p className="montserrat text-sm sm:text-base leading-6 text-center lg:text-right">
            Welcome to our restaurant, where we serve the best food in town. Our
            menu features a wide variety of dishes, from classic comfort food to
            international cuisine. We use only the freshest ingredients and
            prepare each dish with love and care. Our restaurant is a cozy and
            welcoming space, perfect for a night out with friends or a family
            dinner. We look forward to serving you!
          </p>
        </div>
        <div className="order-4 lg:order-3 p-6 sm:p-8 flex flex-col justify-center">
          <h2 className="federo-regular text-3xl sm:text-4xl lg:text-5xl mb-4 text-center">Meet & Greet</h2>
          <p className="montserrat text-sm sm:text-base leading-6 text-center">
            Our restaurant is a place where you can meet and greet with your
            friends and family. We have a cozy atmosphere and a wide variety of 
            dishes to choose from. Our staff is friendly and welcoming, and we
            look forward to serving you!
          </p>
        </div>
        <div className="order-3 lg:order-4">
          <img src={assets.background_img_4} alt="People dining in the restaurant" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}