import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;
  return (
    <div className="text-white w-full mb-4">
      {title && (
        <h1 className="text-base sm:text-xl md:text-2xl mx-3 mb-2 font-semibold">
          {title}
        </h1>
      )}
      <div
        className="flex gap-2 px-3 pb-2"
        style={{
          overflowX: 'auto',
          overflowY: 'visible',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          touchAction: 'pan-x',
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
