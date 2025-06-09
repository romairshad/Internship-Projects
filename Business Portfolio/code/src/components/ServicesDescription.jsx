import React, { useState, useEffect, useContext } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
export default function ServiceDescription() {
  const { services } = useContext(ShopContext);
  const [serviceList, setServiceList] = useState([]);
  useEffect(() => {
    setServiceList(services);
  }, []);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="bg-white  shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
        <Title text1={'Service Description'}/>
          

          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur. Nibh non viverra purus nunc.
            In suscipit eget tristique pretium. Congue quam diam enim mi
            pellentesque augue arcu. Praesent aliquam dapibus habitant mattis
            porta lorem porttitor lacus commodo.Elementum elementum orci etiam
            fames venenatis sed n suscipit eget tristique pretium. Congue quam
            diam enim mi pellentesque augue arcu. Praesent aliquam dapibus
            habitant mattis porta lorem porttitor lacus commodo.Elementum
            elementum orci etiam fames venenatis sed
          </p>
          <button className="text-blue-500 hover:text-blue-700">More...</button>

          <div className="flex flex-col text-center font-semibold md:flex-row mt-8 gap-8">
            <div className="flex-1">
              {serviceList &&
                serviceList.map((services, index) => (
                  <div
                    key={index}
                    className="mb-4 pb-2 border-b border-gray-200"
                  >
                    {services}
                  </div>
                ))}
            </div>
            <div className="flex-1 mt-6 md:mt-0">
              <div className="relative w-full h-64 md:h-80">
                <img
                  src={assets.Rectangle_84}
                  alt="Web Development"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
