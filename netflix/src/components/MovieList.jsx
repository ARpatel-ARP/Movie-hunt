import React from "react";
import MovieCard from "./MovieCard";
import SearchMovie from "./SearchMovie";

const MovieList = ({ title, movies}) => {
  if (!movies) return null;
  return (
    <div className="text-white w-full">
      <h1 className={`text-3xl mx-3 mb-10`}>{title}</h1>
      <div className=" cursor-pointer">
        <div className="flex gap-x-2 p-3 w-full overflow-x-auto">
          {movies.map((movie) => {
            return(
              <MovieCard key={movie.id} posterPath={movie.poster_path} movieId={movie.id}  movie={movie}/>
              )
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
