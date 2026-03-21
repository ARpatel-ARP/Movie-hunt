import React from 'react';

const VideoTitle = ({title, overview}) => {
  return (
   <div className='text-white mb-50'>
      <h1 className='font-bold text-4xl'>{title}</h1>
      <p className='w-1/3 mt-2'>{overview}</p> 
      <div className='flex gap-x-2 mt-4'>
        <button className='bg-white hover:bg-gray-300 cursor-pointer text-black px-6 py-2 rounded font-bold transition duration-300'>Play</button>
        <button className='bg-gray-500 hover:bg-gray-700 cursor-pointer text-white px-6 py-2 rounded font-bold transition duration-300'>Watch More</button>
      </div>
    </div>
  )
}

export default VideoTitle;
