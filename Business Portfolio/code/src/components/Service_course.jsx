import React from 'react'
import { Link } from 'react-router-dom'
const Service_course = ({id,title, image}) => (  
    <Link to={`/Web_dev/${id}`} className='rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105'>
        <img src={image} alt={title} className='w-full'/>
    </Link>

    )



export default Service_course
