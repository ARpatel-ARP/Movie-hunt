import React from 'react';
import useMovieById from '../hooks/useMovieById';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector(store => store.movie.trailer);
  useMovieById(movieId);

  if (!trailer) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 scale-140 pointer-events-none">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&loop=1&playlist=${trailer.key}&controls=0`}
        allow="autoplay; encrypted-media"
      ></iframe>
    </div>
  );
};
export default VideoBackground;
