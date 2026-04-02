import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='text-white px-4 sm:px-8 md:px-12' style={{ maxWidth: '600px' }}>
      <h1 className='font-bold leading-tight drop-shadow-lg'
        style={{ fontSize: 'clamp(16px, 4vw, 36px)' }}>
        {title}
      </h1>
      <p className='mt-1 text-gray-200 drop-shadow hidden sm:block'
        style={{ fontSize: 'clamp(12px, 1.5vw, 16px)', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
        {overview}
      </p>
      <div className='flex gap-x-2 mt-2 sm:mt-4'>
        <button className='bg-white hover:bg-gray-300 active:bg-gray-400 text-black font-bold rounded transition duration-200'
          style={{ fontSize: 'clamp(12px, 3vw, 16px)', padding: 'clamp(6px, 1.5vw, 10px) clamp(12px, 3vw, 24px)' }}>
          ▶ Play
        </button>
        <button className='bg-gray-500/80 hover:bg-gray-700 active:bg-gray-800 text-white font-bold rounded transition duration-200'
          style={{ fontSize: 'clamp(12px, 3vw, 16px)', padding: 'clamp(6px, 1.5vw, 10px) clamp(12px, 3vw, 24px)' }}>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
