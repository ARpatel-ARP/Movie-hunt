import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';

export default function MovieDialog() {
  const { id } = useSelector(store => store.movie);
  useMovieById(id); // just fetch trailer when id changes
  return null;
}