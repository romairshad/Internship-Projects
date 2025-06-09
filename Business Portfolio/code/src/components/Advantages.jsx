import React,{useContext, useState, useEffect} from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
const Advantages = () => {
    const { advantages } = useContext(ShopContext);
    const  [advantagesList, setAdvantagesList] = useState([]);
    useEffect(() => {
        setAdvantagesList(advantages);
    },[]);

  

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <div className="max-w-3xl text-left  mx-auto">
        <Title text1={'Advantages'}/>
        
        <ul className="mt-12 space-y-4">
          {advantagesList.map((advantages, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 mt-1 text-indigo-600">•</span>
              <span>{advantages}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Advantages;