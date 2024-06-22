import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice.tsx'
import modalReducer from './features/modal/modalSlice.tsx'
import toastReducer from './features/toast/toastSlice.tsx'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer,
        toast: toastReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;