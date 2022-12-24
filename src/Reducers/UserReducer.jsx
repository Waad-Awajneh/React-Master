import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useAuthUser } from "react-auth-kit";
//get all Articles

export const getFavorite = createAsyncThunk(
  "posts/getFavorite",
  async (config) => {
    const response = await axios(config);
    // console.log(response.data.data);
    return response.data.data;
  }
);

const initialState = {
  favoritePostsData: [],
  favoritePostsId: [],
  status: "",
};

export const UserReducer = createSlice({
  name: "UserReducer",
  initialState,
  reducers: {
    getFavoritePostsId: (state, action) => {
      state.favoritePostsId = state.favoritePostsData.map((ele) => {
        return ele.id;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFavorite.pending, (state) => {
      state.status = "Pending";
    });
    builder.addCase(getFavorite.fulfilled, (state, action) => {
      state.status = "Fulfilled";
      state.favoritePostsData = action.payload;
    });

    builder.addCase(getFavorite.rejected, (state) => {
      state.status = "Rejected";
    });
  },
});

export const { getFavoritePostsId } = UserReducer.actions;

export default UserReducer.reducer;
