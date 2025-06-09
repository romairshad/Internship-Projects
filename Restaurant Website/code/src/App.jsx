import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import  About from "./components/About";
import NavBar from  "./components/NavBar";
import Footer  from "./components/Footer";
import Franchising from "./pages/Franchising";
import Restaurant_Menu from "./pages/Restaurant_Menu";
import CartItem from './pages/CartItem'
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/CheckOut";


function App() {

  return (
    
    <div>

      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/franchising" element={<Franchising/>} />
        <Route path="/menu" element={<Restaurant_Menu/>}/>
        <Route path="/restaurant_menu" element={<Restaurant_Menu/>} />
        <Route path='/productdetail/:id' element={<ProductDetail/>} />
        <Route path="/cartItem" element={<CartItem/>} />
        <Route path="/checkout" element={<Checkout/>} />
        
        <Route path="/" element={<About/>}/>
      </Routes>
      <Footer/>
    </div>

  )
}

export default App
