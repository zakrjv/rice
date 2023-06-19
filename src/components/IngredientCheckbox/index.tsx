import { ChangeEvent, useState } from "react";
import { Checkbox } from "../Checkbox";

interface IngredientCheckboxProps {
  name: string;
}

export function IngredientCheckbox(props: IngredientCheckboxProps) {
    const { name } = props;
    const [checked, setChecked] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newState = e.target.checked;
        setChecked(newState);
    };

    return (
        <Checkbox name={name} checked={checked} onChange={handleChange} />
    )
}