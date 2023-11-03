import style from "./HamburgerMenue.module.scss";
import { useState } from "react";
export const HamburguerMenue = () => {
    const [opnMenu, setOpnMenu] = useState(false);
    return (
        <div className={style.container}>
            <div
                className={style.hamburgerIcon}
                onClick={() => setOpnMenu((prevOpnMenu) => !prevOpnMenu)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div
                className={`${style.containerHamburger} ${
                    opnMenu ? style.openMenu : style.closeMenu
                }`}
            >
                <p>Mon compte</p>
                <p>Parrainer</p>
                <p>Contact</p>
            </div>
        </div>
    );
};
