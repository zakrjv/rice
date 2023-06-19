import store from "../store";
import { MULTIPLIERS } from "../constants";

export type RootState = ReturnType<typeof store.getState>;

export type IngredientName = keyof typeof MULTIPLIERS;

export type Ingredient = {
    name: IngredientName,
    amount: number,
    unit: 'ml' | 'g',
};