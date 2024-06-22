import { createSlice } from "@reduxjs/toolkit";
import { cartItems } from "../../../utils/data";
import { CartItemProps, cartIinitialState } from "../../../../src/utils/types";

const initialState: cartIinitialState = {
  cartItems: cartItems,
  amount: 2,
  subtotal: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      console.log(action);
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem: CartItemProps | undefined = state.cartItems.find(
        (item) => item.id === payload.id
      );

      if (cartItem) {
        cartItem.quantity = (cartItem.quantity ?? 0) + 1;
      }
    },
    decrease: (state, { payload }) => {
      const cartItem: CartItemProps | undefined = state.cartItems.find(
        (item) => item.id === payload.id
      );

      if (cartItem) {
        cartItem.quantity = (cartItem.quantity ?? 1) - 1;
      }
    },
    calculateTotals: (state) => {
      let amount = 0;
      let totalPrice = 0;
      state.cartItems.forEach((item) => {
        amount += item.quantity;
        totalPrice += item.price * item.quantity;
      });
      state.amount = amount;
      state.subtotal = totalPrice;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;
