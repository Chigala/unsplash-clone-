import { createSlice} from "@reduxjs/toolkit";


export const UrlSlice = createSlice(
    {
    name: "photourl", 
    initialState: {value:"false"}, 
    reducers: {
        getUrl: (state, action) => {
             state.value = action.payload;
        }
    }
})
export const {getUrl} = UrlSlice.actions;
export default UrlSlice.reducer;