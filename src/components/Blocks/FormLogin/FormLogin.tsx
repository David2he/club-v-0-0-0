import React, { useState, FormEvent } from "react";
import { useAuth } from "../../../services/contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { useStorageServices } from "../../../services/storages/useStorageServices";
import { Input } from "../../Elements/Input/Input";
import { handlePostData } from "../../../services/api";
import { LoginFormDataToSendType } from "../../../types/Types";
import style from "./FormLogin.module.scss";

export const FormLogin = () => {
    const { setStorageItem, getStorageItem } = useStorageServices();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const auth = useAuth();

    if (!auth) {
        throw new Error("Auth context is undefined");
    }

    const { login } = auth;
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const dataToSend: LoginFormDataToSendType = {
                username: formData.email,
                password: formData.password,
            };

            const response = await handlePostData("http://localhost:8000/api/login", {
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSend),
            });

            if (response.status === 200) {
                await setStorageItem("token", response.data.token);
                await setStorageItem("email", formData.email);

                login();
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi des données :", error);
        }
    };

    return (
        <>
            <form id="container" className={style.formContainer} onSubmit={handleSubmit}>
                <div className={style.inputContainer}>
                    <Input
                        iconURL={"assets/iconInput/email.svg"}
                        altIcon={"iconMail"}
                        placeholder={"Mail"}
                        labelType={"email"}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="classic"
                    />
                    <Input
                        iconURL={"assets/iconInput/password.svg"}
                        altIcon={"iconLock"}
                        placeholder={"Mot de passe"}
                        labelType={"password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        type="classic"
                    />
                </div>
                <a href="#" className={style.link}>
                    mot de passe oublié ?
                </a>
                <input type="submit" value="Se connecter" className={style.submitButton}></input>
            </form>
        </>
    );
};
