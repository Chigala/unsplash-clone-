import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import LoadingReducer from "./store/state"
import successReducer from "./store/success"
import UrlReducer from "./store/photoUrl"
import uploadSuccess from './store/uploadSuccess';

const store = configureStore({
  reducer: {
    photoIsLoading: LoadingReducer,
    success: successReducer, 
    photourl: UrlReducer,
    uploadSuccess: uploadSuccess

  }
})


ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

