import React from 'react';
import useMovieById from '../hooks/useMovieById';

const VideoBackground = ({ movieId }) => {
  useMovieById(movieId);
  return null;
};

export default VideoBackground;