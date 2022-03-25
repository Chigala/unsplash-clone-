import { createSlice} from "@reduxjs/toolkit";


export const SuccessSlice = createSlice(
    {
    name: "success", 
    initialState: {value:false}, 
    reducers: {
        getSuccessValue: (state, action) => {
             state.value = action.payload;
        }
    }
})
export const {getSuccessValue} = SuccessSlice.actions;
export default SuccessSlice.reducer;