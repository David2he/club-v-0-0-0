import { useState } from "react";
import style from "./FormRegister.module.scss";
import { Input } from "../../Elements/Input/Input";
import { ButtonSubmit } from "../../Elements/Button/ButtonSubmit";
import { registerFormDataStateProps } from "../../../types/ComponentsElementsTypes";
export const FormRegister = () => {
    const [step, setStep] = useState<number>(0);
    const [formData, setFormData] = useState<registerFormDataStateProps>({
        email: "",
        password: "",
        confirmPassword: "",
        fName: "",
        name: "",
        phone: "",
    });
    const handleFormRegister = () => {
        console.log(step);
        console.log(formData);
        setStep((prevState) => prevState + 1);
    };

    const handleCorrectCheckForm = (value: string, correctCat: string) => {
        if (correctCat === "type") {
            // Utilisez === pour la comparaison
            if (value.includes("Password") || value.includes("password")) {
                console.log("allez");
                return "password";
            } else {
                return value;
            }
        }
        if (correctCat === "icon") {
            if (value.includes("password")) {
                return "password";
            } else {
                return value;
            }
        }
    };
    // STEP 0
    const emailPasswordForm = () => {
        return (
            <>
                <Input
                    iconURL={"assets/inputs-icon/email.svg"}
                    altIcon={"iconMail"}
                    placeholder={"Mail"}
                    labelType={"email"}
                    name='email'
                    value={formData.email}
                    onChange={(e) =>
                        setFormData((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))
                    }
                />
                <Input
                    iconURL={"assets/inputs-icon/password.svg"}
                    altIcon={"iconLock"}
                    placeholder={"Mot de passe"}
                    labelType={"password"}
                    name='password'
                    value={formData.password}
                    onChange={(e) =>
                        setFormData((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))
                    }
                />
                <Input
                    iconURL={"assets/inputs-icon/password.svg"}
                    altIcon={"iconLock"}
                    placeholder={"Confirmer le mot de passe"}
                    labelType={"password"}
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    onChange={(e) =>
                        setFormData((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))
                    }
                />
            </>
        );
    };

    // STEP 1
    const nameForm = () => {
        return (
            <>
                <Input
                    iconURL={"assets/inputs-icon/identity.svg"}
                    altIcon={"iconMail"}
                    placeholder={"Nom"}
                    labelType={"fName"}
                    name='fName'
                    value={formData.fName}
                    onChange={(e) =>
                        setFormData((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))
                    }
                />
                <Input
                    iconURL={"assets/inputs-icon/identity.svg"}
                    altIcon={"iconLock"}
                    placeholder={"Prénom"}
                    labelType={"name"}
                    name='name'
                    value={formData.name}
                    onChange={(e) =>
                        setFormData((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))
                    }
                />
            </>
        );
    };

    const phoneForm = () => {
        return (
            <>
                <Input
                    iconURL={"assets/inputs-icon/phone.svg"}
                    altIcon={"iconLock"}
                    placeholder={"+33 6 43 ......"}
                    labelType={"phone"}
                    name='phone'
                    value={formData.phone}
                    onChange={(e) =>
                        setFormData((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))
                    }
                />
            </>
        );
    };

    const checkForm = () => {
        return (
            <>
                {Object.entries(formData).map(([key, value]) => (
                    <>
                        <Input
                            key={key}
                            iconURL={`assets/inputs-icon/${handleCorrectCheckForm(
                                key,
                                "icon"
                            )}.svg`}
                            altIcon={"iconLock"}
                            placeholder={`Enter your ${key}`}
                            labelType={handleCorrectCheckForm(key, "type")}
                            name={key}
                            value={value}
                            onChange={(e) =>
                                setFormData((prevState) => ({
                                    ...prevState,
                                    [e.target.name]: e.target.value,
                                }))
                            }
                        />
                        <p>{handleCorrectCheckForm(key, "type")}</p>
                        <p>key est égale a {key}</p>
                    </>
                ))}
            </>
        );
    };

    return (
        <div className={style.formRegisterContainer}>
            <div className={style.inputContainer}>
                {step === 0
                    ? emailPasswordForm()
                    : step === 1
                    ? nameForm()
                    : step === 2
                    ? phoneForm()
                    : step === 3
                    ? checkForm()
                    : null}
            </div>
            <ButtonSubmit
                text={"suivant"}
                callFunctionOnClick={handleFormRegister}
            />
        </div>
    );
};
