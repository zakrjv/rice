import clsx from "clsx";
import { ReactNode} from "react";
import styles from './index.module.css'

interface Props {
    type?:  "button" | "reset" | "submit";
    size?: "small" | "medium" | "large";
    bg?: "red" | "green" | "blue";
    children: ReactNode
}

export function Button(props: Props) {
    const { type = "button", size = "medium", bg = "red", children } = props;

    return (
        <button type={type} className={clsx(
            styles.button,
            size === "small" && styles.button_size_small,
            size === "medium" && styles.button_size_medium,
            size === "large" && styles.button_size_large,
            bg === "red" && styles.button_bg_red,
            bg === "green" && styles.button_bg_green,
            bg === "blue" && styles.button_bg_blue,
        )}>
            {children}
        </button>
      )
}
