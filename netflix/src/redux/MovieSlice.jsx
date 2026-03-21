
import { createSlice } from '@reduxjs/toolkit';

const MovieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        popularMovie:null,
        topratedMovies:null,
        upcomingMovies:null,
        toggle:false,
        trailer:null,
        open:false,
        id:"",
        selectedMovie: null,

    },
    reducers:{
        getNowPlayingMovies:(state, action) => {
            state.nowPlayingMovies = action.payload
          
        },
        getPopularMovies:(state, action) => {
            state.popularMovie = action.payload
          
        },
        getTopRatedMovies:(state, action) => {
            state.topratedMovies = action.payload
          
        },
        getUpcomingMovies:(state, action) => {
            state.upcomingMovies = action.payload
          
        },
        setToggle:(state, action) => {
            state.toggle = !state.toggle
          
        },
        getTrailer: (state, action) => {
            state.trailer = action.payload
          
        },
        setOpen:(state, action) => {
            state.open = action.payload
        },
        getId:(state, action) => {
            state.id = action.payload
          
        },
        setSelectedMovie: (state, action) => {
    state.selectedMovie = action.payload
}
    }
})
export const { getNowPlayingMovies,
     getPopularMovies,
     getUpcomingMovies, 
     getTopRatedMovies,
      setToggle,
       getTrailer, 
       setOpen,
       getId,
       setSelectedMovie
     } = MovieSlice.actions
export default MovieSlice.reducer;