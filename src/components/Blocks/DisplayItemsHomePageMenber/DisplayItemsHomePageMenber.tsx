import style from "./DisplayItemsHomePageMenber.module.scss";
import { BlockText } from "../../Elements/BlockText/BlockText";
export const DisplayItemsHomePageMenber = () => {
    const displayThemAll = (): JSX.Element => {
        return (
            <div className={style.contentContainer}>
                {Array.from(Array(35).keys()).map((item, index) => (
                    <div key={index} className={style.eachCells}>
                        <p>test</p>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div>
            <BlockText title="Nos marques" text={displayThemAll} closable={false} />
        </div>
    );
};
