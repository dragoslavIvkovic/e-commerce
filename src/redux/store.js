import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "./product-state";


export const store = configureStore({
    reducer:{
        product: productSliceReducer,
    }
})