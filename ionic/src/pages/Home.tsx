import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { FormLogin } from "lodge-lib/components/Blocks/FormLogin/FormLogin";
import { Header } from "lodge-lib/components/Blocks/Header/Header";
import { ParrainageCodeLoginChoice } from "lodge-lib/components/Blocks/ParrainageCodeLoginChoice/ParrainageCodeLoginChoice";
import "./Home.scss";

import React, { useState, FormEvent } from "react";
import { useAuth } from "../services/contexts/AuthContext";
import { useStorageServices } from "../services/storages/useStorageServices";
import { handlePostData } from "../services/api";
import { useCodeParrainageHandler } from "../utils/CheckCodeParrainage/useCodeParrainageHandler";

const Home: React.FC = () => {

    return (
        <IonPage id="main-content" className="container">
            <div className="headerContainer">
                <Header />
            </div>
            <FormLogin useAuth={useAuth} useStorageServices={useStorageServices} handlePostData={handlePostData} />
            <ParrainageCodeLoginChoice useCodeParrainageHandler={useCodeParrainageHandler}/>
        </IonPage>
    );
};

export default Home;
