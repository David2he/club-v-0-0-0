import { IonPage } from "@ionic/react";
import style from "./SubscriptionPlanList.module.scss";
import { BlockText } from "../../Elements/BlockText/BlockText";

const SubscriptionPlanList: React.FC = () => {
    const SubscriptionRenderCore = (arg: string): JSX.Element => {
        return (
            <div>
                <p>{arg}</p>
            </div>
        );
    };
    return (
        <IonPage id="main-content" className="container">
            <BlockText
                title="Forfait"
                text={() => SubscriptionRenderCore("test")}
                closable={false}
                expandable={true}
            />
        </IonPage>
    );
};

export default SubscriptionPlanList;
