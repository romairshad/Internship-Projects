import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import Cheif_data from "./Cheif_data.jsx";
const Cheif = () => {
  const { cheif } = useContext(ShopContext);
  const [cheif_data, setCheif_data] = useState([]);
  useEffect(() => {
    setCheif_data(cheif.slice(0, 4));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 px-10">
        {cheif_data &&
          cheif_data.map((item, index) => (
            <Cheif_data 
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              rate={item.rating}
              description={item.description}
            />
          ))}
      </div >
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white">

      <button className="bg-[#00BCA8]  size-max p-2 text-white rounded-md hover:bg-[#00bca9b3] active:bg-[#2effea]">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Cheif;
