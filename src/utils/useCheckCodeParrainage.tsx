import { useState } from "react";
import { post } from "../services/api";

export const useCheckCodeParrainage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCodeValid, setIsCodeValid] = useState(false);
  const [error, setError] = useState(String);

  const checkCode = async (code : string) => {
    setIsLoading(true);
    try {
      const response = await post("https://jsonplaceholder.typicode.com/posts", {
        body: JSON.stringify({
          code: code,
        }),
      });
      console.log(response.id)
      
      if (response.id == 101) {
        setIsCodeValid(true);
        // Vous pouvez également rediriger l'utilisateur ici si nécessaire.
      } else {
        setIsCodeValid(false);
        setError("Le code de parrainage n'est pas valide.");
      }
    } catch (err) {
      setError("Une erreur est survenue lors de la vérification du code.");
    } finally {

      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isCodeValid,
    error,
    checkCode,
  };
};
