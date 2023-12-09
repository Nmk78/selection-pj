import React from 'react'

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div className='w-full h-40 bg-black text-white flex flex-col'>
        <div className="name"></div>
        <div className="name"></div>
        <div className="text-sm font-thin text-center">{year}<a href="/" target="_blank" className='text-blue-500'>Nay Myo Khant.</a>
All rights reserved</div>
    </div>
  )
}

export default Footer