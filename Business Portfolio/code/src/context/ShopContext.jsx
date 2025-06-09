import { createContext } from "react";
import React  from "react";
import { features, teamMembers, course, testimonials, process, faqs, services, advantages, reviews } from "../assets/assets";

 
export  const ShopContext = createContext();


const ShopContextProvider = (props) => {



    const value={
        teamMembers, features, testimonials,  course, process, faqs, services, advantages, reviews

    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
 
export  default ShopContextProvider;

