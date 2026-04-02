import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getNowPlayingMovies } from '../redux/MovieSlice';
import { Now_Playing_Movie, options } from '../utils/constants';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(Now_Playing_Movie, options);
        dispatch(getNowPlayingMovies(res.data.results));
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
};

export default useNowPlayingMovies;
