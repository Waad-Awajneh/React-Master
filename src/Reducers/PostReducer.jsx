import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useAuthUser } from "react-auth-kit";
//get all Articles

const allPosts = "http://localhost:8000/api/allPosts";
const allFollowing = "http://localhost:8000/api/following/";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const response = await axios.get(allPosts);
  console.log(response);
  return response.data.data.sort(
    (dateA, dateB) => new Date(dateB.date) - new Date(dateA.date)
  );
});
export const getFollowing = createAsyncThunk(
  "posts/getFollowingPosts",
  async (config) => {
    const response = await axios(config);

    return response.data.data.sort(
      (dateA, dateB) => new Date(dateB.date) - new Date(dateA.date)
    );
  }
);

const initialState = {
  postsData: [],
  followingPostData: [],
  status: "",
};

export const postReducer = createSlice({
  name: "postsData",
  initialState,
  reducers: {
    getFollowingPosts: (state) => {
      state.approvedPostData = state.postsData.filter((ele) => {
        return ele.status == "approved";
      });
    },
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.status = "Pending";
    },

    [getPosts.fulfilled]: (state, action) => {
      state.status = "Fulfilled";
      state.postsData = action.payload;
    },

    [getPosts.rejected]: (state) => {
      state.status = "Rejected";
    },
    [getFollowing.fulfilled]: (state, action) => {
      state.status = "Fulfilled";
      state.followingPostData = action.payload;
    },

    [getFollowing.rejected]: (state) => {
      state.status = "Rejected";
    },
  },
});

// Action creators are generated for each case reducer function
// export const { getApprovedPosts } = postReducer.actions;

export default postReducer.reducer;
