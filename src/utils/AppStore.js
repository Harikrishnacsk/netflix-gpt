import { configureStore } from "@reduxjs/toolkit";
import Userreducer from './UserSlice';
import Moviesreducer from './MoviesSlice';

const appStore = configureStore({

    reducer : {
         user : Userreducer,
         movies : Moviesreducer
    }
})

export default appStore;