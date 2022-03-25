import { createSlice} from "@reduxjs/toolkit";


export const SuccessUploadSlice = createSlice(
    {
    name: "uploadSuccess", 
    initialState: {value:false}, 
    reducers: {
        getUploadSuccessValue: (state, action) => {
             state.value = action.payload;
        }
    }
})
export const {getUploadSuccessValue} = SuccessUploadSlice.actions;
export default SuccessUploadSlice.reducer;