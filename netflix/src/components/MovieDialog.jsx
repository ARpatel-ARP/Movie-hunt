import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';

export default function MovieDialog() {
  const { id } = useSelector(store => store.movie);
  // This component just loads the trailer in the background - no height, no layout impact
  return <VideoBackground movieId={id} />;
}
