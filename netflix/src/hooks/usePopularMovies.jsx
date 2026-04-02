import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getPopularMovies } from '../redux/MovieSlice';
import { Popular_Movie, options } from '../utils/constants';

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(Popular_Movie, options);
        dispatch(getPopularMovies(res.data.results));
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
};

export default usePopularMovies;
