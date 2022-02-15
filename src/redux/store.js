import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "./product-state";
import cartReducer from "./cartReducer"
import authReducer from "./authSlice";


export const store = configureStore({
    reducer:{
        product: productSliceReducer,
        cart: cartReducer,
        auth: authReducer,
    }
})