import { IonPage } from "@ionic/react";
import { Header } from "lodge-lib/components/Blocks/Header/Header";
import { ParrainageCodeForm } from "lodge-lib/components/Elements/ParrainageCodeForm/ParrainageCodeForm";
import { RegisterForm } from "lodge-lib/components/Blocks/RegisterForm/RegisterForm";
import { handlePostData } from "../../services/api";

const RegisterFormContainer: React.FC = () => {
    return (
        <IonPage id='main-content' className='container'>
            <div className='headerRegister'>
                <Header />
            </div>
            <div className='content'>
                <RegisterForm handlePostData={handlePostData}/>
            </div>
        </IonPage>
    );
};

export default RegisterFormContainer;
