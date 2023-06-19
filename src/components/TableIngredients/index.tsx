import { useSelector } from "react-redux";
import { RootState } from "../../types";
import { Title } from "../Title";
import { IngredientCheckbox } from "../IngredientCheckbox";
import { getIngredientValue } from "./helper";
import { ingredients } from "./data";
import styles from "./index.module.css";

export function TableIngredients() {
    const amountIngredient = useSelector<RootState, number>((state) => state.mainIngredient.value);

    return (
        <div className="ingredients">
            <Title>Ingredients</Title>

            <table className={styles.ingredients__table}>
                <thead>
                    <tr className={styles.ingredients__characteristic}>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Done</th>
                    </tr>
                </thead>

                <tbody>
                    {ingredients.map(( ingredient ) => {
                        const { name, amount, unit } = ingredient;
                        const keyValue = `${name}--${amount}`;

                        const ingredientValue = getIngredientValue({
                            amountMainIngredient: amountIngredient,
                            ingredientName: name,
                        })

                        return (
                            <tr className={styles.ingredients__ingredient} key={keyValue}>

                                <td className="ingredients__name">{name}</td>
                                <td className={styles.ingredients__quantity}>
                                    {`${ingredientValue} ${unit}`}
                                </td>
                                <td className={styles.ingredients__input}>
                                    <IngredientCheckbox name={name} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}