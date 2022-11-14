import { configureStore } from "@reduxjs/toolkit";
import profileDetails from "./profileDetails";
import postStories from './postStories'

export const store = configureStore({
    reducer : {
        profile:profileDetails,
        postStories : postStories
    }
})