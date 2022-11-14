import { configureStore } from "@reduxjs/toolkit";
import profileDetails from "./profileDetails";
import postStories from './postStories'
import addtheme from './dark'

export const store = configureStore({
    reducer : {
        profile:profileDetails,
        postStories : postStories,
        theme : addtheme
    }
})