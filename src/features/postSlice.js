import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("posts/getPosts", async (thunkAPI) => {
  try {
    const res = await axios.get("http://localhost:3000/posts");
    return res.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

// handle posts requests to create a new post
export const addPost = createAsyncThunk(
  "posts/addPost",
  async (initialPost, thunkAPI) => {
    try {
      const res = await axios.post("http://localhost:3000/posts", initialPost);
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

const postSlice = createSlice({
  name: "posts",
  initialState: {
    // Initial State for the App
    postsList: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        // (state , action) <- are two parameters we get from reducer
        state.status = "loading";
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = "succesfull";
        state.postsList = state.postsList.concat(action.payload);
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.postsList.push(action.payload);
      });
  },
});

export default postSlice;
