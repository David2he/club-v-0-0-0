import { useState } from "react";
import { handlePostData } from "../services/api";

export const useCheckCodeParrainage = async (code: string, setShowToast: any) => {
    // const currentUrl = new URL(window.location.href);

    try {
        const response = await handlePostData("https://jsonplaceholder.typicode.com/posts", {
            body: JSON.stringify({
                code: code,
            }),
        });

        //TODO ADD CALL API
        /// WHEN API IS READY
        // if (response.id == 101) {
        //   setIsCodeValid(true);
        //   window.location.href = currentUrl.origin + currentUrl.pathname;
        // } else {
        //   setIsCodeValid(false);
        //   setError("Le code de parrainage n'est pas valide.");
        // }

        /// TODO REMOVE THIS
        if (code === "123456") {
            setShowToast({
                type: "sucesss",
                message: "le code parrainage est valide",
                key: Date.now(),
            });
            return true;
            // window.location.href = currentUrl.origin + currentUrl.pathname;
        } else {
            setShowToast({
                type: "error",
                message: "Le code de parrainage n'est pas valide.",
                key: Date.now(),
            });
            return false;
        }
    } catch (err) {
        setShowToast({
            type: "error",
            message: "Une erreur est survenue lors de la vérification du code." + err,
            key: Date.now(),
        });
        return false;
    } finally {
        console.log("finally");
    }
};
