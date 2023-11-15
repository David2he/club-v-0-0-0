import { useState } from "react";
import style from "./RefferalCodeInput.module.scss";
export const RefferalCodeInput = ({ value }: any) => {
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(value);
        } catch (err) {
            console.error("Erreur lors de la copie : ", err);
        }
    };
    return (
        <div className={style.test}>
            <input type='text' value={value} readOnly />
            <div className={style.copyInput}></div>
        </div>
    );
};
