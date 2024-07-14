// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import Astron from '../img/avatar.png'
import { FaHeart } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className="bg-[#9146ff] px-8 py-2 sticky top-0 z-10">
      <div className="max-w-full mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <span className='text-white w-20'>
            <Logo />
          </span>
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/themes" className="text-white hover:text-gray-300">Other Themes</Link>
            </li>
            <li>
              <a href="https://github.com/teasyastron/twitch-planning" className="text-white hover:text-gray-300">Github</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-1 bg-white bg-opacity-20 border border-white border-opacity-30 px-4 py-1 text-sm rounded-xl">
          Made with <FaHeart /> by
          <img
            src={Astron}
            className="h-6 w-6 rounded-full"
          />
          <span className="text-white">astron</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
