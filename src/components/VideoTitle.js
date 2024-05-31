import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-40 px-10 absolute bg-gradient-to-r from-black'>
     <h2 className='font-bold text-2xl text-white'>{title}</h2>
     <p className='pt-4 w-1/3 text-white'>{overview}</p>
     <button className='mx-12 my-6 p-2 text-black bg-white opacity-90 rounded-lg hover:opacity-80'> ⏯️ Play </button>
     <button className='m-2 my-6 p-2 text-white bg-gray-400 opacity-50 rounded-lg hover:opacity-100'> ℹ️ More info</button>
    </div>
  )
}

export default VideoTitle