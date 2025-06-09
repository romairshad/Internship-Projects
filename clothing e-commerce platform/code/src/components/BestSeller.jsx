import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from  '../context/ShopContext'
import Product_Item from './Product_Item';
import Title from './Title';


const BestSeller = () => {
    const{products} =useContext(ShopContext);
    const [bestSeller,setBest_seller] = useState([]);

    useEffect(()=>{
        const bestProduct=products.filter((item)=>(item.bestseller));
        setBest_seller(bestProduct.slice(0,5))
    },[])
  return (
    <div className='my-10 bg-'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Our best sellers are the most popular products among our customers. They are the top-rated products that
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            bestSeller.map((item,index)=>(
                <Product_Item key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
            ))
        }
      </div>
      <div>
        <button>See More</button>
      </div>
    </div>
  )
}

export default BestSeller
