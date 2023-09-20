import { useEffect, useRef, useState } from "react";
import style from "./FormRegister.module.scss";
import { Input } from "../../Elements/Input/Input";
import { ButtonSubmit } from "../../Elements/Button/ButtonSubmit";
import { registerFormDataStateProps } from "../../../types/ComponentsElementsTypes";
import { Toast } from "../Toast/Toast";
export const FormRegister = () => {
    const [step, setStep] = useState<number>(0);

    const [showToast, setShowToast] = useState<Array<[string, string]>>([]);
    const [formData, setFormData] = useState<registerFormDataStateProps>({
        email: "",
        password: "",
        confirmPassword: "",
        fName: "",
        name: "",
        phone: "",
    });

    const handleFormRegister = () => {
        if (formData.password.length < 6) {
            return setShowToast((prevErrors: Array<[string, string]>) => [
                ...prevErrors,
                [
                    "error",
                    "le mot de passe doit au moins contenir 6 caractères",
                ],
            ]);
        }
        if (formData.password !== formData.confirmPassword) {
            return setShowToast((prevErrors: Array<[string, string]>) => [
                ...prevErrors,
                [
                    "error",
                    "les mot de passe ne sont pas identiques, veuillez réessayer",
                ],
            ]);
        } else {
            setStep((prevState) => prevState + 1);
        }
    };

    const handleCorrectCheckForm = (value: string, correctCat: string) => {
        if (correctCat === "type") {
            if (value.includes("Password") || value.includes("password")) {
                console.log("allez");
                return "password";
            } else {
                return value;
            }
        }
        if (correctCat === "icon") {
            if (value.includes("Password") || value.includes("password")) {
                console.log("Value:", value, "CorrectCat:", correctCat);
                console.log("Nice");
                return "password";
            } else if (value.includes("name") || value.includes("fName")) {
                return "identity";
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
                    name="email"
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
                    name="password"
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
                    name="confirmPassword"
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
                    name="fName"
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
                    name="name"
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

    // STEP 2
    const phoneForm = () => {
        return (
            <>
                <Input
                    iconURL={"assets/inputs-icon/phone.svg"}
                    altIcon={"iconLock"}
                    placeholder={"+33 6 43 ......"}
                    labelType={"phone"}
                    name="phone"
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

    // STEP 3
    const lastCheckForm = () => {
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
                    </>
                ))}
            </>
        );
    };

    return (
        <div className={style.formRegisterContainer}>
            <div className={style.inputContainer}>
                <div className={style.loadingBar}>
                    <span style={{ transform: `scaleX(${step * 33}%)` }}></span>
                </div>
                {step === 0
                    ? emailPasswordForm()
                    : step === 1
                    ? nameForm()
                    : step === 2
                    ? phoneForm()
                    : step === 3
                    ? lastCheckForm()
                    : null}
            </div>
            <ButtonSubmit
                text={"suivant"}
                callFunctionOnClick={handleFormRegister}
            />
            <div className={style.toastContainer}>
                {showToast.map(([toastType, toastMessage], index) => (
                    <Toast
                        key={index}
                        typeLog={toastType}
                        message={toastMessage}
                    />
                ))}
            </div>
        </div>
    );
};
