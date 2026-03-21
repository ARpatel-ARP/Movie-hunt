import React, { useEffect, useRef } from 'react'
import Header from './header'
import { useDispatch, useSelector } from 'react-redux'
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
  const movieListRef = useRef(null) // ✅ ref for scroll target

  usenowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useTopRatedMovies()

  useEffect(() => {
    if (!user) navigate("/")
  }, [user])

  return (
    <div>
      <Header />
      <div className='pt-5'>
        {toggle ? <SearchMovie /> : (
          <>
            <MovieDialog />
            <MainContainer />
            <ScrollIndicator targetRef={movieListRef} /> {/* ✅ add here */}
            <div ref={movieListRef}> {/* ✅ attach ref to MovieContainer */}
              <MovieContainer />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Browse