import React from 'react';
import useMovieById from '../hooks/useMovieById';

// This component only fetches the trailer - renders nothing visible itself
const VideoBackground = ({ movieId }) => {
  useMovieById(movieId);
  return null;
};

export default VideoBackground;
