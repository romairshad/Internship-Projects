import React from 'react'
import { Link,  } from 'react-router-dom'



const Item = ({ id, name, image, price, description, category, bestsseller }) => {
  

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/productdetail/${id}`}>
      <div className='overflow-hidden'>
        <img className='hover:scale-110  w-100 aspect-square transition ease-in-out' src={image} alt={name} />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>${price}</p>
      <p className='pt-3 pb-1 text-xs'>{category}</p>
      <p className='pt-3 pb-1 text-xs'>{description}</p>
      <p className='pt-3 pb-1 text-xs'>{bestsseller}</p>

        </Link>
  )
}

export default Item