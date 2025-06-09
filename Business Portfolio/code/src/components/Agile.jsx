import React from 'react';
import { assets } from '../assets/assets';
const NetworkImage = () => (
  <img
    src={assets.img_1}
    alt="Businessperson's hand reaching towards a glowing global network"
    className="w-full h-auto object-cover rounded-lg shadow-lg"
  />
);

const Caption = () => (
  <p className="text-lg md:text-xl font-semibold lg:text-2xl text-black mt-4 md:mt-6 lg:mt-8 text-center px-4">
    Give your company a faster, more agile way to work with freelancers and contractors. Find contract and pay your external workforce in one click, with 100% compliance.
  </p>
);

const Agile = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <div className="max-w-4xl mx-auto">
        <NetworkImage />
        <Caption />
      </div>
    </div>
  );
};

export default Agile;