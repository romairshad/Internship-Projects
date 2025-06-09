import React from 'react';
import { assets } from '../assets/assets';
import Title from './Title';
const ServiceList = () => (
  <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
    <li>Managed IT Services</li>
    <li>Cloud Solution</li>
    <li>Cybersecurity</li>
    <li>IT Consulting</li>
  </ul>
);

const ContentSection = ({ imageUrl, imageAlt, reverse = false }) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white shadow-lg rounded-lg overflow-hidden`}>
    <div className="md:w-1/2">
      <img src={imageUrl} alt={imageAlt} className="w-full h-full object-cover" />
    </div>
    <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">The Fastest Hiring And Payments</h2>
        <p className="text-sm md:text-base mb-4">
          We specialize in delivering cutting-edge IT services tailored to meet the unique needs of businesses across
          industries. Our expert team is dedicated to providing comprehensive solutions that drive efficiency, enhance
          security, and foster innovation.
        </p>
        <ServiceList />
      </div>
      <p className="text-xs md:text-sm text-gray-500 mt-4">Pay your external workforce in one click.</p>
    </div>
  </div>
);

const FastestHiringAndPayments = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
        <Title text1={'Everything you Need To Get Ahead'}/>
        <ContentSection 
        imageUrl={assets.Rectangle_6}
        imageAlt="Two men discussing in an office"
        reverse={true}
      />
      <ContentSection 
        imageUrl={assets.Rectangle_7}
        imageAlt="Cityscape with cloud computing concept"
      />
      <ContentSection 
        imageUrl={assets.img_2}
        imageAlt="Two men discussing in an office"
        reverse={true}
      />
    </div>
  );
};

export default FastestHiringAndPayments;