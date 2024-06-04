import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    //console.log(movies);
  return (
    <div className='flex overflow-x-scroll p-4'>
        <h2 className='text-white'>{title}</h2>
        <div className='flex -mt-52 relative z-2'>
        {movies?.map( movie => <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
        </div>
    </div>
  )
}

export default MovieList;