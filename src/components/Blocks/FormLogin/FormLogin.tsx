import style from "./FormLogin.module.scss";
import buttonStyle from "../../../components/Elements/Button/Button.module.scss";
import { Input } from "../../Elements/Input/Input";
import { useState } from "react";

interface ContainerProps {}

export const FormLogin: React.FC<ContainerProps> = () => {
  const [data, setData] = useState();
  return (
    <>
      <form id="container" className={style.formContainer}>
        <div className={style.inputContainer}>
          <Input
            iconURL={"assets/inputs-icon/mail.svg"}
            altIcon={"iconMail"}
            placeholder={"Mail"}
            labelType={"email"}
          />
          <Input
            iconURL={"assets/inputs-icon/password.svg"}
            altIcon={"iconLock"}
            placeholder={"Mot de passe"}
            labelType={"password"}
          />
        </div>
        <a href="#" className={style.link}>
          mot de passe oublié ?
        </a>
        <input type="submit" value="Se connecter" className={buttonStyle.button}></input>
      </form>
    </>
  );
};
