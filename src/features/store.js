import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import favReducer from "./favSlice"
import authReducer from "./auth/authSlice"


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        fav: favReducer,
        auth: authReducer
    }
})