import { ChangeEvent } from "react";
import styles from "./index.module.css";

interface CheckboxProps {
    name: string;
    checked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Checkbox(props: CheckboxProps) {
    const { name, checked, onChange } = props;

    return (
        <label className={styles.checkbox}>
            <input
                name={name}
                className='visually-hidden'
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <span></span>
        </label>
    )
}