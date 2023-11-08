import { IonPage } from "@ionic/react";
import { Header } from "../../components/Blocks/Header/Header";
import { useParams } from "react-router-dom";
import { HamburguerMenue } from "../../components/Blocks/HamburgerMenue/HamburgerMenue";
import { BlockText } from "../../components/Elements/BlockText/BlockText";
import { ButtonSubmit } from "../../components/Elements/Button/ButtonSubmit";
import data from "../../utils/dataTest/data.json";
import { useStorageServices } from "../../services/storages/useStorageServices";
import { useEffect, useState } from "react";
import style from "./Brand.module.scss";

const Brand: React.FC = () => {
    const { getStorageItem } = useStorageServices();
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const { id } = useParams<{ id: string }>();
    const vendorData = data[id as keyof typeof data];

    useEffect(() => {
        const fetchEmail = async () => {
            const email = await getStorageItem("email");
            setUserEmail(email);
        };
        fetchEmail();
    }, [getStorageItem]);

    const handleActivateVIP = () => {
        console.log("L'email de l'utilisateur est:", userEmail);
        // Ici, vous pouvez définir ce que vous voulez faire quand le bouton est cliqué
        // et vous avez accès à l'email de l'utilisateur
    };
    return (
        <IonPage id="main-content" className="containerMainAPP">
            <div className="content">
                <HamburguerMenue />

                <Header />
                <div className={style.bannerImgContainer}>
                    <img src={`./assets/Brand/${id}/bannerImg.png`} alt="banner" />
                </div>

                <div className={style.brandMainInfoContainer}>
                    <img
                        className={style.logoImgContainer}
                        src={`./assets/Brand/${id}/logo.png`}
                        alt="logo"
                    />
                    <h1 className={style.brandName}>{vendorData?.vendorName}</h1>
                    <BlockText
                        title="Description"
                        text={vendorData.vendorDescription}
                        closable={false}
                        expandable={true}
                    />
                    <BlockText
                        title="Description"
                        text={vendorData.vendorDescription}
                        closable={false}
                        expandable={true}
                    />
                    <BlockText
                        title="Description"
                        text={vendorData.vendorDescription}
                        closable={false}
                        expandable={true}
                    />
                    <BlockText
                        title="Description"
                        text={vendorData.vendorDescription}
                        closable={false}
                        expandable={true}
                    />
                </div>
                <div className={style.activeBrandButtonContainer}>
                    <div className={style.test}>
                        <ButtonSubmit
                            text="Activer mon pass VIP"
                            size="large"
                            callFunctionOnClick={handleActivateVIP}
                        />
                    </div>
                </div>
            </div>
        </IonPage>
    );
};
export default Brand;
