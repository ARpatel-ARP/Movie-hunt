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
    <div className='relative w-full overflow-hidden' style={{ height: 'min(56.25vw, 85vh)' }}>
      {/* Video fills container perfectly */}
      <VideoBackground movieId={id} />

      {/* Dark gradient so text is always readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />

      {/* Title sits at bottom-left, always visible */}
      <div className="absolute bottom-6 sm:bottom-10 md:bottom-14 left-0 z-20 w-full">
        <VideoTitle title={selectedMovie?.title} overview={selectedMovie?.overview} />
      </div>
    </div>
  );
};

export default MainContainer;
