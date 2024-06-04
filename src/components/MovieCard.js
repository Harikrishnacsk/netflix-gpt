import React from 'react'
import { Movie_CDN_URL } from '../utils/Constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-44'>
        <img className='p-3' alt="movie card" src={Movie_CDN_URL + posterPath}
        />
    </div>
  )
}

export default MovieCard