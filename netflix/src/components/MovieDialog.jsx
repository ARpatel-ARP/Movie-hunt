import React from 'react';
import { useSelector } from 'react-redux';
import useMovieById from '../hooks/useMovieById';

export default function MovieDialog() {
  const { id } = useSelector(store => store.movie);
  useMovieById(id);
  return null;
}