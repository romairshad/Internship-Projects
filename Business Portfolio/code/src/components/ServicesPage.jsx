import React from 'react'
import { Cog, Zap, Eye, User } from 'lucide-react'

const StatItem = ({ icon, value, label }) => (
  <div className="flex flex-col items-center">
    {icon}
    <p className="text-xl font-bold mt-2">{value}</p>
    <p className="text-sm">{label}</p>
  </div>
)

const ServicesPage = () => {
  return (
    <div className="bg-black text-white min-h-screen mb-52 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white text-black p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">THAT LOT</h2>
          <p className="mb-4">
            Give your company a faster, more agile way to work with freelancers and contractors. Find contract and
            pay your external workforce in one click, with 100% compliance.
          </p>
          <div className="flex justify-end">
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
              BOOK A DEMO
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatItem 
            icon={<Cog className="w-12 h-12 mx-auto" />}
            value="12"
            label="Services"
          />
          <StatItem 
            icon={<Zap className="w-12 h-12 mx-auto" />}
            value="200+"
            label="Projects"
          />
          <StatItem 
            icon={<Eye className="w-12 h-12 mx-auto" />}
            value="$200k+"
            label="Revenue"
          />
          <StatItem 
            icon={<User className="w-12 h-12 mx-auto" />}
            value="300+"
            label="Happy Clients"
          />
        </div>
      </div>
    </div>
  )
}

export default ServicesPage