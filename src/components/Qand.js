import React from 'react'
import Ans from './Ans'

const Qand = (props) => {
    let ProjectData = props.ProjectData;
  return (
    <div className='flex mt-10 p-6 justify-between' id='qanda'> 
        <div className='p-4 flex flex-col justify-center items-start'>
            <h1 className='text-4xl font-bold'>Discover Frequently Asked Questions?</h1>
            <button className='bg-black text-white px-6 py-4 border-none rounded-md font-bold mt-6'>WORK TOGETHER</button>
        </div>

        <div>
        {ProjectData.map((project) => (
          <div key={project.id} className='p-4'>
            <Ans  question={project.question} desc={project.desc} id={project.id}/>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Qand