import React from 'react';
import { Banner_url } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { getId, setOpen, setSelectedMovie } from '../redux/MovieSlice';
import toast from 'react-hot-toast'; // ✅ import

const MovieCard = ({posterPath, movieId, movie}) => {
  const dispatch = useDispatch()
  
  const handleOpen = () => {
    dispatch(getId(movieId))
    dispatch(setSelectedMovie({ title: movie.title, overview: movie.overview })) 
    dispatch(setOpen(true))
    toast.success(`Now playing: ${movie.title}`, { // ✅ add this
      position: 'top-center',
      duration: 2000,
      style: {
        background: '#333',
        color: '#fff',
      }
    })
  }
  
  if (posterPath === null) return null;

  return (
    <div className="w-40 md:w-48 lg:w-56 shrink-0">
      <img onClick={handleOpen} className="w-full aspect-2/3 object-cover cursor-pointer" src={`${Banner_url}${posterPath}`} alt="poster" />
    </div>
  );
}

export default MovieCard;