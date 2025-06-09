import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js";
import GitHub from  "../components/GitHub.jsx";

const NavBar_about = () => {
  return (
    <>
    
    <div
      className="min-h-screen bg-black background bg-right bg-no-repeat  text-white"
      style={{ backgroundImage: `url(${assets.Rectangle_1})` }}
    >
      <header className=" container mx-auto px-10 py-8 flex justify-between items-center ">
        <div className="text-xl font-bold">YOUR LOGO</div>
        <nav className="hidden md:flex space-x-4">
          <Link to="/services" className="text-xs hover:text-gray-300">
            PRODUCTS
          </Link>
          <Link to="/about" className=" text-xs hover:text-gray-300">
            WHY XYZ
          </Link>
          <Link to="/" className="text-xs hover:text-gray-300">
            RESOURCES
          </Link>
          <Link to="/" className="text-xs hover:text-gray-300">
            COMPANY
          </Link>
          <Link to="/" className="text-xs hover:text-gray-300">
            PRICING
          </Link>
        </nav>
        <div className="flex space-x-4">
          <Link to="/login" className="text-xs hover:text-gray-300">
            LOGIN
          </Link>
          <Link to="/contact" className="text-xs hover:text-gray-300">
            CONTACT US
          </Link>
        </div>
      </header>
      <main className="container mx-auto px-10 py-16 relative">
        <div className="relative  z-10 text-left ">
          <h1 className=" text-6xl md:text-6xl font-bold mb-6">OUR STORY</h1>
          <p className="text-xs mb-8 max-w-2xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            blanditiis repudiandae, quos cum tempora ut iusto quaerat doloribus
            veritatis laborum totam iste pariatur, illo facere autem impedit.
            Numquam, amet officiis!
          </p>
          <div className="flex justify-left space-x-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded">
              BOOK A DEMO
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-black px-6 py-2 rounded">
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      </main>
    </div>
      <GitHub/>
      </>
  );
};

export default NavBar_about;
