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
                copyCart.push({...action.payload, count: 1, subTotal: action.payload.price});
                state.totalProduct++;
                state.totalPrice += action.payload.price
            } else {
                copyCart[findIndex].count++;
            }

            state.cart = copyCart;
            localStorage.setItem('cart_item', JSON.stringify(copyCart));
            localStorage.setItem('total_item', JSON.stringify(state.totalProduct));
        },
        deleteItemCartAction: (state, action) => {
            console.log(action.payload);

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


            if(findIndex !== null){
                copyCart.splice(findIndex, 1);
                state.totalProduct--;
            }
            console.log(copyCart);



            state.cart = copyCart;
            localStorage.setItem('cart_item', JSON.stringify(copyCart));
            localStorage.setItem('total_item', JSON.stringify(state.totalProduct));
        },
        setPriceHandlerAction: (state, action) => {
             const {increment, index} = action.payload;
             console.log(action.payload);
             let copyCart = [...state.cart];
             console.log(copyCart);

             copyCart[index].subTotal += copyCart[index].price * increment;
             state.totalPrice = cartTotal(copyCart);

             if(copyCart[index].count === 1 && increment === -1){
                 copyCart.splice(index, 1);
                 state.totalProduct--;
                 state.totalPrice = cartTotal(copyCart);
             }else{
                 copyCart[index].count += increment;
                
             }



             state.cart = copyCart;
             localStorage.setItem('cart_item', JSON.stringify(copyCart));
             localStorage.setItem('total_item', JSON.stringify(state.totalProduct));
            
        }
    }
})

//helper functions
function cartTotal(arrayCart) {
    return arrayCart.reduce((acc, current) => {
        return acc + current.subTotal;
    }, 0)
}

export const {saveInCartAction, deleteItemCartAction, setPriceHandlerAction} = cartSlice.actions;
export default cartSlice.reducer