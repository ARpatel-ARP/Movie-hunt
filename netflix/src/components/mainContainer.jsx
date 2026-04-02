import React, { useEffect } from 'react';
import VideoTitle from './VideoTitle';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedMovie } from '../redux/MovieSlice';
import { Banner_url } from '../utils/constants';

const MainContainer = () => {
  const dispatch = useDispatch();
  const movie = useSelector(store => store.movie?.nowPlayingMovies);
  const selectedMovie = useSelector(store => store.movie?.selectedMovie);
  const trailer = useSelector(store => store.movie?.trailer);

  useEffect(() => {
    if (movie) dispatch(setSelectedMovie(movie[0]));
  }, [movie]);

  if (!movie) return null;

  const backdropPath = selectedMovie?.backdrop_path || movie[0]?.backdrop_path;

  return (
    <div className='relative w-full mt-14 sm:mt-16' style={{ aspectRatio: '16/9', maxHeight: '80vh' }}>

      {/* On mobile: show poster image. On md+: show YouTube iframe */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Mobile poster (shown on small screens, hidden on md+) */}
        {backdropPath && (
          <img
            className="block md:hidden w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/w780${backdropPath}`}
            alt={selectedMovie?.title}
          />
        )}

        {/* Desktop iframe (hidden on small screens, shown on md+) */}
        {trailer && (
          <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden">
            <iframe
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ width: '177.78vh', height: '100%', minWidth: '100%' }}
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&loop=1&playlist=${trailer.key}&controls=0&modestbranding=1`}
              allow="autoplay; encrypted-media"
            />
          </div>
        )}
      </div>

      {/* Gradients for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />

      {/* Title */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 z-20 w-full">
        <VideoTitle title={selectedMovie?.title} overview={selectedMovie?.overview} />
      </div>
    </div>
  );
};

export default MainContainer;
