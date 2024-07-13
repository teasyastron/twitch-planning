import React, { useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import Card from './Card';
import { TbScreenshot } from "react-icons/tb";
import { BsArrowReturnRight } from "react-icons/bs";
import { FaInstagram, FaTwitch } from "react-icons/fa";

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
  const [header, setHeader] = useState("__/__");
  const [paragraph, setParagraph] = useState("__/__");


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
    <div>
      <button onClick={handleExportAsPng} className="p-2 bg-purple-600 text-white rounded-tr-xl rounded-bl-xl absolute right-4 gap-2 items-center justify-center font-semibold flex text-xs uppercase opacity-75 hover:opacity-100 transition duration-250">
        <TbScreenshot />
        Export your schedule!
      </button>
      <div ref={divRef} className="bg-gradient-to-r from-pink-300 to-rose-200 rounded-xl p-4 text-zinc-950">

        <div className='flex ml-4 mt-4 gap-2 items-center'>

          <div className='bg-[#FCF8A7] w-fit rounded-xl text-4xl uppercase pb-6 border border-zinc-950'>
            <div className='bg-pink-200 h-6 w-full rounded-t-xl flex items-center gap-1 mb-5 px-2 border-b border-zinc-950'>
              <span className='w-3 h-3 rounded-full border border-zinc-950 bg-white'></span>
              <span className='w-3 h-3 rounded-full border border-zinc-950 bg-white'></span>
              <span className='w-3 h-3 rounded-full border border-zinc-950 bg-white'></span>
              <span className='ml-auto text-sm text-zinc-950 font-semibold'>+</span>
            </div>

            <div className='flex flex-col justify-center items-center'>
              <span className='px-16 piepie text-cyan-300 weirdborder tracking-wider'>KaterTotTV</span>
              <span className='uppercase text-sm text-zinc-950 tracking-widest font-semibold marsden '>Stream Schedule</span>
            </div>
          </div>

          <div className='-ml-6 mt-6 marsden'>
            <div className='bg-cyan-300 border border-zinc-950 rounded-xl w-fit h-fit uppercase text-sm'>
              <h1 
                className="font-bold px-3 py-2 rounded-xl text-center" 
                contentEditable
                suppressContentEditableWarning={true}
                onBlur={handleHeaderChange}
              >
                {header}
              </h1>
            </div>

            <div className='flex items-center -mt-1 gap-2'>
              <span className='text-xl text-black ml-6'><BsArrowReturnRight /></span>

              <div className='bg-rose-300 border border-zinc-950 rounded-xl w-fit h-fit uppercase text-sm mt-1'>
                <p 
                  className="font-bold px-3 py-2 rounded-xl text-center" 
                  contentEditable
                  suppressContentEditableWarning={true}
                  onBlur={handleParagraphChange}
                >
                  {paragraph}
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-2 px-4 items-end ml-auto'>
            <div className='flex gap-2 justify-center items-center text-sm px-4 py-2 rounded-xl bg-white text-zinc-950 border border-zinc-950 w-fit'>
              <FaTwitch />
              <span className='font-semibold'>/KaterTotTV</span>
            </div>
            <div className='flex gap-2 justify-center items-center text-sm px-4 py-2 rounded-xl bg-white text-zinc-950 border border-zinc-950 w-fit'>
              <FaInstagram />
              <span className='font-semibold'>/KaterTotTV</span>
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
