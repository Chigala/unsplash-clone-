import { createSlice} from "@reduxjs/toolkit";


export const LoadingSlice = createSlice(
    {
    name: "photoIsLoading", 
    initialState: {value:0}, 
    reducers: {
        getValue: (state, action) => {
             state.value = action.payload;
        }
    }
})
export const {getValue} = LoadingSlice.actions;
export default LoadingSlice.reducer;