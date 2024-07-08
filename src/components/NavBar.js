// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

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
              <a href="https://github.com" className="text-white hover:text-gray-300">Github</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <img
            src="http://astron.rf.gd/uploads/1720464311_f7fc66781743adde.png" // Replace with actual avatar URL
            alt="User Avatar"
            className="h-8 w-8 rounded-full mr-3"
          />
          <span className="text-white text-lg">astron</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
