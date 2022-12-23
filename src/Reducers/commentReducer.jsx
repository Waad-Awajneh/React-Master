import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useAuthUser } from "react-auth-kit";

export const addComment = createAsyncThunk("posts/getPosts", async () => {
  const response = await axios.get(allPosts);
  console.log(allPosts);
  return response.data.data.sort(
    (dateA, dateB) => new Date(dateB.date) - new Date(dateA.date)
  );
});

const initialState = {
  addCommentData: [],

  status: "",
};

export const commentReducer = createSlice({
  name: "commentData",
  initialState,
  reducers: {
    getSinglePost: (state, action) => {
      state.singlePost = state.postsData.find(
        (ele) => ele.post_id == action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.status = "Pending";
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.status = "Fulfilled";
      state.postsData = action.payload;
    });

    builder.addCase(getPosts.rejected, (state) => {
      state.status = "Rejected";
    });
  },
});

// Action creators are generated for each case reducer function
export const { getSinglePost } = commentReducer.actions;

export default commentReducer.reducer;
