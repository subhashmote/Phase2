

import React from 'react';

const Card = (props) => {
  let title = props.title;
  let desc = props.desc;
  let id=props.id;

  return (
    <div className='relative h-[300px] w-[500px] bg-slate-50 p-4 rounded-md hover:bg-slate-900 hover:text-white hover:text-opacity-100 '>
      <div className='absolute top-[-35px] right-0 left-8  h-[60px] w-[60px] rounded-lg bg-slate-400 flex justify-center items-center font-bold text-2xl'>{id}</div>
      <h1 className='font-bold text-3xl mb-20 mt-6'>{title}</h1>
      <p className='text-2xl text-slate-600'>
        {desc}
      </p>
    </div>
  );
}

export default Card;
