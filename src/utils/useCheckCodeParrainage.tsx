import { useState } from "react";
import { post } from "../services/api";

export const useCheckCodeParrainage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCodeValid, setIsCodeValid] = useState(false);
  const [errorCode, setErrorCode] = useState("");
  const currentUrl = new URL(window.location.href);
  const checkCode = async (code: string) => {
    setIsLoading(true);
    try {
      const response = await post("https://jsonplaceholder.typicode.com/posts", {
        body: JSON.stringify({
          code: code,
        }),
      });

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
        window.location.href = currentUrl.origin + currentUrl.pathname;
      } else {
        setIsCodeValid(false);
        setErrorCode("Le code de parrainage n'est pas valide.");
      }
    } catch (err) {
      setErrorCode("Une erreur est survenue lors de la vérification du code.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isCodeValid,
    errorCode,
    checkCode,
  };
};
