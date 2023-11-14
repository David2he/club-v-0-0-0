import style from "./HamburgerMenue.module.scss";
import { useState } from "react";
import { useHistory } from "react-router";
export const HamburguerMenue = () => {
    const history = useHistory();
    const [opnMenu, setOpnMenu] = useState(false);
    const navigate = (where: string) => {
        history.push(where);
    };
    return (
        <div className={style.container}>
            <div className={style.hamburgerIcon} onClick={() => setOpnMenu((prevOpnMenu) => !prevOpnMenu)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`${style.containerHamburger} ${opnMenu ? style.openMenu : style.closeMenu}`}>
                <p>Mon compte</p>
                <p onClick={() => navigate("/Refferral")}>Parrainer</p>
                <p>Contact</p>
            </div>
        </div>
    );
};
