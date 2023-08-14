import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/postSlice";
const store = configureStore({
  reducer :{
    posts: postSlice
  },
});

export default store;
