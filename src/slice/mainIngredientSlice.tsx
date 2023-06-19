import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 1000,
};

const mainIngredientSlice = createSlice({
    name: 'mainIngredient',
    initialState,
    reducers: {
        setMainIngredient: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setMainIngredient } = mainIngredientSlice.actions;

export default mainIngredientSlice.reducer;