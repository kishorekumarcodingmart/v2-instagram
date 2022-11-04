const { createSlice } = require("@reduxjs/toolkit");

const profileDetails = createSlice({
    name:"ProfileDetails",
    initialState:{details:{}},
    reducers:{
        addDetails:(state,e)=>{
              state.details=e.payload;
        }
    }
})
export const {addDetails}=profileDetails.actions;
export default profileDetails.reducer;