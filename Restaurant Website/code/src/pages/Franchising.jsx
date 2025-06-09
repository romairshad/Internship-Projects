import React from 'react';
import Side_NavBar from '../components/Side_NavBar';
import { assets } from '../assets/img/assets.js';
import ImageSlider from '../components/ImageSlider.jsx';



export default function RestaurantPage() {
  return (
    <div className="relative min-h-screen bg-gray-100">

      {/* Hero Section */}
      <div className="relative h-64 bg-cover bg-center" style={{backgroundImage: `url(${assets.background_img_3})`}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className=" federo-regular text-white text-5xl font-serif">Our Branches</h1>
        </div>
      </div>

      {/* Side Navigation */}
     
      {/* Main Content */}
      <main className="container mx-auto mt-8 p-4">
        <h2 className=" federo-regular text-3xl font-serif text-center mb-6">Introducing New look</h2>
        <ImageSlider/>
      </main>
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-lg">
      <h1 className=" federo-regular text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">We Are Now in Bristol</h1>
      
      <div className="mb-4 sm:mb-6 relative h-48 sm:h-64 rounded-lg overflow-hidden">
        <img
          src={assets.background_img_2}
          alt="Outdoor seating area"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      <div className="md:flex md:space-x-6">
        <div className="md:w-1/2 mb-4 sm:mb-0">
          <h2 className="federo-regular text-xl sm:text-2xl font-semibold mb-2">Pouros and Sons</h2>
          <p className="montserrat text-gray-600 mb-2">646 First Street, Quigleyville 36427 country</p>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${i < 4 ? 'text-yellow-500' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="montserrat ml-2 text-sm text-gray-600">768-123 Reviews</span>
          </div>
          <p className="montserrat text-gray-600">0321-1234-123</p>
        </div>
        
        <div className="md:w-1/2">
          <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
            <img
              src={assets.map_img_1}
              alt="Map"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
    <Side_NavBar/>
    </div>
  );
}