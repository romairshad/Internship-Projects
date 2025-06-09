import React from "react";
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-black  text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <select 
              className="bg-black text-white text-sm border-none focus:ring-2 focus:ring-white rounded-md"
              aria-label="Select language"
            >
              <option lang="en" value="en">English</option>
              <option lang="ur" value="ur">Urdu</option>
              <option lang="ro" value="ro">Romanian</option>
            </select>
          </div>
          
          <div>
            <h1 className="federo-regular text-3xl sm:text-4xl text-white text-center">
              LOGO
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="hidden sm:block h-8 w-px bg-white opacity-50"></span>
            <div className="flex space-x-4">
              <Link to="/facebook" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link to="/instagram" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="/twitter" aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}