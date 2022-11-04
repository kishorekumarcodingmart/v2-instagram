import { configureStore } from "@reduxjs/toolkit";
import profileDetails from "./profileDetails";

export default configureStore({
    reducer : {
        profile:profileDetails
    }
})