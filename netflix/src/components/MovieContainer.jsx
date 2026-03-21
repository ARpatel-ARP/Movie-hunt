import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import ScrollIndicator from './ScrollUpIndicator';

const MovieContainer = () => {
  const movie = useSelector(store=>store.movie)
  
  return (
    <div className='-mt-63 relative z-10'>
      
      <MovieList title={"Popular Movies"} movies={movie.popularMovie} />
      <MovieList title={"Now Playing Movies"} movies={movie.nowPlayingMovies} />
      <MovieList title={"Top Rated Movies"} movies={movie.topratedMovies} />
      <MovieList title={"Up Coming Movies"} movies={movie.upcomingMovies} />
    </div>
  );
}

export default MovieContainer;
