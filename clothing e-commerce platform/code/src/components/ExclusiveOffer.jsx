import React, {useState, useEffect} from "react";
import { assets } from "../assets/frontend_assets/assets";
const ExclusiveOffer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 5, hours: 17, minutes: 20 });

    useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1 };
        } else if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59 };
        } else if (prevTime.days > 0) {
          return { days: prevTime.days - 1, hours: 23, minutes: 59 };
        } else {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0 };
        }
      });
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-[#EFE8C2] text-[#6E6A42] relative">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img
          src={assets.b_1}
          alt="Woman in red dress and black hat"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-4xl font-bold mb-4">Exclusive Offer</h2>
        <p className="text-sm mb-6">
          Unlock the unlimited style upgrade with our exclusive offer. Enjoy savings of up to 40% off on your latest New Arrivals
        </p>
        <div className="flex justify-between mb-6">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center bg-white rounded-lg p-3 shadow">
              <div className="text-3xl font-bold">{value.toString().padStart(2, '0')}</div>
              <div className="text-sm capitalize">{unit}</div>
            </div>
          ))}
        </div>
        <button className="w-auto bg-[#6E6A42] hover:bg-[#4a4a35] text-white py-2 px-4 rounded">
          SHOP NOW
        </button>
      </div>
      <div className="absolute bottom-4 left-4 grid grid-cols-4 gap-2">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-[#6E6A42] rounded-full" />
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffer;