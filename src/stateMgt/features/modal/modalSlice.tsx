import { createSlice } from "@reduxjs/toolkit";
import { modalInitialState } from "../../../utils/types";

const initialState: modalInitialState = {
  isOpen: false,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

console.log(modalSlice);

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
