import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  openEditComment: false,
  update: false,
  openFormModal:false,
  openFormPriceModal:false
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
   
      state.openEditComment = !state.openEditComment;
    },
    handelUpdate: (state) => {
      state.update = !state.update;
    },
    // openFormModal: (state) => {

    //   state.isOpen = true;

    // },
    // closeFormModal: (state) => {
    //   state.isOpen = false;
    // },
    handelOpenFormModel: (state) => {

      state.openFormModal = !state.openFormModal;
    },
    handelOpenPriceModel: (state) => {

      state.openFormPriceModal = !state.openFormPriceModal;

    },
  },
});


export const {
  closeModal,
  openModal,
  handelOpenModelToEditComment,
  handelUpdate,handelOpenFormModel
  ,handelOpenPriceModel
} = modalReducer.actions;

export default modalReducer.reducer;
