import React from "react";
import css from "./button.css";

export function Button({children}) {
    return <button className={css.button}>{children}</button>
};