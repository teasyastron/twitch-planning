import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";


const Card = ({ sunday, day, time }) => {
  return (
    <div className={`relative rounded-xl overflow-hidden ${sunday ? 'row-span-2' : ''}`}>
      <div className="absolute inset-0">
        <img
          src="https://cdn2.unrealengine.com/c5s3-download-keyart-1920x1080-f10cd00cc9ad.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative bg-gradient-to-b from-zinc-900 to-transparent p-4 text-yellow-300 h-full">
        <h1 className="text-4xl font-bold flex items-baseline gap-2">
          <span className="text-xl"><FaCalendarAlt /></span>
          {day}
        </h1>
        <p className="text-lg flex items-baseline gap-2">
          <span className="text-sm bottom-1"><FaClock /></span>
          {time}
        </p>
        <div className='h-1/2 flex flex-col justify-center items-center'>
          <img 
            src="https://www.edigitalagency.com.au/wp-content/uploads/fortnite-logo-white-png.png"
            className="w-5/6"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
