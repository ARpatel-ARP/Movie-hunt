import React, { useEffect } from 'react';
import VideoTitle from './VideoTitle';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedMovie } from '../redux/MovieSlice';

const MainContainer = () => {
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movie?.nowPlayingMovies);
  const selectedMovie = useSelector(store => store.movie?.selectedMovie);
  const trailer = useSelector(store => store.movie?.trailer);

  useEffect(() => {
    if (movies) dispatch(setSelectedMovie(movies[0]));
  }, [movies]);

  if (!movies) return null;

  // Always use movies[0] for backdrop since selectedMovie may not have it
  const backdropPath = movies[0]?.backdrop_path;

  return (
    <div className='relative w-full mt-14 sm:mt-16' style={{ aspectRatio: '16/9', maxHeight: '80vh' }}>

      <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-900">
        {/* Mobile: always show backdrop image */}
        {backdropPath && (
          <img 
          className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/w780${backdropPath}`}
            alt={selectedMovie?.title || ''}
          />
        )}

        {/* Desktop: show YouTube trailer */}
        {trailer && (
         <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <iframe
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ width: '177.78vh', height: '100%', minWidth: '100%' }}
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&loop=1&playlist=${trailer.key}&controls=0&modestbranding=1`}
              allow="autoplay; encrypted-media"
            />
          </div>
        )}

        {/* Fallback: if no backdrop, show dark gradient */}
        {!backdropPath && (
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black" />
        )}
      </div>

      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />

      {/* Title */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 z-20 w-full">
        <VideoTitle title={selectedMovie?.title} overview={selectedMovie?.overview} />
      </div>
    </div>
  );
};

export default MainContainer;
