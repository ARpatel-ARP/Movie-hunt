import axios from 'axios'
import React from 'react'
import { options, Upcoming_Movies } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { getUpcomingMovies } from '../redux/MovieSlice';

const useUpcomingMovies = async () => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(Upcoming_Movies, options);
        dispatch(getUpcomingMovies(res.data.results))

    } catch (error) {
        
    }
  
}


export default useUpcomingMovies
