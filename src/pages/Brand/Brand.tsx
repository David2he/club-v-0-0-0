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
                    Authorization: `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTk5NjIyOTcsImV4cCI6MTY5OTk2NTg5Nywicm9sZXMiOlsiUk9MRV9VU0VSIiwiUk9MRV9NRU1CRVJfSU5BQ1RJVkUiXSwiZW1haWwiOiJ0ZXN0NDVAZ21haWwuY29tIn0.QVQu2lxSfhddAQU2miXYcyutIRLifsyFFBjEQI2emPFL74EWLYe0wYU8aCDF4Z2_e8qqIFg4qwQiVrXZ5svP0UWMGHQ5cn2rjvc2eK5cYtB3nIacNobLfkcl49aQt0nbjCdaFzDfHsIo8wSxwSzIWbUcT9MC1hzScQ3xZo4sPWqESdR8zdF1NDnLFV-fPsZuM7eJu3vmpTyANPqaW8LlK_W6CYJaRY4vcavcHhn4Eslv_torhJYADIqGMCN9O1VyEx5tJ08kmlbbUgDHDtSHyj9-0dBVHpJ5w5ORV-tZQr4gaS0o56CaWmIbide3u0fqXZVfzNyqRkWKI3qlADtiRQ"}`,
                },
                body: JSON.stringify({ username: "saladeTomateOignon@gmail.com" }),
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
