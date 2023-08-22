import React, { useState, FormEvent } from "react";
import { Input } from "../../Elements/Input/Input";
import { post } from "../../../services/api";
import style from "./FormLogin.module.scss";

export const FormLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [responseData, setResponseData] = useState({ email: "", password: "" });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(formData);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await post("https://jsonplaceholder.typicode.com/posts", {
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
      console.log("Données envoyées !")
      setResponseData(prevData => ({
        ...prevData,
        email: formData.email,
        password:formData.password,
      }));
      console.log(response.body[1])
      console.log("Données envoyées !")
    } catch (error) {
      console.error("Erreur lors de l'envoi des données :", error);
    }
  };

  return (
    <>
      <form id="container" className={style.formContainer} onSubmit={handleSubmit}>
        <div className={style.inputContainer}>
          <Input
            iconURL={"assets/inputs-icon/mail.svg"}
            altIcon={"iconMail"}
            placeholder={"Mail"}
            labelType={"email"}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            iconURL={"assets/inputs-icon/password.svg"}
            altIcon={"iconLock"}
            placeholder={"Mot de passe"}
            labelType={"password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <a href="#" className={style.link}>
          mot de passe oublié ?
        </a>
        {responseData.email}
    
        <input type="submit" value="Se connecter" className={style.submitButton}></input>
      </form>
    </>
  );
};
