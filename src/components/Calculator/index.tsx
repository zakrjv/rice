import { MainIngredients } from "../MainIngredients";
import { TableIngredients } from "../TableIngredients";
import styles from "./index.module.css";

export function Calculator() {
    return (
        <section className={styles.calculator}>
            <div className={styles.calculator__wrap}>
                <MainIngredients />
                <TableIngredients />
            </div>
        </section>
    )
}