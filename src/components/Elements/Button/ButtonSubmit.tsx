import style from "./Button.module.scss";
import { ButtonSubmitProps } from "../../../types/ComponentsElementsTypes";

export const ButtonSubmit = ({
    text,
    callFunctionOnClick,
}: ButtonSubmitProps) => {
    return (
        <button className={style.button} onClick={callFunctionOnClick}>
            {text ? text : "Se connecter"}
        </button>
    );
};
