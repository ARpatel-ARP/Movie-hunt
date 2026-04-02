import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const MovieContainer = () => {
  const movie = useSelector(store => store.movie);

  return (
    <div className='relative z-10 bg-black pt-4 pb-10'>
      <MovieList title={"Popular Movies"} movies={movie.popularMovie} />
      <MovieList title={"Now Playing"} movies={movie.nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={movie.topratedMovies} />
      <MovieList title={"Upcoming Movies"} movies={movie.upcomingMovies} />
    </div>
  );
};

export default MovieContainer;
