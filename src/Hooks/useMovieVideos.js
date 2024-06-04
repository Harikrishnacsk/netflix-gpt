import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/MoviesSlice';
import { API_OPTIONS } from '../utils/Constants';

const useMovieVideos = (movieId) => {

    const dispatch = useDispatch();
    const getMovieVideos = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        //console.log(json);

        const filterData = json.results.filter((video) => video.type === "Trailer");
        //console.log(filterData);
        const trailer = filterData.length ?filterData[0] : json.results[0];
        //console.log(trailer);
        dispatch(addTrailerVideo(trailer))
    }

     useEffect(() =>{
        getMovieVideos();
     }, [])
}

export default useMovieVideos;