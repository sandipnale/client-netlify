import axios from "axios"

const API_URL = 'https://bedrooms-monsters-ties-ntsc.trycloudflare.com/api/foods';

export const fetchFoodList = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;

    } catch (error) {
        console.log("Error", error);
        throw error;
    }

}

export const fetchFoodDetails = async (id) => {


    try {
        const response = await axios.get(API_URL + "/" + id);
        return response.data;

    } catch (error) {
        console.log("Error Feching the veggies  dtails", error);
        throw error;
    }
}
