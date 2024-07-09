import React, { useRef } from 'react';
import { toPng } from 'html-to-image';
import Card from './Card'; // Ensure Card is correctly imported
import { TbScreenshot } from "react-icons/tb";


const Home = () => {
  const divRef = useRef();

  const handleExportAsPng = () => {
    if (divRef.current === null) {
      return;
    }

    toPng(divRef.current)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'exported-div.png';
        link.click();
      })
      .catch((err) => {
        console.error('Failed to export div as png:', err);
      });
  };

  return (
    <div className="p-4">
      <button onClick={handleExportAsPng} className="p-2 bg-purple-600 text-white rounded-tr-xl rounded-bl-xl absolute right-4 gap-2 items-center justify-center font-semibold flex text-xs uppercase opacity-75 hover:opacity-100 transition duration-250">
        <TbScreenshot />
        Export your schedule!
      </button>
      <div ref={divRef} className="bg-gradient-to-r from-yellow-300 to-amber-200 rounded-xl p-4 text-zinc-950">
        <h1 className="text-2xl font-bold">Streaming Schedule</h1>
        <p className="mt-2">This is the home page content.</p>
        <div className="grid grid-cols-4 grid-rows-2 gap-4 min-h-screen p-4">
          <Card day="monday" time="9 PM" game="phasmophobia" stream={true}/>
          <Card day="tuesday" time="9 PM" game="fortnite" stream={false} />
          <Card day="wednesday" time="9 PM" game="manofmedan" stream={true}/>
          <Card day="sunday" time="9 PM" sunday={true} game="fortnite" stream={true}/>
          <Card day="thursday" time="9 PM" game="fortnite" stream={true}/>
          <Card day="friday" time="9 PM" game="fortnite" stream={true}/>
          <Card day="saturday" time="9 PM" game="fortnite" stream={true}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
