import React from 'react'
import Img from '../assets/service-3.png'
import Imgg from '../assets/service-4.png'
import { BiRightArrowAlt } from "react-icons/bi";

const Services = () => {
    return (
        <div className='flex flex-col mb-10' id='internship'>
            <div className='flex flex-col items-center'>
                <div className='flex items-center gap-x-2'>
                    <div className='h-[2px] bg-black w-[20px]'></div>
                    <h3 className='text-xl font-serif'>Join our team</h3>
                    <div className='h-[2px] bg-black w-[20px]'></div>
                </div>


                <h1 className='font-bold text-black text-4xl mt-4'>Career</h1>

                <p className='text-xl font-md opacity-70 mt-4'>Embark on a journey of mutual growth with Nexus, where our success intertwines with yours.</p>

            </div>

            <div className='flex justify-center gap-x-6 mt-10'>
                <div className='flex bg-slate-200 p-4 ml-6 rounded-lg hover:cursor-pointer h-[300px]'>
                    <img src={Img}></img>
                    <div className='flex flex-col justify-center'>
                        <h1 className='font-bold text-3xl '>Internship</h1>
                        <p className='text-xl opacity-70 mt-3'>Internship for freshers and students for career development (1 Month).</p>
                        <button className='bg-transparent text-xl hover:cursor-pointer w-[50px] mx-left mt-4 font-bold opacity-70'>Apply</button>
                    </div>
                </div>

                <div className='flex bg-slate-200 p-4 rounded-lg hover:cursor-pointer h-[300px]'>
                    <img src={Imgg}></img>
                    <div className='flex flex-col justify-center'>
                        <h1 className='font-bold text-3xl '>Internship for beginners</h1>
                        <p className='text-xl opacity-70 mt-3'>College students and beginners can apply for this internship (3 Months).</p>
                        <div className='flex items-center'>
                            <button className='bg-transparent text-xl hover:cursor-pointer w-[50px] mx-left mt-4 font-bold opacity-70'>Apply </button>
                            {/* <BiRightArrowAlt fontSize={30} className='items-center'/> */}
                        </div>


                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Services