import React, { useState } from 'react';
import { ChefHat, Utensils, Clock, Users } from 'lucide-react';
import { assets, menu } from '../assets/img/assets.js';
import Filter from '../components/Filter';
import Side_NavBar from '../components/Side_NavBar';
import Menu_slider from '../components/Menu_slider.jsx';

const StatItem = ({ Icon, value, label }) => (
  <div className="flex flex-col items-center">
    <Icon className="w-12 h-12 mb-2" />
    <span className="text-3xl font-bold">{value}</span>
    <span className="text-sm">{label}</span>
  </div>
);

const CATEGORIES = ['STARTER', 'MAIN COURSE', 'DESSERTS', 'DRINKS'];

export default function Restaurant_Menu() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [filteredMenu, setFilteredMenu] = useState(menu);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setFilteredMenu(menu.filter(item => item.category.toUpperCase() === category));
  };

  const handleFilter = (filters) => {
    const filtered = menu.filter(item => {
      return (
        item.category.toUpperCase() === selectedCategory &&
        (filters.price ? item.price <= filters.price : true) &&
        (filters.rating ? item.rating >= filters.rating : true)
      );
    });
    setFilteredMenu(filtered);
  };

  return (
    <div className="flex bg-gray-100">
      <div className="flex-grow overflow-auto">
        <div className="relative h-64 bg-cover bg-center" style={{backgroundImage: `url(${assets.background_img_1})`}}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-5xl font-serif">Menu</h1>
          </div>
        </div>

        <div className="container mx-auto mt-8 p-4">
          <div className="flex federo-regular justify-center space-x-4 mb-8">
            {CATEGORIES.map((category) => (
              <button 
                key={category} 
                className={`px-4 py-2 text-gray-600 hover:text-black focus:text-black focus:border-b-2 focus:border-black ${selectedCategory === category ? 'border-b-2 border-black text-black' : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <Filter className="m-4" onFilter={handleFilter} />
          <Menu_slider items={filteredMenu} />

          <div className="bg-black montserrat text-white py-12 px-4 mt-12">
            <div className="container mx-auto flex justify-between">
              <StatItem Icon={ChefHat} value="420" label="Professional Chefs" />
              <StatItem Icon={Utensils} value="320" label="Items Of Food" />
              <StatItem Icon={Clock} value="30+" label="Years Of Experienced" />
              <StatItem Icon={Users} value="220" label="Happy Customers" />
            </div>
          </div>
        </div>

        <Side_NavBar />
      </div>
    </div>
  );
}