import style from "./Header.module.scss";
export const Header = () => {
    return (
        <header className={style.header}>
            <img src={"assets/Logo/logo.svg"} alt={"icon"} />
        </header>
    );
};
