import { IonPage } from "@ionic/react";
import { Header } from "../../components/Blocks/Header/Header";
import { HamburguerMenue } from "../../components/Blocks/HamburgerMenue/HamburgerMenue";
import { useState } from "react";
import { Input } from "../../components/Elements/Input/Input";
import { BlockText } from "../../components/Elements/BlockText/BlockText";
import { Search } from "../../components/Blocks/Search/Search";
import { DisplayItemsHomePageMenber } from "../../components/Blocks/DisplayItemsHomePageMenber/DisplayItemsHomePageMenber";
import "./HomePageMenber.scss";

const HomePageMenber: React.FC = () => {
    const parraingageJSX = (): JSX.Element => {
        return (
            <div>
                <Input placeholder='email de la persone a parrainer' name='email' type='search' labelType='mail' />
            </div>
        );
    };
    return (
        <IonPage id='main-content' className='containerMainAPP'>
            <div className='content'>
                <HamburguerMenue />
                <Header />
                <div>
                    <BlockText title='Parrainer quelqu’un' text={parraingageJSX} closable={false} expandable={true} />
                    <BlockText
                        title='Comment ca marche '
                        text='Vous disposez d’un ensemble de marque avec des réductions imbattable Il vous suffit de cliquer sur l’une d’elle, d’ajouter ou de créer un compte déjà existant pour la marque sélectionnée puis d’activer le lien entre la promotion et votre compte sur la boutique'
                        closable={false}
                        expandable={true}
                    />
                    <Search />
                    <DisplayItemsHomePageMenber />
                </div>
            </div>
        </IonPage>
    );
};

export default HomePageMenber;
