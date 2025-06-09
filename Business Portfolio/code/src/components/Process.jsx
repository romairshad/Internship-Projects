import React from 'react'

const Process = ({title, description}) => (

    <div className='bg-white p-6 text-center shadow-md'>
        <h3 className='text-xl text-black font-semibold mb-2'>{title}</h3>
        <p className='text-gray-600'>{description}</p>
    </div>
  )


export default Process
