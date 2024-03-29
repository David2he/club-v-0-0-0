import { useState } from "react";
import { IonPage } from "@ionic/react";
import { Header } from "lodge-lib/components/Blocks/Header/Header";
import { HamburguerMenue } from "lodge-lib/components/Blocks/HamburgerMenue/HamburgerMenue";
import { RefferalCodeInput } from "../../components/Elements/RefferalCodeInput/RefferalCodeInput";
import { Input } from "lodge-lib/components/Elements/Input/Input";
import { RegisterFormDataInAccountStateProps } from "lodge-lib/types/Types";
import style from "./Account.module.scss";
import { useClearToken } from "../../utils/useClearToken/useClearToken";

const Account: React.FC = () => {
    const [formData, setFormData] = useState<RegisterFormDataInAccountStateProps>({
        email: "",
        password: "",
        fName: "",
        name: "",
        phone: "",
    });
    return (
        <IonPage id='main-content' className='containerMainAPP'>
            <div className='content'>
                <HamburguerMenue  useClearToken={useClearToken}/>
                <Header />
                <div className={style.accountContainer}>
                    <div className={style.inputContainer}>
                        {/* <Input
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
                        /> */}
                        {/* <Input
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
                        /> */}
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
                    </div>
                    <p>Pour changer d'avantage d'information, rendez vous sur notre site</p>
                </div>
            </div>
        </IonPage>
    );
};

export default Account;
