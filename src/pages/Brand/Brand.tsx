import { IonPage } from "@ionic/react";
import { Header } from "../../components/Blocks/Header/Header";
import { useParams } from "react-router-dom";
import { HamburguerMenue } from "../../components/Blocks/HamburgerMenue/HamburgerMenue";
import { BlockText } from "../../components/Elements/BlockText/BlockText";
import { ButtonSubmit } from "../../components/Elements/Button/ButtonSubmit";
import data from "../../utils/dataTest/data.json";
import style from "./Brand.module.scss";

const Brand: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const vendorData = data[id as keyof typeof data];
    return (
        <IonPage id='main-content' className='containerMainAPP'>
            <div className='content'>
                <HamburguerMenue />

                <Header />
                <div className={style.bannerImgContainer}>
                    <img src={`./assets/Brand/${id}/bannerImg.png`} alt='banner' />
                </div>

                <div className={style.brandMainInfoContainer}>
                    <img className={style.logoImgContainer} src={`./assets/Brand/${id}/logo.png`} alt='logo' />
                    <h1 className={style.brandName}>{vendorData?.vendorName}</h1>
                    <BlockText
                        title='Description'
                        text={vendorData.vendorDescription}
                        closable={false}
                        expandable={true}
                    />
                    <BlockText
                        title='Description'
                        text={vendorData.vendorDescription}
                        closable={false}
                        expandable={true}
                    />
                    <BlockText
                        title='Description'
                        text={vendorData.vendorDescription}
                        closable={false}
                        expandable={true}
                    />
                    <BlockText
                        title='Description'
                        text={vendorData.vendorDescription}
                        closable={false}
                        expandable={true}
                    />
                </div>
                <div className={style.activeBrandButtonContainer}>
                    <div className={style.test}>
                        <ButtonSubmit text='Activer mon pass VIP' size='large' />
                    </div>
                </div>
            </div>
        </IonPage>
    );
};
export default Brand;
