import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { Header } from "../../components/Blocks/Header/Header";
import { ParrainageCodeForm } from "../../components/Elements/ParrainageCodeForm/ParrainageCodeFormREGISTER/ParrainageCodeForm";
import "./Register.scss";
const Register: React.FC = () => {
  return (
    <IonPage id="main-content" className="container">
      <div className="headerContainer">
        <Header />
      </div>
      <div className="content">
        <ParrainageCodeForm />
      </div>
    </IonPage>
  );
};

export default Register;
