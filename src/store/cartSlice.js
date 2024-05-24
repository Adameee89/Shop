import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalProduct: 0,
        totalPrice: 0
    },
    reducers: {
        saveInCartAction: (state, action) => {
            let copyCart = [...state.cart];

            //LOGIKAAAA
            let findIndex = null;

            //proveravam da li postoji u korpi(cart)
            copyCart.find((item, index) => {
                if (item.id === action.payload.id) {
                    findIndex = index;
                    return;
                }
            })
            //dodaj novi proizvod ili povecaj kolicinu
            if (findIndex === null) {
                copyCart.push({...action.payload, count: 1, cartTotal: action.payload.price});
                state.totalProduct++;
                state.totalPrice += action.payload.price
            } else {
                copyCart[findIndex].count++;
            }

            state.cart = copyCart;
            localStorage.setItem('cart_item', JSON.stringify(copyCart));
        },
        deleteItemCartAction: (state, action) => {
            console.log(action.payload);
        }
    }
})

export const {saveInCartAction, deleteItemCartAction} = cartSlice.actions;
export default cartSlice.reducer