import { IonPage } from "@ionic/react";
import { Header } from "../../components/Blocks/Header/Header";
import { ParrainageCodeForm } from "../../components/Elements/ParrainageCodeForm/ParrainageCodeForm";
import { FormRegister } from "../../components/Blocks/FormRegister/FormRegister";

import "./RegisterForm.scss";
const RegisterForm: React.FC = () => {
    return (
        <IonPage id='main-content' className='container'>
            <div className='headerContainer'>
                <Header />
            </div>
            <div className='content'>
                <FormRegister />
            </div>
        </IonPage>
    );
};

export default RegisterForm;
