import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getTopRatedMovies } from '../redux/MovieSlice';
import { Top_Rated_Movie, options } from '../utils/constants';

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(Top_Rated_Movie, options);
        dispatch(getTopRatedMovies(res.data.results));
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
};

export default useTopRatedMovies;
