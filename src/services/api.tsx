import axios from "axios";

export const get = async (url: string): Promise<any> => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    throw error;
  }
};

export const post = async (url: string, options: any): Promise<any> => {
  try {
    const response = await axios.post(url, options.body, {
      headers: options.headers
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'envoi des données :", error);
    throw error;
  }
};
