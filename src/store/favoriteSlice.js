import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        allFavorite: [],
        favoriteTotal: 0,
    },
    reducers: {
        updateFavoriteAction: (state, action) => {
            let copyFavorite = [...state.allFavorite];

            //LOGIKAAAA
            let findIndex = null;
            //proveravam da li postoji u korpi(cart)
            copyFavorite.find((item, index) => {
                if (item.id === action.payload.id) {
                    findIndex = index;
                    return;
                }
            })




            //dodaj novi proizvod ili povecaj kolicinu
            if (findIndex === null) {
                copyFavorite.push({...action.payload, favoriteActive: true});
                state.favoriteTotal++;
            } else {
                copyFavorite.splice(findIndex, 1);
                state.favoriteTotal--;
            }

            state.allFavorite = copyFavorite;
        }

    }

});
        

export const {updateFavoriteAction} = favoriteSlice.actions;
export default favoriteSlice.reducer