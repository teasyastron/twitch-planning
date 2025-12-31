import React from 'react';
import games from "../../Games";
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaVideoSlash } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";
import { FaPaintRoller } from "react-icons/fa";
import { MdShortText } from "react-icons/md";


import offline from "../../../img/games/offline.jfif"

const Card = ({ cardInfo, isHovered, handleMouseEnter, handleMouseLeave, handleChange }) => {
  const bg = require(`../../../img/games/${cardInfo.game}/bg.png`);
  const logo = require(`../../../img/games/${cardInfo.game}/logo.png`);

  return (
    <div 
      className={`relative ${cardInfo.day === 'sunday' ? 'row-span-2' : ''}`}
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <div className='relative rounded-xl overflow-hidden h-full shadow-[4px_4px_0px_0px_#FFFFFF]'>
        <div className="absolute inset-0">
          <img
            src={cardInfo.stream ? bg : offline}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative bg-gradient-to-b from-zinc-900 to-transparent p-4 text-rose-300 h-full">
          <h1 className="text-4xl font-bold flex items-baseline gap-2">
            <span className="text-xl"><FaCalendarAlt /></span>
            {cardInfo.day}
          </h1>
          {cardInfo.stream ? 
                  <p className="text-lg flex items-baseline gap-2 font-semibold">
                  <span className="text-sm bottom-1"><FaClock /></span>
                  {cardInfo.time}
                </p>
                : ''}

          <div className='h-1/2 mt-2 flex flex-col justify-center items-center'>
          {cardInfo.stream ? 
            <img 
              src={logo}
              className="w-4/6"
            />
          : <span className='text-5xl mt-16'><FaVideoSlash /></span>
          }
          {cardInfo.more ? 
          <span className={`text-white bottom-2 absolute p-2 bg-${cardInfo.bgmore}-600 border-${cardInfo.bgmore}-500 rounded-md text-xs uppercase font-semibold flex justify-center items-center gap-2 border-2`}>          
            {cardInfo.textmore}
          </span>
          :
          ''
          }
          
          </div>
        </div>
      </div>
      
      {isHovered && (
        <div className="absolute top-0 left-0 p-4 bg-zinc-950 rounded-xl shadow-lg text-gray-300 h-full w-full">
          <form>
            <div className='flex gap-2 mb-4 hidden'>
              <label className='flex gap-1 items-center uppercase font-semibold'><FaCalendarAlt /> Day</label>
              <select 
                name="day" 
                value={cardInfo.day} 
                onChange={handleChange}
                className="rounded-md bg-zinc-900 outline-4 outline-purple-600 focus:outline-4 focus:outline-purple-600 active:outline-4 active:outline-purple-600 focus-visible:outline-4 focus-visible:outline-purple-600 p-2"
              >
                <option value="lundi">lundi</option>
                <option value="mardi">Tuesday</option>
                <option value="mercredi">Wednesday</option>
                <option value="jeudi">Thursday</option>
                <option value="vendredi">Friday</option>
                <option value="samedi">Saturday</option>
                <option value="dimanche">Sunday</option>
              </select>
            </div>
            <div className='flex gap-2 mb-4'>
              <label className='flex gap-1 items-center uppercase font-semibold'><FaClock />Time</label>
              <input 
                type="text" 
                name="time" 
                value={cardInfo.time} 
                onChange={handleChange}
                className="rounded-md bg-zinc-900 outline-4 outline-purple-600 focus:outline-4 focus:outline-purple-600 active:outline-4 active:outline-purple-600 focus-visible:outline-4 focus-visible:outline-purple-600 p-2"
              />
            </div>
            <div className='flex gap-2 mb-4'>
              <label className='flex gap-1 items-center uppercase font-semibold'><IoGameController />Game</label>
              <select 
                name="game" 
                value={cardInfo.game} 
                onChange={handleChange}
                className="rounded-md bg-zinc-900 outline-4 outline-purple-600 focus:outline-4 focus:outline-purple-600 active:outline-4 active:outline-purple-600 focus-visible:outline-4 focus-visible:outline-purple-600 p-2"
              >
                {games.map((game, index) => (
                  <option key={index} value={game.value}>{game.label}</option>
                ))}
              </select>
            </div>
            <div className='flex gap-4'>
              <div className='flex gap-2 mb-4'>
                <label className='flex gap-1 items-center uppercase font-semibold'><FaVideo />Stream</label>
                <input 
                  type="checkbox" 
                  name="stream" 
                  checked={cardInfo.stream} 
                  onChange={(e) => handleChange({ target: { name: 'stream', value: e.target.checked }})}
                />
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Card;
