import { createSlice } from "@reduxjs/toolkit";

const productsSlice =  createSlice({
    name: 'products',
    initialState: {
        allCategory: [],
        isLoading: false,
        allProducts: []
    },  
    reducers: {
        saveAllCategoryAction(state, action) {
            state.allCategory = action.payload
        },
        saveAllProductsAction: (state, action) => {
            state.allProducts = action.payload;
            state.isLoading = true
            
        }
    }
})


export const {saveAllCategoryAction, saveAllProductsAction} = productsSlice.actions;
export default productsSlice.reducer;