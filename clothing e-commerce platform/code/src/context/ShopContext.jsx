import { createContext, useEffect } from "react";
import { products } from "../assets/frontend_assets/assets";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "RS. ";
  const delivery_fee = 50;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems,setCartitems] = useState({});
  const navigate = useNavigate();
  const addToCart = async (itemId,size) =>{
    if(!size){
      toast.error('Select Product Size');
      return ;
    }
    let cartData = structuredClone(cartItems);
    if(cartData[itemId]){
      if(cartData[itemId][size])
      {
        cartData[itemId][size] += 1;
      }
      else{
        cartData[itemId][size] = 1;
      }

    }
    else{
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartitems(cartData);
  }

const  getCartCount = () => {
  let totalCount = 0;
  for(const items in cartItems){
    for(const item in cartItems[items]){
      try{
        if(cartItems[items][item]>0){
          totalCount += cartItems[items][item];

        }
      } catch(error){

      }
    }
  }
  return totalCount;
}

const updateQuantity = async (itemId, size, quantity) =>{

  let cartData = structuredClone(cartItems);
  cartData[itemId][size] = quantity;
  setCartitems(cartData);
}

const getCartAmount = () =>{
  let totalAmount = 0;
  for(const items in cartItems){
    let itemInfo = products.find((product)=> product._id===items);
    for(const item in cartItems[items]){
      try{
        if(cartItems[items][item] > 0){
          totalAmount += itemInfo.price* cartItems[items][item];
        }
      }catch (error){

      }
    }
  }
  return totalAmount;
}


  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    setShowSearch,
    showSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,

  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
