import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;
  return (
    <div className="text-white w-full mb-4 sm:mb-6">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mx-3 mb-3 sm:mb-4 font-semibold">{title}</h1>
      <div className="flex gap-x-2 sm:gap-x-3 px-3 overflow-x-auto pb-2">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} movieId={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
