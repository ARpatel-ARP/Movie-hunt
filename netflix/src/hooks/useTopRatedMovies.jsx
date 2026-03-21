import axios from 'axios'
import React from 'react'
import { options, Top_Rated_Movie } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { getTopRatedMovies } from '../redux/MovieSlice';

const useTopRatedMovies = async () => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(Top_Rated_Movie, options);
        dispatch(getTopRatedMovies(res.data.results))

    } catch (error) {
        
    }
  
}


export default useTopRatedMovies
