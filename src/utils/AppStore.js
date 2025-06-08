import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./Slices/CartSlice";



const appStore = configureStore({
    reducer: {
        cart: cartReducers
    },

});

export default appStore;