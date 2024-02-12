

import React from 'react';
import Card from './Card';
import { Carddata } from '../data';

const Moreabout = () => {
  return (
    <div className='flex flex-col mt-10' id='services'>
      <div className='flex flex-col items-center'>
        <div className='flex items-center gap-x-2'>
          <div className='h-[2px] bg-black w-[20px]'></div>
          <h3 className='text-xl font-serif'>Nexus Product</h3>
          <div className='h-[2px] bg-black w-[20px]'></div>
        </div>

        <h1 className='font-bold text-black text-4xl mt-4'>Services</h1>

        <p className='text-xl font-md opacity-70 mt-4'>Unlock innovation with our cutting-edge software solutions and services tailored to elevate your digital presence.</p>
      </div>

      <div className='flex flex-wrap ml-20 mt-20 gap-4'>
        {/* Map over Carddata and create a Card component for each item */}
        {Carddata.map((dataItem) => (
          <Card key={dataItem.id} title={dataItem.title} desc={dataItem.desc} id={dataItem.id}/>
        ))}
      </div>
    </div>
  );
}

export default Moreabout;
