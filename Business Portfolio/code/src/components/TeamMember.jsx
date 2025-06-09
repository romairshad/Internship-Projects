import { Facebook, Instagram, Linkedin } from 'lucide-react'




const TeamMember = ({ name, position, image}) => (
    <div className="bg-black text-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
      <img src={image} alt="" className="w-full" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-sm text-gray-400 mb-4">{position}</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-indigo-500 hover:text-indigo-400">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-indigo-500 hover:text-indigo-400">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-indigo-500 hover:text-indigo-400">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  )
  export  default TeamMember;
