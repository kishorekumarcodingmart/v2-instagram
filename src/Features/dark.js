import {createSlice} from '@reduxjs/toolkit'

const theme = createSlice({
    name : "theme",
    initialState : {data : {
        dark : false
    }},
    reducers : {
        addtheme : (state,action) => {
            state.data = action.payload
        }
    }
})

export const {addtheme} = theme.actions
export default theme.reducer