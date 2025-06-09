import React from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import Title from './Title';

const TestimonialCard = ({ name, text, highlighted = false }) => (
  <div className={`p-6 rounded-lg ${highlighted ? 'bg-[#EFE8C2]' : 'bg-gray-50'}`}>
    <div className="text-4xl font-serif text-black mb-4">"</div>
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-black">{text}</p>
  </div>
);

const ClientFeedback = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Title text1={"Clients"} text2={"Feedback"} className="text-3xl font-bold text-center text-[#6E6A42] mb-12"></Title>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            name="Maria Shabbir"
            text="The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth and the clothes I ordered fit prefectly. I'm beyond satisfied!"
          />
          <TestimonialCard
            name="Beenish Mumtaz"
            text="I absolutely love the quality and style of the clothing I purchased from this website. Customer service was outstanding, and I received my order quickly. Highly recommended!"
            highlighted={true}
          />
          <TestimonialCard
            name="Ayra Khan"
            text="I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!"
          />
        </div>
        <div className="flex justify-center mt-8">
          <button className="mr-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-2 rounded-full bg-[#f5e7c1] hover:bg-[#f0dca8]">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;