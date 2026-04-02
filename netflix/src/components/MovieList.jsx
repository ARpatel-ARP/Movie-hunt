import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;
  return (
    <div className="text-white w-full mb-6">
      {title && (
        <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl mx-3 mb-2 sm:mb-3 font-semibold">
          {title}
        </h1>
      )}
      {/* overflow-x-scroll with -webkit-overflow-scrolling for real iOS/Android scroll */}
      <div
        className="flex gap-x-2 sm:gap-x-3 px-3 pb-3"
        style={{
          overflowX: 'scroll',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
            movieId={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
