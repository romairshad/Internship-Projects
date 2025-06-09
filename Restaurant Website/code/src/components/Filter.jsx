import React, { useState } from "react";
import {menu} from "../assets/img/assets.js"

function Slider({ min, max, value, onChange }) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
    />
  );
}

function Button({ onClick, children, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 bg-black text-white rounded hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
}

export default function PriceFilter() {
  const [priceRange, setPriceRange] = useState([0, 8000]);
  const [filteredMenu, setFilteredMenu] = useState(menu);

  const handleMinPriceChange = (value) => {
    setPriceRange([value, Math.max(value, priceRange[1])]);
  };

  const handleMaxPriceChange = (value) => {
    setPriceRange([Math.min(value, priceRange[0]), value]);
  };

  const handleFilter = (filters) => {
    const filtered = menu.filter((item) => {
      return (
        item.category.toUpperCase() === selectedCategory &&
        (filters.price ? item.price <= filters.price : true) &&
        (filters.rating ? item.rating >= filters.rating : true)
      );
    });
    setFilteredMenu(filtered);
  };

  return (
    <div className=" w-72 h-30 max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-sm font-bold mb-4">Filter By Price</h2>
      <div className="mb-6">
        <Slider
          min={0}
          max={8000}
          value={priceRange[0]}
          onChange={handleMinPriceChange}
        />
        <Slider
          min={0}
          max={8000}
          value={priceRange[1]}
          onChange={handleMaxPriceChange}
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-600">
          From ${priceRange[0]} to ${priceRange[1]}
        </span>
        <Button onClick={handleFilter}>Filter</Button>
      </div>
    </div>
  );
}
