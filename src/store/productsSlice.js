import { createSlice } from "@reduxjs/toolkit";

const productsSlice =  createSlice({
    name: 'products',
    initialState: {
        allCategory: [],
        isLoading: false,
        allProducts: [],
        searchTitle: '',
        selectCategory: ''
    },  
    reducers: {
        saveAllCategoryAction(state, action) {
            state.allCategory = action.payload
        },
        saveAllProductsAction: (state, action) => {
            state.allProducts = action.payload;
            state.isLoading = true
            
        },
        setSearchTitleAction: (state, action) => {
            state.searchTitle = action.payload
        },
        setCategoryAction: (state, action) => {
            state.selectCategory = action.payload
        }
    }
})


export const {saveAllCategoryAction, saveAllProductsAction, setSearchTitleAction, setCategoryAction} = productsSlice.actions;
export default productsSlice.reducer;