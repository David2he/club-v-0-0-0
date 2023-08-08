import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { FormLogin } from "../components/Blocks/FormLogin/FormLogin";
import { Header } from "../components/Blocks/Header/Header";
import "./Home.scss";


const Home: React.FC = () => {
  return (
    <IonPage id="main-content" className='container'>
      <Header />
      <FormLogin />
 
    </IonPage>
  );
};

export default Home;
