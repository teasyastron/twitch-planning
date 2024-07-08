import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-950 text-white">
      <div className="text-center">
        <div className="loader border-t-4 border-b-4 border-purple-500 w-12 h-12 mb-4"></div>
        <h2 className="text-xl font-semibold">Loading...</h2>
      </div>
    </div>
  );
};

export default Loading;
