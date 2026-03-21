import axios from "axios";
import React from "react";
import { useState } from "react";
import { options, Search_Movie } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedMovieDetails } from "../redux/SearchSlice";
import { setLoading } from "../redux/userSlice";
import MovieList from "./MovieList";


const SearchMovie = () => {
  const [SearchMovie, setSearchMovie] = useState("")
  const dispatch = useDispatch()
  const isLoading =useSelector(store=>store.app.isLoading)
  const {movieName, searchedMovie} =useSelector(store=>store.SearchMovie)
  console.log(movieName);
  
 const submitHandler = async (e) => {
  e.preventDefault()
  dispatch(setLoading(true))
  try {
    const res = await axios.get(`${Search_Movie}${SearchMovie}&include_adult=true&language=en-US&page=1`, options)
    console.log(res.data);
    const movies = res?.data?.results
    dispatch(setSearchedMovieDetails({
  query: SearchMovie,
  movies: movies }))
    
  } catch (error) {
    console.log(error);
    
  }finally{
    dispatch(setLoading(false))
  }
 }
   
  return (
    <>
    <div className="flex justify-center pt-2 w-full">
      <form onSubmit={submitHandler} action="" className="text-white mt-30 w-[50%]">
        <div className="flex justify-between ">
          <input
          value={SearchMovie}
          onChange={(e)=>{setSearchMovie(e.target.value)}}
            className=" shadow-md border-2 p-3 w-full rounded-lg"
            type="text"
            placeholder="Search Movies and Series..."
          />
          <button className=" ml-1 relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white bg-red-600 rounded-lg shadow-md group hover:bg-red-950 transition-all duration-300">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-red-900 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="relative">{isLoading ? "loading..." : "Search"}</span>
          </button>
        </div>
      </form>
    </div>
    <div>
      <h1 className="text-center text-3xl text-white my-10 -mb-5 uppercase ">{SearchMovie}</h1>
     <MovieList title={movieName} movies={searchedMovie} />
    </div>
    </>
  );
};
export default SearchMovie;
