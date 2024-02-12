

import React, { useState } from 'react';

const Form = ({ onClose }) => {
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();


    // Add your form submission logic here
    // You may want to close the form after submission
    setShowForm(false);
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 ${showForm ? 'block' : 'hidden'}`}>
      <div className='fixed top-0 left-0 w-full h-full bg-black opacity-50' onClick={() => setShowForm(false)}></div>
      <div className='bg-white p-8 rounded-md z-50'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit} method='post' action='/submit-feedback'>
          <label className='flex flex-col'>
            <span className='text-black'>Name:</span>
            <input type='text' placeholder='Enter Your Name' className='border p-2' />
          </label>
          <label className='flex flex-col'>
            <span className='text-black'>Email:</span>
            <input type='email' placeholder='Enter Your Email' className='border p-2' />
          </label>
          <label className='flex flex-col'>
            <span className='text-black'>Message:</span>
            <textarea placeholder='Enter Your Feedback...' className='border p-2'></textarea>
          </label>
          <button type='submit' className='bg-blue-500 text-white p-4 rounded-md font-bold'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
