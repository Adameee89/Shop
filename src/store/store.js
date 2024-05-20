import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";

const store = configureStore({
    reducer: {
        productStore: productsSlice
    }
});

export default store;