import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import bookReducer from "./bookSlice"


const store = configureStore({
    reducer:{
        cart: cartReducer,
        book: bookReducer
    }
})

export default store;