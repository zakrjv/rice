import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../types";
import { Title } from "../Title";
import { setMainIngredient } from "../../slice/mainIngredientSlice";
import styles from "./index.module.css";

export function Input() {
    const amountIngredient = useSelector<RootState, number>((state) => state.mainIngredient.value);
    const dispatch = useDispatch();

    const handleSetIngredient = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        if (isFinite(newValue)) {
            dispatch(setMainIngredient(newValue));
        }
    }

    return <div className={styles.ingredient}>
        <label htmlFor="amount">
            <Title>Rice</Title>
        </label>
        <div>
            <input
                className={styles.ingredient__input}
                id="amount"
                type="number"
                name="amount"
                placeholder="1000"
                value={amountIngredient}
                onChange={(evt) => handleSetIngredient(evt)}
            />
        </div>
    </div>
}
