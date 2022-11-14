import {createSlice} from '@reduxjs/toolkit'

const postStories = createSlice({
    name : "PostStories",
    initialState : {userDetails : {
        userPost : [],
        userStories : [],
        userTaggedPost : [],
        userSaved : [],
        feedPost : [],
        feedStories : []
    }},
    reducers : {
        addUserDetails : (state,action) => {
            state.userDetails = action.payload
        }
    }
})

export const {addUserDetails} = postStories.actions
export default postStories.reducer