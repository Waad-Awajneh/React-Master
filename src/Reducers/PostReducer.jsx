import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useAuthUser } from "react-auth-kit";
//get all Articles

const allPosts = "http://localhost:8000/api/allPosts";
const allFollowing = "http://localhost:8000/api/following";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const response = await axios.get(allPosts);
  // console.log(allPosts, "okppppppppppppppppp");
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
export const getProfileData = createAsyncThunk(
  "posts/getProfileData",
  async (config) => {
    const response = await axios(config);

    return response.data.data;
  }
);

const initialState = {
  postsData: [],
  followingPostData: [],
  profileData: [],
  singlePost: [],
  favoritePosts: [],
  status: "",
  update: false,
};

export const postReducer = createSlice({
  name: "postsData",
  initialState,
  reducers: {
    getFavoritePosts: (state, action) => {
      state.favoritePosts = state.postsData.filter((ele) => {
        console.log(action.payload);
        return action.payload.includes(ele.post_id);
      });
    },
    getSinglePost: (state, action) => {
      state.singlePost = state.postsData.find(
        (ele) => ele.post_id == action.payload
      );
    },
    setUpdate: (state) => {
      state.update = !state.update;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.status = "Pending";
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.status = "Fulfilled";
      console.log(action.payload);
      state.postsData = action.payload;
    });

    builder.addCase(getPosts.rejected, (state) => {
      state.status = "Rejected";
    });

    builder.addCase(getFollowing.fulfilled, (state, action) => {
      state.status = "Fulfilled";
      state.followingPostData = action.payload;
    });

    builder.addCase(getFollowing.rejected, (state) => {
      state.status = "Rejected";
    });

    builder.addCase(getProfileData.fulfilled, (state, action) => {
      state.status = "Fulfilled";
      state.profileData = action.payload;
    });
    builder.addCase(getProfileData.rejected, (state) => {
      state.status = "Rejected";
    });
  },
});

// Action creators are generated for each case reducer function
export const { getSinglePost, getFavoritePosts, setUpdate } =
  postReducer.actions;

export default postReducer.reducer;
