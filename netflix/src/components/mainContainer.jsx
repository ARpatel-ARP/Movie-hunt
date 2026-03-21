import React, { useEffect } from 'react';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedMovie } from '../redux/MovieSlice';

const MainContainer = () => {
  const dispatch = useDispatch();
  const movie = useSelector(store => store.movie?.nowPlayingMovies);
  const selectedMovie = useSelector(store => store.movie?.selectedMovie);

  // ✅ useEffect MUST be before any early return
  useEffect(() => {
    if (movie) {
      dispatch(setSelectedMovie(movie[0]));
    }
  }, [movie]);

  // ✅ early return AFTER all hooks
  if (!movie) return null;

  const { id } = movie[0];

  return (
    <div className='relative h-[20vh]'>
      <div className="absolute bottom-20 left-10 z-20">
        <VideoTitle
          title={selectedMovie?.title}
          overview={selectedMovie?.overview}
        />
      </div>
    </div>
  );
};

export default MainContainer;