import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';

export default function MovieDialog() {
  const { id } = useSelector(store => store.movie);
  return (
    <div className="relative w-full h-screen">
      <VideoBackground movieId={id} />
    </div>
  );
}