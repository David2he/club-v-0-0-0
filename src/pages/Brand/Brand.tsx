import { IonPage } from "@ionic/react";
import { Header } from "../../components/Blocks/Header/Header";
const Brand: React.FC = () => {
    return (
        <IonPage id="main-content">
            <>
                <Header />
                <div className="container"></div>
            </>
        </IonPage>
    );
};
export default Brand;
