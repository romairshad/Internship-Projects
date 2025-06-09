import { createContext } from 'react'
import React, {useState} from 'react'
import { cheif, menu } from '../assets/img/assets'
export const ShopContext = createContext ();
const ShopContextProvider = (props) => {
  




  const value = {
    cheif , menu
  }
  return (
   <ShopContext.Provider value ={value}>

    {
      props.children
    }
   </ShopContext.Provider>
  )
}

export default ShopContextProvider;
