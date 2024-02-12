// import React from 'react'

// const Navbar = () => {
//     return (
//         <div className='flex justify-between mt-3 h-[60px]'>
//             <div className='ml-4'>
//                 <h1 className='text-4xl font-bold hover:cursor-pointer'>NEXUS</h1>
//             </div>

//             <div className=''>
//                 <ul className='flex gap-6 text-xl font-md'>
//                     <li>
//                     <a href='#'>HOME</a>
//                     </li>
//                     <li>
//                     <a href='#'>ABOUT</a>
//                     </li>
//                     <li>
//                     <a href='#'>INTERNSHIP</a>
//                     </li>
//                     <li>
//                     <a href='#'>SERVICE</a>
//                     </li>
//                     <li>
//                     <a href='#'>Q & A</a>
//                     </li>
//                     <li>
//                     <a href='#'>CONTACT US</a>
//                     </li>
//                 </ul>
//             </div>

//             <div>
//                 <button className='border border-black px-4 py-3 mr-4 font-bold bg-transparent hover:bg-black hover:text-white '> 
//                     CONTACT
//                 </button>
//             </div>

//         </div>
//     )
// }

// export default Navbar



import React from 'react';

const Navbar = () => {
  return (
    <div className='flex justify-between mt-3 h-[60px]'>
      <div className='ml-4'>
        <a href='https://subhashmote.github.io/NexusProjectThree'><h1 className='text-4xl font-bold hover:cursor-pointer'>NEXUS</h1></a>
      </div>

      <div>
        <ul className='flex gap-6 text-xl font-md'>
          <li>
            <a href='#home'>HOME</a>
          </li>
          <li>
            <a href='#about'>ABOUT</a>
          </li>
          <li>
            <a href='#internship'>INTERNSHIP</a>
          </li>
          <li>
            <a href='#service'>SERVICE</a>
          </li>
          <li>
            <a href='#qna'>Q & A</a>
          </li>
          <li>
            <a href='#contact'>CONTACT US</a>
          </li>
        </ul>
      </div>

      <div>
        <button className='border border-black px-4 py-3 mr-4 font-bold bg-transparent hover:bg-black hover:text-white'>
          CONTACT
        </button>
      </div>
    </div>
  );
};

export default Navbar;
