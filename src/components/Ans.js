import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

const Ans = (props) => {
  let question = props.question;
  let desc = props.desc;
  let id = props.id;

  const [isplus, setIsPlus] = useState(true);
  const [bgcolor, setBgColor] = useState('');

  function clickHandler() {
    setIsPlus(!isplus);
  }
  return (
    <div className='w-full mr-10 bg-green-100 rounded-lg p-4  hover:cursor-pointer'>
      <div className='flex justify-between items-center' onClick={clickHandler}>
        <h1 className='text-2xl font-bold'>{id}.{question} </h1>
        <div>
          {
            isplus ? (<FaPlus />) : (<FaMinus />)
          }
        </div>
      </div>

      <div className=''>
        {
          !isplus &&
          (<div className='bg-white text-black p-4 rounded-md'>
            <p className='text-xl font-normal '>{desc}</p>
          </div>)
        }
      </div>


    </div>
  )
}

export default Ans