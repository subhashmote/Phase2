

import React from 'react';
import heroImage from '../assets/HD-Wallpaper.jpg'; // Update the path to your actual image file
import { FaPlay } from "react-icons/fa6";
import { CiPlay1 } from "react-icons/ci";

const Hero = () => {
  return (
    <div className='flex justify-between items-center h-screen w-full mx-auto px-10 bg-green-50' id='home'>
      <div className='px-4'>
        <p className='text-blue text-xl'>Welcome to</p>
        <h1 className='text-8xl font-bold '>Nexus Info</h1>
        
        {/* Apply a specific class or inline styles to decrease the width of the paragraph */}
        <p className='text-xl mt-4 text-slate-900' style={{ maxWidth: '800px' }}>
          Transform your business digitally with our cutting-edge solutions, tailored to boost your online presence and drive unparalleled success. Step into a world where technology meets progress, and let Nexus Info be your partner in achieving new heights of digital growth.
        </p>
        
        <div className='mt-4 flex'>
          <button className='bg-black text-white px-4 py-4 border-none rounded-md font-bold'>DISCOVER MORE</button>
          <div className='ml-4 h-[70px] w-[70px] bg-black rounded-full flex justify-center items-center hover:cursor-pointer'>
          <CiPlay1 className='text-white text-2xl font-bold' />
          </div>
        </div>
      </div>

      <div className='mr-4'>
        {/* Use the imported image in the img tag */}
        <img src={heroImage}  alt='Hero Image' className='rounded-full border' />
      </div>
    </div>
  );
}

export default Hero;
