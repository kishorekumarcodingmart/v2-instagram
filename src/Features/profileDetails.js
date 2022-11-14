import { createSlice } from '@reduxjs/toolkit'

const profileDetails = createSlice({
    name:"ProfileDetails",
    initialState:{details:{
        userName : "",
        name : "", 
        profilePhoto : "",
        userCaptions : ""
    }},
    reducers:{
        addDetails:(state, action)=>{
              state.details=action.payload;
        }
    }
})
export const {addDetails} = profileDetails.actions;
export default profileDetails.reducer; 