import React from 'react';
import Card from './Card';

const Home = () => {
  return (
    <div className="p-4">
      <div className="bg-gradient-to-r from-yellow-300 to-amber-200 rounded-xl p-4 text-zinc-950">
        <h1 className="text-2xl font-bold">Streaming Schedule</h1>
        <p className="mt-2">This is the home page contentttt.</p>
        <div className="grid grid-cols-4 grid-rows-2 gap-4 min-h-screen p-4">
          <Card day="monday" time="9 PM" />
          <Card day="tuesday" time="9 PM" />
          <Card day="wednesday" time="9 PM" />
          <Card day="sunday" time="9 PM" sunday={true} />
          <Card day="thursday" time="9 PM" />
          <Card day="friday" time="9 PM" />
          <Card day="saturday" time="9 PM" />
        </div>


      </div>
    </div>
  );
};

export default Home;
