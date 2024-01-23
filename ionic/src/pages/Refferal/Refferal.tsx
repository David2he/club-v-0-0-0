import { IonPage } from "@ionic/react";
import { Header } from "lodge-lib/components/Blocks/Header/Header";
import { HamburguerMenue } from "lodge-lib/components/Blocks/HamburgerMenue/HamburgerMenue";
import { BlockText } from "lodge-lib/components/Elements/BlockText/BlockText";
import "./Refferal.scss";
import { RefferalCodeInput } from "../../components/Elements/RefferalCodeInput/RefferalCodeInput";
import { useClearToken } from "../../utils/useClearToken/useClearToken";

const Refferal: React.FC = () => {
    const getRefferalCode = (): JSX.Element => {
        return (
            <>
                <RefferalCodeInput value={123456} />
            </>
        );
    };
    return (
        <IonPage id='main-content' className='containerMainAPP'>
            <div className='content'>
                <HamburguerMenue useClearToken={useClearToken}/>
                <Header />
                <div>
                    <BlockText title='Code Parrainage ' text={getRefferalCode} closable={false} expandable={false} />
                    {/* <BlockText
                        title="Code Parrainage "
                        text={getRefferalCode}
                        closable={false}
                        expandable={false}
                    />
                    <BlockText
                        title="Code Parrainage "
                        text={getRefferalCode}
                        closable={false}
                        expandable={false}
                    /> */}
                </div>
            </div>
        </IonPage>
    );
};

export default Refferal;
