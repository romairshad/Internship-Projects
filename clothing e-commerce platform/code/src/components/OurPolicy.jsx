import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import Title from  "../components/Title";


const OurPolicy = () => {
  return (
    <div className="">
      <br />
      <div className="text-center py-8 text-3xl">
       <Title text1={"Cool & Trendy"}  text2={"Clothes For You"}/>
       <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse commodi atque, culpa ut blanditiis aspernatur nihil </p>

      </div>
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.b_4} className=" m-auto mb-5" alt="" />
        <p className="font-semibold text-2xl">Accessories</p>
        <p className="text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti id veritatis quod, ratione </p>
      </div>
      <div>
        <img src={assets.b_5} className="  m-auto mb-5" alt="" />
        <p className="font-semibold text-2xl">Accessories</p>
        <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nobis fugiat aut,</p>
      </div>
      <div>
        <img src={assets.b_6} className=" m-auto mb-5" alt="" />
        <p className="font-semibold text-2xl">Accessories</p>
        <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit veniam cum perferendis animi </p>
      </div>
    </div>
    </div>
  );
};

export default OurPolicy;
