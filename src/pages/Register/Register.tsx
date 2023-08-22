import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { Header } from "../../components/Blocks/Header/Header";
import { ParraingageCodeForm } from "../../components/Elements/ParraingageCodeForm/ParraingageCodeForm";
import "./Register.scss";
const Register: React.FC = () => {
  return (
    <IonPage id="main-content" className="container">
      <div className="headerContainer">
        <Header />
        <ParraingageCodeForm />
      </div>
    </IonPage>
  );
};

export default Register;
