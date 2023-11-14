import { IonPage } from "@ionic/react";
import { Header } from "../../components/Blocks/Header/Header";
import { useParams } from "react-router-dom";
import { HamburguerMenue } from "../../components/Blocks/HamburgerMenue/HamburgerMenue";
import { BlockText } from "../../components/Elements/BlockText/BlockText";
import { ButtonSubmit } from "../../components/Elements/Button/ButtonSubmit";
import data from "../../utils/dataTest/data.json";
import { useStorageServices } from "../../services/storages/useStorageServices";
import { useEffect, useState } from "react";
import { handlePostData } from "../../services/api";
import style from "./Brand.module.scss";

const Brand: React.FC = () => {
    const { getStorageItem } = useStorageServices();
    const [userInfo, setUserInfo] = useState<{ email: string; token: string } | null>(null);
    const { id } = useParams<{ id: string }>();
    const vendorData = data[id as keyof typeof data];

    const handleActivateVIP = async () => {
        const [email, token] = await Promise.all([
            getStorageItem("email"),
            getStorageItem("token"),
        ]);
        setUserInfo({ email, token });
        console.log(userInfo?.email);
        try {
            const response = await handlePostData("http://localhost:8000/api/vendor/1/activate", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userInfo?.token}`,
                },
                body: JSON.stringify({ username: userInfo?.email }),
            });
            if (response.status === 200) {
                console.log("API call success");
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi des données :", error);
        }
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
