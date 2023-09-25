import { useState } from "react";
import { handlePostData } from "../services/api";

export const useCheckCodeParrainage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isCodeValid, setIsCodeValid] = useState(false);
    const currentUrl = new URL(window.location.href);

    const checkCode = async (code: string, setShowToast: any) => {
        console.log("processing");
        setIsLoading(true);
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
                setIsCodeValid(true);
                setShowToast({
                    type: "sucesss",
                    message: "le code parrainage est valide",
                    key: Date.now(),
                });
                // window.location.href = currentUrl.origin + currentUrl.pathname;
            } else {
                setIsCodeValid(false);
                setShowToast({
                    type: "error",
                    message: "Le code de parrainage n'est pas valide.",
                    key: Date.now(),
                });
            }
        } catch (err) {
            setShowToast({
                type: "error",
                message: "Une erreur est survenue lors de la vérification du code.",
                key: Date.now(),
            });
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        isCodeValid,

        checkCode,
    };
};
