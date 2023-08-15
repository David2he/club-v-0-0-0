import style from "./Input.module.scss";
import { InputProps } from "../../../types/ComponentsElementsTypes";

export const Input = ({
  iconURL,
  altIcon,
  placeholder,
  labelType,
  name,
  value,
  onChange,
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <>
      <div className={style.inputHandler}>
        <label htmlFor={labelType}>
          <img src={iconURL} alt={altIcon} />
        </label>
        <input
          className={style.input}
          type={labelType}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};
