import { IonPage } from "@ionic/react";
import { Header } from "lodge-lib/components/Blocks/Header/Header";
import { ParrainageCodeForm } from "lodge-lib/components/Elements/ParrainageCodeForm/ParrainageCodeForm";
import { useCodeParrainageHandler } from "../../utils/CheckCodeParrainage/useCodeParrainageHandler";

const Register: React.FC = () => {
    return (
        <IonPage id='main-content' className='container'>
            <div className='headerContainer'>
                <Header />
            </div>
            <div className='content'>
                <ParrainageCodeForm loginType='register' useCodeParrainageHandler={useCodeParrainageHandler} />
            </div>
        </IonPage>
    );
};

export default Register;
