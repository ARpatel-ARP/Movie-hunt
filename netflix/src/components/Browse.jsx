import React, { useEffect, useRef } from 'react'
import Header from './header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MovieContainer from './MovieContainer'
import MainContainer from './mainContainer'
import usenowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import SearchMovie from './SearchMovie'
import MovieDialog from './MovieDialog'
import ScrollIndicator from './ScrollUpIndicator'

const Browse = () => {
  const user = useSelector((store) => store.app.user)
  const toggle = useSelector(store => store.movie.toggle)
  const navigate = useNavigate()
  const movieListRef = useRef(null)

  usenowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useTopRatedMovies()

  useEffect(() => {
    if (!user) navigate("/")
  }, [user])

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div>
        {toggle ? <SearchMovie /> : (
          <>
            <MovieDialog />
            <MainContainer />
            <ScrollIndicator targetRef={movieListRef} />
            <div ref={movieListRef}>
              <MovieContainer />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Browse
