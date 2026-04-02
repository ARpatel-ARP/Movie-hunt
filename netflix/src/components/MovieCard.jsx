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
    <div
      className="shrink-0 rounded overflow-hidden"
      style={{ width: 'clamp(80px, 22vw, 160px)' }}
    >
      <img
        onClick={handleOpen}
        className="w-full h-full object-cover cursor-pointer active:opacity-80"
        style={{ aspectRatio: '2/3', display: 'block' }}
        src={`${Banner_url}${posterPath}`}
        alt={movie.title}
        draggable={false}
      />
    </div>
  );
};

export default MovieCard;
