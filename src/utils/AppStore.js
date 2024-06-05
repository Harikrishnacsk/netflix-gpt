import { configureStore } from "@reduxjs/toolkit";
import Userreducer from './UserSlice';
import Moviesreducer from './MoviesSlice';
import Gptreducer from './GptSlice';
import Configreducer from './ConfigSlice';

const appStore = configureStore({

    reducer : {
         user : Userreducer,
         movies : Moviesreducer,
         gpt : Gptreducer,
         config : Configreducer,
    }
})

export default appStore;