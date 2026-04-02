import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUpcomingMovies } from '../redux/MovieSlice';
import { Upcoming_Movies, options } from '../utils/constants';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(Upcoming_Movies, options);
        dispatch(getUpcomingMovies(res.data.results));
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
};

export default useUpcomingMovies;
