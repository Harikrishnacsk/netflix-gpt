import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SeconadaryContainer = () => {
     const movies = useSelector(store => store.movies);
  return (
    <div className='bg-black'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
    </div>
  )
}

export default SeconadaryContainer