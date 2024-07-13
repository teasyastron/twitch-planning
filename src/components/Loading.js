import React from 'react';
import Logo from '../twitch_dev2.svg'; // Ensure you have an SVG file for the Twitch logo
import { FaTwitch } from 'react-icons/fa6';

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-950 text-white select-none">
      <div className="flex flex-col gap-2 justify-center items-center">
        <FaTwitch className="w-20 h-20 animate-pulse text-white fill-current"/>
        <h2 className="text-xl font-semibold">Loading...</h2>
      </div>
    </div>
  );
};

export default Loading;
