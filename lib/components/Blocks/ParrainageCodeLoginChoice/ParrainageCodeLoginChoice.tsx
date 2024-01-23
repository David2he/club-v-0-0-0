import style from "./ParrainageCodeLoginChoice.module.scss";
import { ParrainageCodeForm } from "../../Elements/ParrainageCodeForm/ParrainageCodeForm";
import React from "react"

export type ParrainageCodeLoginChoiceProps = {
    useCodeParrainageHandler: any;
}
export const ParrainageCodeLoginChoice = ({useCodeParrainageHandler}: ParrainageCodeLoginChoiceProps) => {
    return (
        <>
        <div className={style.codeLoginChoiceContainer}>
            <div className={style.orChoiceContainer}>
                <span></span>
                <p>OU</p>
                <span></span>
            </div>
            <p>J'ai un code de parrainage</p>
            <div>
                <ParrainageCodeForm goToUrl='register' loginType='login' useCodeParrainageHandler={useCodeParrainageHandler} />
            </div>
        </div>
        </>
    );
};
