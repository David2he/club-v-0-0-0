import { useState, useRef } from "react";
import style from "./RegisterForm.module.scss";
import { Input } from "../../Elements/Input/Input";
import { ButtonSubmit } from "../../Elements/Button/ButtonSubmit";
import { RegisterFormDataStateProps, RegisterFormDataToSendType, toastType } from "../../../types/Types";
import { Toast } from "../Toast/Toast";
// import { handlePostData } from "../../../services/api";
// import { ParrainageCodeForm } from "../../Elements/ParrainageCodeForm/ParrainageCodeForm";

export const RegisterForm = ({ handlePostData }: any) => {
    const [step, setStep] = useState<number>(0);
    const currentUrl = new URL(window.location.href);
    const [showToast, setshowToast] = useState<toastType>({ type: "", message: "", key: 0 });
    const [formData, setFormData] = useState<RegisterFormDataStateProps>({
        email: "",
        password: "",
        fName: "",
        name: "",
        phone: "",
        parrainageCode: currentUrl.searchParams.get("code") ?? "",
    });

    const postRegisterForm = async () => {
        try {
            const dataToSend: RegisterFormDataToSendType = {
                email: formData.email,
                password: formData.password,
                userInfo: {
                    firstName: formData.fName,
                    lastName: formData.name,
                    birthday: "2023-08-24T08:41:26.978Z",
                    phoneNumber: formData.phone,
                },
                nonce: formData.parrainageCode ? formData.parrainageCode : "",
            };

            const response = await handlePostData("http://51.15.233.181:8000/api/users", {
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSend),
            });
            console.log(response.status);
            if (response.status === 201) {
                console.log(response.status);
                setshowToast({
                    type: "succes",
                    message: "Création de compte réussi",
                    key: Date.now(),
                });
            }
        } catch (error) {
            setshowToast({
                type: "error",
                message: "Erreur lors de l'enregistrement : " + error,
                key: Date.now(),
            });
        }
    };

    const handleFormRegister = () => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        const phoneRegex = /^(\+33|0)[1-9](\d{2}){4}$/;
        if (step === 0) {
            if (!emailRegex.test(formData.email)) {
                setshowToast({
                    type: "error",
                    message: "L'adresse e-mail n'est pas valide",
                    key: Date.now(),
                });
                return;
            }

            if (formData.password.length < 6) {
                setshowToast({
                    type: "error",
                    message: "Le mot de passe doit contenir 6 caractères",
                    key: Date.now(),
                });
                return;
            }
        }

        if (step >= 1) {
            if (formData.fName.length < 2 || formData.name.length < 2) {
                setshowToast({
                    type: "error",
                    message: "Le nom ou le prénom doit contenir au moins 1 caractères",
                    key: Date.now(),
                });
                return;
            }
            if (!phoneRegex.test(formData.phone)) {
                setshowToast({
                    type: "error",
                    message: "Le numéro de téléphone n'est pas valide",
                    key: Date.now(),
                });
                return;
            }
        }

        if (step === 2) {
            postRegisterForm();
        }
        if (step < 2) {
            console.log(formData);
            setStep((prevState) => prevState + 1);
        } else {
            setStep(2);
        }
    };

    const handleCorrectCheckForm = (value: string, correctCat: string) => {
        if (correctCat === "type") {
            if (value.includes("Password") || value.includes("password")) {
                return "password";
            } else {
                return value;
            }
        }
        if (correctCat === "icon") {
            if (value.includes("Password") || value.includes("password")) {
                return "password";
            } else if (value.includes("name") || value.includes("fName")) {
                return "identity";
            } else {
                return value;
            }
        }
    };

    // STEP 0
    // const handleFormParrainageCode = () => {
    //     const getCode = (code?: string) => {
    //         if (!code) return;
    //         setFormData((prevState) => ({
    //             ...prevState,
    //             parrainageCode: code,
    //         }));
    //     };
    //     return <ParrainageCodeForm loginType='register' onCodeFetch={getCode} />;
    // };

    // STEP 1
    const emailPasswordForm = () => {
        return (
            <>
                <Input
                    iconURL={"assets/iconInput/email.svg"}
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
                    type='classic'
                />
                <Input
                    iconURL={"assets/iconInput/password.svg"}
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
                    type='classic'
                />
            </>
        );
    };

    // STEP 2
    const nameForm = () => {
        return (
            <>
                <Input
                    iconURL={"assets/iconInput/identity.svg"}
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
                    type='classic'
                />
                <Input
                    iconURL={"assets/iconInput/identity.svg"}
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
                    type='classic'
                />
                <Input
                    iconURL={"assets/iconInput/phone.svg"}
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
                    type='classic'
                />
            </>
        );
    };

    // STEP 3
    const lastCheckForm = () => {
        return (
            <>
                {Object.entries(formData).map(([key, value]) => (
                    <div key={key}>
                        <Input
                            iconURL={`assets/iconInput/${handleCorrectCheckForm(key, "icon")}.svg`}
                            altIcon={"iconLock"}
                            placeholder={`Enter your ${key}`}
                            labelType={handleCorrectCheckForm(key, "type")}
                            name={key}
                            value={value ?? ""}
                            onChange={(e) =>
                                setFormData((prevState) => ({
                                    ...prevState,
                                    [e.target.name]: e.target.value,
                                }))
                            }
                            type='classic'
                        />
                    </div>
                ))}
            </>
        );
    };
    let renderedForm;
    if (step === 0) {
        renderedForm = emailPasswordForm();
    } else if (step === 1) {
        renderedForm = nameForm();
    } else if (step === 2) {
        renderedForm = lastCheckForm();
    }
    return (
        <div className={style.formRegisterContainer}>
            <div className={style.inputContainer}>
                <div className={style.loadingBar}>
                    <span style={{ transform: `scaleX(${step * 33.33}%)` }}></span>
                </div>
                {renderedForm}
            </div>
            <ButtonSubmit text={"suivant"} callFunctionOnClick={handleFormRegister} />
            <div className={style.toastContainer}>
                <Toast typeLog={showToast.type} message={showToast.message} key={showToast.key} />
            </div>
        </div>
    );
};
