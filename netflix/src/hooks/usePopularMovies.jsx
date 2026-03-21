import axios from 'axios'
import React from 'react'
import { options, Popular_Movie } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { getPopularMovies } from '../redux/MovieSlice';

const usePopularMovies = async () => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(Popular_Movie, options);
        dispatch(getPopularMovies(res.data.results))

    } catch (error) {
        
    }
  
}


export default usePopularMovies
