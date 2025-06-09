import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube,Mail } from "lucide-react";
import  { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">LOGO</h2>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur. Laoreet cras egestas.Lorem ipsum dolor
            sit amet consectetur. Laoreet cras egestas.Lorem ipsum dolor sit amet
            consectetur. Laoreet cras egestas.Lorem ipsum dolor sit amet consectetur.
            Laoreet cras egestas.Lorem ipsum dolor sit amet consectetur. Laoreet cras egestas.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Web Development</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">UI/UX Design</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Graphic Design</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Business Planning</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Lorem</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Lorem Ipsum</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Testimonials</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="grid grid-rows-2 grid-cols-3  ">
            <Link path="/instagram" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </Link>
            <Link path="/facebook" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </Link>
            <Link path="/linkedIn" className="text-gray-400 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link path="/twitter" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </Link>
            <Link path="/youtube" className="text-gray-400 hover:text-white">
              <span className="sr-only">YouTube</span>
              <Youtube className="h-6 w-6" />
              </Link>
            <Link path="/mail" className="text-gray-400 hover:text-white">
              <span className="sr-only">Mail</span>
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;