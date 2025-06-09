import React from 'react'
import { Link } from 'react-router-dom'

const Cheif_data = ({ id, name, image, rate, description }) => {
  return (
      <Link className='text-gray-700 cursor-pointer py-32 px-2' >
        <div className='overflow-hidden'>
          <img className='hover:scale-110 transition ease-in-out' src={image} alt={name} />
        </div>
        <p className='pt-3 p-3 federo-regular rounded-sm bg-gray-300 pb-1 text-sm'>{name}</p>
        <p className='text-sm p-3 montserrat rounded-sm bg-gray-300   font-medium'>{rate}</p>
        <p className='pt-3 p-3 rounded-sm montserrat  bg-gray-300  pb-1 text-xs'>{description}</p>
      </Link>
  )
}

export default Cheif_data