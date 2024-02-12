import React from 'react'
import aboutImg from '../assets/Bg-2.png'
import { FaMedal } from "react-icons/fa6";

const About = () => {
    return (
        <div className='flex justify-center items-center m-2' id='about'>
            <div>
                <img src={aboutImg}></img>
            </div>

            <div>
                <h1 className='font-bold text-5xl text-black' style={{ maxWidth: '750px' }}>We design success for your future.</h1>
                <h3 className='text-blue text-2xl mt-2' style={{ maxWidth: '750px' }}>Welcome to Nexus, where standards and quality converge to redefine excellence in the digital realm.</h3>
                <ul className='text-black opacity-90 text-xl mt-4'>
                    <li>Setting standards and quality in web products</li>
                    <li>Elevating brands and fostering growth</li>
                    <li>providing a dynamic and personalized educational experience</li>
                </ul>
                <div className='flex mt-6 gap-x-6  items-center'>
                    <button className='bg-black px-6 py-4 border-none rounded-md text-white font-bold'>
                        CONTACT
                    </button>
                    <FaMedal className='font-bold' fontSize={35} />
                    <button className='text-black text-2xl font-bold'>
                        Grow With Us
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About