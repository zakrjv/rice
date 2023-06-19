import { MULTIPLIERS } from "../../constants";
import { IngredientName } from "../../types";

interface Params {
    amountMainIngredient: number;
    ingredientName: IngredientName;
}

export const getIngredientValue = (params: Params) => {
    const {ingredientName, amountMainIngredient} = params;

    const multiplier = MULTIPLIERS[ingredientName] ?? 0;
    return Math.round(amountMainIngredient * multiplier);
}