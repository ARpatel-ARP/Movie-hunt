import React from 'react';
import { Banner_url } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { getId, setOpen, setSelectedMovie } from '../redux/MovieSlice';
import toast from 'react-hot-toast';

const MovieCard = ({ posterPath, movieId, movie }) => {
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(getId(movieId));
    dispatch(setSelectedMovie({ title: movie.title, overview: movie.overview }));
    dispatch(setOpen(true));
    toast.success(`Now playing: ${movie.title}`, {
      position: 'top-center',
      duration: 2000,
      style: { background: '#333', color: '#fff' },
    });
  };

  if (!posterPath) return null;

  return (
    <div className="w-24 sm:w-32 md:w-40 lg:w-48 shrink-0">
      <img
        onClick={handleOpen}
        className="w-full rounded-sm hover:scale-105 transition-transform duration-200 cursor-pointer"
        style={{ aspectRatio: '2/3', objectFit: 'cover' }}
        src={`${Banner_url}${posterPath}`}
        alt={movie.title}
      />
    </div>
  );
};

export default MovieCard;
