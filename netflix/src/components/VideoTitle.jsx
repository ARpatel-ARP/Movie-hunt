import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='text-white px-4 sm:px-6 md:px-10'>
      <h1 className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl drop-shadow-lg'>{title}</h1>
      <p className='w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mt-2 text-xs sm:text-sm md:text-base text-gray-200 line-clamp-3 sm:line-clamp-none drop-shadow'>{overview}</p>
      <div className='flex gap-x-2 mt-3 sm:mt-4'>
        <button className='bg-white hover:bg-gray-300 cursor-pointer text-black px-4 sm:px-6 py-1.5 sm:py-2 rounded font-bold text-sm sm:text-base transition duration-300'>
          ▶ Play
        </button>
        <button className='bg-gray-500/80 hover:bg-gray-700 cursor-pointer text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded font-bold text-sm sm:text-base transition duration-300'>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
