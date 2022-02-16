import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "./product-state";
import cartReducer from "./cartReducer"
import authReducer from "./authSlice";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';


const persistConfig = {
    key: 'counter',
    storage,
};
const reducers = combineReducers({product: productSliceReducer,
        cart: cartReducer,
        auth: authReducer, });

       const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

