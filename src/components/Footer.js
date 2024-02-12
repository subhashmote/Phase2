import React, { useState } from 'react'
import Form from './Form';

const Footer = () => {

    const [ishow,setIsShow] = useState(false);

    function clickHandler(){
        setIsShow(true);
    }
  return (
    <div className='flex bg-black text-white justify-between ' id='contactus'>
        <div className='px-6'>
            <h1 className='text-4xl font-bold mt-4'>NEXUS</h1>
            <p className='w-[250px] text-xl mt-4'>From code to classroom and media mastery, Nexus empowers excellence across the digital landscape, harmonizing software, learning, and media for a holistic journey into the future.</p>
        </div>


        <div>
            <h1 className='text-4xl font-bold mt-4 mb-4'>Our Services</h1>
            <ul className='text-xl hover:cursor-pointer flex flex-col gap-y-4'>
                <li>Software & Service</li>
                <li>E-Learning</li>
                <li>Media & Branding</li>
                <li>Digital Marketing</li>
                <li>Business Strategies</li>
                <li>Career Growth</li>
            </ul>
        </div>

        <div>
            <h1 className='text-4xl font-bold mt-4 mb-4'>Overview</h1>
            <ul className='text-xl hover:cursor-pointer flex flex-col gap-y-4'>
                <li>About Company</li>
                <li>Internship</li>
                <li>Service</li>
                <li>Q & A</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div>
            <h1 className='text-4xl font-bold mt-4'>Contact us</h1>
            <p className='mt-4 p-4 text-md'>Coimbatore south, Tamilnadu</p>
            <a>contact.nexusinfo@gmail.com</a>
            <br></br>
            <button className='bg-gray-900 px-6 py-4 border mt-4 rounded-lg font-bold text-white hover:bg-transparent' onClick={clickHandler}>FeedBack</button>
            {
                ishow && (<Form/>)
            }
        </div>
       
    </div>
  )
}

export default Footer