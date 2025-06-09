import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Facebook, Instagram,Twitter } from "lucide-react";
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className="text-[#224F34] ">
      <div className="flex flex-col p-5 sm:grid grid-cols-[3fr_1fr_1fr]  my-10 mt-40 text-sm">
        <div className="space-y-5">
          <h1 className="text-4xl font-bold">LOGO</h1>
          <h3 className="text-2xl">Social Media</h3>
          <div className="flex items-center">
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
        <div>
            <p className="text-xl font-medium mb-5">SHOP</p>
            <ul className="flex flex-col gap-1 ">
                <li>Products</li>
                <li>Overview</li>
                <li>Pricing</li>
                <li>Releases</li>

            </ul>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 ">
                <li>ABOUT US</li>
                <li>Contact Us</li>
                <li>News</li>
                <li>Support</li>

            </ul>
        </div>
        <div>
            <p className="text-xl space-y-5 font-medium mb-5">STAY UP TO DATE</p>
            <ul className="flex flex-col gap-1 ">
                <li>+92 21 99 230 149</li>
                <li>Contact@foreveryou.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024 @ forever.com -  All rights reserved</p>

      </div>
    </div>
  );
};

export default Footer;
