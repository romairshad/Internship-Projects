import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import Item from "./Item.jsx";

const Menu_slider = () => {
    const {menu}  = useContext (ShopContext);
    const [menu_item, setMenu_Item] =useState([]);
    useEffect(()=>{
         setMenu_Item(menu.slice());
    },[])
  return (

    <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        { menu_item && menu_item.map((item, index) => (
            <Item key={index} id={item._id} image={item.image} name={item.name} price={item.price} category={item.category} />
        ))
    }
    </div>
  )
}

export default Menu_slider
