import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaVideoSlash } from "react-icons/fa";
import offline from "../img/games/offline.jfif"


const Card = ({ sunday, day, time, game, stream}) => {
  const bg = require(`../img/games/${game}/bg.png`);
  const logo = require(`../img/games/${game}/logo.png`);

  return (
    <div className={`relative rounded-xl overflow-hidden ${sunday ? 'row-span-2' : ''}`}>
      <div className="absolute inset-0">
        <img
          src={stream ? bg : offline}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative bg-gradient-to-b from-zinc-900 to-transparent p-4 text-yellow-300 h-full">
        <h1 className="text-4xl font-bold flex items-baseline gap-2">
          <span className="text-xl"><FaCalendarAlt /></span>
          {day}
        </h1>
        {stream ? 
                <p className="text-lg flex items-baseline gap-2">
                <span className="text-sm bottom-1"><FaClock /></span>
                {time}
              </p>
              : ''}

        <div className='h-1/2 flex flex-col justify-center items-center'>
        {stream ? 
          <img 
            src={logo}
            className="w-5/6"
          />
        : <span className='text-5xl mt-16'><FaVideoSlash /></span>
        }

        </div>
      </div>
    </div>
  );
};

export default Card;
