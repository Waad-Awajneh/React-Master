import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  openEditComment: false,
  update: false,
};

export const modalReducer = createSlice({
  name: "modalReducer",
  initialState,
  reducers: {
    openModal: (state) => {

      state.isOpen = true;

    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    handelOpenModelToEditComment: (state) => {
      console.log(state.openEditComment);
      state.openEditComment = !state.openEditComment;
    },
    handelUpdate: (state) => {

      state.update = !state.update;
    },
  },
});


export const {
  closeModal,
  openModal,
  handelOpenModelToEditComment,
  handelUpdate,
} = modalReducer.actions;

export default modalReducer.reducer;
