import axios from "axios";
import React, { useState } from "react";
import { options, Search_Movie } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedMovieDetails } from "../redux/SearchSlice";
import { setLoading } from "../redux/userSlice";
import MovieList from "./MovieList";

const SearchMovie = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector(store => store.app.isLoading);
  const { movieName, searchedMovie } = useSelector(store => store.SearchMovie);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res = await axios.get(`${Search_Movie}${searchQuery}&include_adult=true&language=en-US&page=1`, options);
      dispatch(setSearchedMovieDetails({ query: searchQuery, movies: res?.data?.results }));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <div className="flex justify-center pt-4 w-full px-4">
        <form onSubmit={submitHandler} className="text-white mt-16 sm:mt-20 md:mt-24 w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl">
          <div className="flex gap-x-2">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="shadow-md border-2 border-gray-600 bg-black/60 p-2.5 sm:p-3 w-full rounded-lg text-sm sm:text-base focus:outline-none focus:border-red-500"
              type="text"
              placeholder="Search Movies and Series..."
            />
            <button className="relative inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 overflow-hidden font-medium text-white bg-red-600 rounded-lg shadow-md hover:bg-red-950 transition-all duration-300 text-sm sm:text-base whitespace-nowrap">
              {isLoading ? "..." : "Search"}
            </button>
          </div>
        </form>
      </div>
      <div className="mt-6 sm:mt-8">
        {movieName && (
          <h1 className="text-center text-xl sm:text-2xl md:text-3xl text-white my-6 uppercase tracking-wide">
            {movieName}
          </h1>
        )}
        <MovieList title={""} movies={searchedMovie} />
      </div>
    </>
  );
};

export default SearchMovie;
