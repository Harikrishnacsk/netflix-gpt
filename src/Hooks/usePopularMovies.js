import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/MoviesSlice";

const usePopularMovies = () =>{

    const dispatch = useDispatch();
    const getPopularmovies = async () => {
         const  popularData = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
         const  popularMovies = await popularData.json();
         console.log(popularMovies.results);
         dispatch(addPopularMovies(popularMovies.results));
    }

    useEffect(() =>{
        getPopularmovies();
    }, []) 
}

export default usePopularMovies;