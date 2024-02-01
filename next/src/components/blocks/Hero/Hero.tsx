import { FormLogin } from "lodge-lib/components/Blocks/FormLogin/FormLogin";
import style from "./Hero.module.scss";

export const Hero = () => {
    return (
        <div className={style.heroContainer}>
            <h1 className='title_01'>Découvrez l éxpérience Club</h1>
            <FormLogin />
        </div>
    );
};
