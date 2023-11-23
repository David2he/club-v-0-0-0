import { useState } from "react";
import { handleGetData } from "../../../services/api";
import { useStorageServices } from "../../../services/storages/useStorageServices";
import style from "./RefferalCodeInput.module.scss";

export const RefferalCodeInput = ({ value }: any) => {
    const { getStorageItem } = useStorageServices();
    const [referralCode, setReferralCode] = useState("");

    const getRefferalCode = async () => {
        const token = await getStorageItem("token");
        const data = await handleGetData("http://localhost:8000/api/user/referrals", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setReferralCode(data);
    };

    getRefferalCode();
    return (
        <div className={style.test}>
            <input type="text" value={referralCode} readOnly />
            <div className={style.copyInput}></div>
        </div>
    );
};
