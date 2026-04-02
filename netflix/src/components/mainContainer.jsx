import React, { useEffect } from 'react';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedMovie } from '../redux/MovieSlice';

const MainContainer = () => {
  const dispatch = useDispatch();
  const movie = useSelector(store => store.movie?.nowPlayingMovies);
  const selectedMovie = useSelector(store => store.movie?.selectedMovie);

  useEffect(() => {
    if (movie) dispatch(setSelectedMovie(movie[0]));
  }, [movie]);

  if (!movie) return null;

  const { id } = movie[0];

  return (
    <div className='relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[80vh] overflow-hidden'>
      <VideoBackground movieId={id} />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
      {/* Title positioned over video */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-0 z-20 w-full">
        <VideoTitle title={selectedMovie?.title} overview={selectedMovie?.overview} />
      </div>
    </div>
  );
};

export default MainContainer;
