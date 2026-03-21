import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    moviename: null,
    searchedMovie: null,
  },
  reducers: {
    setSearchedMovieDetails: (state, action) => {
  const { query, movies } = action.payload; // ✅ matches what SearchMovie.jsx dispatches
  state.moviename = query;
  state.searchedMovie = movies;
},

    setMovieName: (state, action) => {
      state.moviename = action.payload;
    },
    setSearchedMovie: (state, action) => {
      state.searchedMovie = action.payload;
    },
    clearSearch: (state) => {       // ✅ add this
      state.moviename = null;
      state.searchedMovie = null;
    },
  },
});
export const { setMovieName, setSearchedMovie, setSearchedMovieDetails, clearSearch } =
  searchSlice.actions;
export default searchSlice.reducer;
