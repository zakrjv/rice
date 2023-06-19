import { configureStore } from "@reduxjs/toolkit";
import mainIngredientReducer from "../slice/mainIngredientSlice";

const store = configureStore({
    reducer: {
        mainIngredient: mainIngredientReducer,
    },
});

export default store;