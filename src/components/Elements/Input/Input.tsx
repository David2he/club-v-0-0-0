import style from "./Input.module.scss";
import { InputProps } from "../../../types/ComponentsElementsTypes";
export const Input = ({ iconURL, altIcon, placeholder, labelType }: InputProps) => {
  return (
    <>
      <div className={style.inputContainer}>
        <label htmlFor={labelType}>
          <img src={iconURL} alt={altIcon} className={style.icon} />
        </label>
        <input className={style.input} type={labelType} placeholder={placeholder} />
      </div>
    </>
  );
};
