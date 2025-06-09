import React from 'react';
import {Cog, Zap, Eye, User}  from 'lucide-react'
import { assets } from '../assets/assets';
const StatItem = ({ icon, value, label }) => (
    <div className="flex flex-col items-center">
      {icon}
      <p className="text-xl font-bold mt-2">{value}</p>
      <p className="text-sm">{label}</p>
    </div>
  )
  


const ITServicesLanding = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <img src={assets.Rectangle_12} alt="Technology concept" className="w-full h-3/4 rounded-lg" />
          <img src={assets.Rectangle_13} alt="Team collaboration" className="w-full h-3/4 rounded-lg" />
          <img src={assets.Rectangle_14} alt="Smart city concept" className="w-full h-3/4 rounded-lg" />
          <img src={assets.Rectangle_15} alt="Data visualization" className="w-full h-3/4  rounded-lg" />
        </div>

        <div className="mb-12 max-w-3xl mx-auto text-left">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            We specialize in delivering cutting-edge IT services tailored to meet the unique needs of businesses across industries.
          </h1>
          <p className="text-lg mb-4">
            Our expert team is dedicated to providing comprehensive solutions that drive efficiency, enhance security, and foster innovation.
          </p>
          <p className="text-sm text-gray-400">Pay your external workforce in one click.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatItem 
            icon={<Cog className="w-12 h-12 mx-auto" />}
            value="12"
            label="Services"
          />
          <StatItem 
            icon={<Zap className="w-12 h-12 mx-auto" />}
            value="200+"
            label="Projects"
          />
          <StatItem 
            icon={<Eye className="w-12 h-12 mx-auto" />}
            value="$200k+"
            label="Revenue"
          />
          <StatItem 
            icon={<User className="w-12 h-12 mx-auto" />}
            value="300+"
            label="Happy Clients"
          />
        </div>
      </div>
    </div>
  );
};

export default ITServicesLanding;