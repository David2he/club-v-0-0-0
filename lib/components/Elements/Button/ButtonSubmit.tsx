import style from "./Button.module.scss";
import { ButtonSubmitProps } from "../../../types/Types";
import React from "react";

export const ButtonSubmit = ({ text, callFunctionOnClick, size }: ButtonSubmitProps) => {
    return (
        <button className={`${style.button} ${size && style.large}`} onClick={callFunctionOnClick}>
            {text ? text : "Se connecter"}
        </button>
    );
};
