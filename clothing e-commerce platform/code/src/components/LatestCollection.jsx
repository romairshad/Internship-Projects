import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import Product_Item from './Product_Item'

const LatestCollection = () => {
    const {products} = useContext(ShopContext)
    const  [latestProducts,  setLatestProducts] = useState([]);
    useEffect (() => {
        setLatestProducts(products.slice(0,10));
    },[])

  return (
    <div className=' w-full my-10 bg-white p-4'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTION'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Discover our new  collection of stylish and comfortable clothing for men and women.</p>

        </div>
        <div className='grid grid-cols-2 sm:gird-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6'>
            {latestProducts.map((item, index) => (
                <Product_Item key={index}id={item._id}  image={item.image} name={item.name} price={item.price} />

            ))
            }

        </div>

      
    </div>
  )
}

export default LatestCollection
