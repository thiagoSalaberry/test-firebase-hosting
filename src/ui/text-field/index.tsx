import React from "react";
import css from "./text-field.css";
type InputProps = {
    type:string;
    placeholder?:string;
    name:string;
}
export function Input(props:InputProps) {
    return <input className={css.input} type={props.type} name={props.name} placeholder={props.placeholder}/>
};