import style from "./BlockText.module.scss";
import { useState } from "react";
import { BlockTextProps } from "../../../types/ComponentsElementsTypes";
export const BlockText = ({ title, text, closable }: BlockTextProps) => {
    const [isOpen, setIsOpen] = useState(true);
    if (!isOpen) return null;
    return (
        <div className={style.container}>
            <div className={style.titleANDCrossContainer}>
                <p className={style.title}>{title}</p>
                {closable && (
                    <div className={style.close} onClick={() => setIsOpen((prevIsopen) => !prevIsopen)}>
                        X
                    </div>
                )}
            </div>

            {typeof text === "string" ? (
                <p className={style.text}>{text}</p>
            ) : typeof text === "function" ? (
                text()
            ) : (
                text
            )}
        </div>
    );
};
