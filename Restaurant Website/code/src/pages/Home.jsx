import React from "react";
import About from "../components/About";
import Our_Restuarant from "../components/Our_Restuarant";
import Services from "../components/Services";
import Cheif from "../components/Cheif";
import Book_Now from "../components/Book_Now";
import Homepage from "../components/Homepage.jsx";
import Side_NavBar from "../components/Side_NavBar.jsx";
const Home = () => {
  return (
    <div className="container">
      <Homepage />
      <About />
      <Book_Now />
      <Cheif />
      <Our_Restuarant />
      <Services />
      <Side_NavBar/>
    </div>
  );
};

export default Home;
