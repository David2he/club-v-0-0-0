import axios from "axios";

export const handleGetData = async (url: string): Promise<any> => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        throw error;
    }
};

export const handlePostData = async (
    url: string,
    options: any
): Promise<any> => {
    const response = await axios.post(url, options.body, {
        headers: options.headers,
    });

    return response;
};
