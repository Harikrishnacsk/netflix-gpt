 import { useEffect } from "react";
 import { API_OPTIONS } from "../utils/Constants"; 
import { addNowPlayingMovies } from "../utils/MoviesSlice";
import { useDispatch } from "react-redux";

 const useNowPlayingMovies = () =>{

    const dispatch = useDispatch();
    const getNowPlayingMovies = async ()  =>{
        const nowPlaying = await fetch('https://api.themoviedb.org/3/movie/now_playing', API_OPTIONS);
        const nowPlayingData = await nowPlaying.json();
        console.log(nowPlayingData.results);
        dispatch(addNowPlayingMovies(nowPlayingData.results));
     }
     useEffect(() =>{
        getNowPlayingMovies();
     }, [])
 }

 export default useNowPlayingMovies;