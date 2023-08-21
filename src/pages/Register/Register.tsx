import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { Header } from "../../components/Blocks/Header/Header";
import "./Register.scss";
const Register: React.FC = () => {
  return (
    <IonPage id="main-content" className="container">
      <div className="headerContainer">
        <Header />
        <p>register</p>
      </div>
    </IonPage>
  );
};

export default Register;
