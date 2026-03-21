import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../redux/MovieSlice';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

export default function MovieDialog() {
  const { id } = useSelector(store => store.movie);

  return (
   <div className="relative w-full h-screen">

  {/* Background */}
  <VideoBackground movieId={id} />
</div>
  );
}