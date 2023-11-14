import { useState } from "react";
export const RefferalCodeInput = ({ value }: any) => {
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(value);
        } catch (err) {
            console.error("Erreur lors de la copie : ", err);
        }
    };
    return (
        <div onClick={copyToClipboard} style={{ cursor: "pointer" }}>
            <input type='text' value={value} readOnly />
        </div>
    );
};
