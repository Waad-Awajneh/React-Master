import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useAuthUser } from "react-auth-kit";

const initialState = {
  isOpen: false,
};

export const modalReducer = createSlice({
  name: "modalReducer",
  initialState,
  reducers: {
    openModal: (state, actions) => {
      console.log(state.isOpen);
      state.isOpen = true;
      console.log(state.isOpen);
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { closeModal, openModal } = modalReducer.actions;

export default modalReducer.reducer;
