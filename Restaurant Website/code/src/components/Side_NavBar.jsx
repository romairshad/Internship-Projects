import React from 'react'
import { Home, Menu, Users, Info, Phone} from 'lucide-react';
import { Link } from 'react-router-dom';



const NavItem = ({ Icon, label }) => (
  <div className="flex flex-col items-center mb-4 cursor-pointer">
    <Icon className="w-6 h-6 mb-1" />
    <span className="text-xs uppercase">{label}</span>
  </div>
);

const Side_NavBar = () => {
  return (
    <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-35 text-white p-4 rounded-l-lg">
      <Link to="/">
      <NavItem Icon={Home} label="Home" />
      </Link>
      <Link to="/menu">
      <NavItem Icon={Menu} label="Menu" />
      </Link>
      <Link to="/franchising">
      <NavItem Icon={Users} label="Franchise" />
      </Link>
      <Link to="/home/about">
      <NavItem Icon={Info} label="About" />
      </Link>
      <Link to="/contact">
      <NavItem Icon={Phone} label="Contact Us" />
      </Link>
      <Link to="/menu">
      <button className="bg-[#00BCA8] size-max p-2 text-white rounded-md hover:bg-[#00bca9b3] active:bg-[#2effea]">
          Book Now
        </button>
      </Link>
      </nav>
  )
}

export default Side_NavBar
