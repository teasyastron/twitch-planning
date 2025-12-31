import React, { useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import Card from './Card'; // Ensure Card is correctly imported
import { TbScreenshot } from "react-icons/tb";
import { FaTwitch } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";


const Home = () => {
  const initialCardState = {
    day: 'monday',
    time: '9 PM',
    game: 'phasmophobia',
    stream: false,
    more: false,
    bgmore: 'purple',
    textmore: 'What are you doing on stream?',
  };

  const days = ['monday', 'tuesday', 'wednesday', 'sunday', 'thursday', 'friday', 'saturday'];
  const [header, setHeader] = useState("Streaming Schedule __/__/___");
  const [paragraph, setParagraph] = useState("Quick description of the activities this week.");


  const [cards, setCards] = useState(days.map((day) => ({
    info: { ...initialCardState, day },
    isHovered: false
  })));

  const handleMouseEnter = (index) => {
    setCards(prevCards => prevCards.map((card, i) => i === index ? { ...card, isHovered: true } : card));
  };

  const handleMouseLeave = (index) => {
    setCards(prevCards => prevCards.map((card, i) => i === index ? { ...card, isHovered: false } : card));
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    setCards(prevCards => prevCards.map((card, i) => i === index ? { 
      ...card, 
      info: { ...card.info, [name]: value }
    } : card));
  };

  const handleHeaderChange = (e) => {
    setHeader(e.target.innerText);
  };

  const handleParagraphChange = (e) => {
    setParagraph(e.target.innerText);
  };

  const divRef = useRef();

  const handleExportAsPng = () => {
    if (divRef.current === null) {
      return;
    }

    toPng(divRef.current)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'schedule.png';
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
        <div className='flex items-center justify-between'>
          <div>
            <h1 
              className="text-5xl font-bold lowercase hover:bg-white hover:bg-opacity-40 px-4 py-3 rounded-xl transition duration-250" 
              contentEditable
              suppressContentEditableWarning={true}
              onBlur={handleHeaderChange}
            >
              {header}
            </h1>
            <p 
              className="mt-2 hover:bg-white hover:bg-opacity-40 px-4 py-3 rounded-xl transition duration-250" 
              contentEditable
              suppressContentEditableWarning={true}
              onBlur={handleParagraphChange}
            >
              {paragraph}
            </p>
          </div>
          <div className='flex flex-col gap-2 px-4 items-end'>
            <div className='flex gap-2 justify-center items-center text-lg px-4 py-2 rounded-xl bg-zinc-950 text-yellow-300 w-fit'>
              <FaTwitch />
              <span className='font-semibold'>/astronnnnnnnn</span>
            </div>
            <div className='flex gap-2 justify-center items-center text-lg px-4 py-2 rounded-xl bg-zinc-950 text-yellow-300'>
              <FaDiscord />
              <span className='font-semibold'>astronomique</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 grid-rows-2 gap-4 min-h-screen p-4">
            {cards.map((card, index) => (
            <Card
              key={index}
              cardInfo={card.info}
              isHovered={card.isHovered}
              handleMouseEnter={() => handleMouseEnter(index)}
              handleMouseLeave={() => handleMouseLeave(index)}
              handleChange={(e) => handleChange(index, e)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
