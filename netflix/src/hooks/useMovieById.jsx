import { useEffect } from 'react';
import axios from "axios";
import { options } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { getTrailer } from '../redux/MovieSlice';

const useMovieById = (movieId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMovieTrailer = async () => {
            try {
                const res = await axios.get(
                  `https://api.themoviedb.org/3/movie/${movieId}/videos`,
                  options
                );

                const trailer = res?.data?.results?.filter((item) => {
                    return item.type === "Trailer";
                });

                dispatch(
                  getTrailer(
                    trailer.length > 0 ? trailer[0] : res.data.results[0]
                  )
                );

            } catch (error) {
                console.log(error);
            }
        };

        if (movieId) fetchMovieTrailer();

    }, [movieId, dispatch]);
};

export default useMovieById;