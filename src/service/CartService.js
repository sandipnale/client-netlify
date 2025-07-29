import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "http://localhost:8080/api/cart";

export const addToCart = async (foodId, token) => {
    try {

        await axios.post(API_URL, { foodId }, { headers: { "Authorization": `Bearer ${token}` } });

    } catch (error) {
console.error("Error while qty adding the data",error);
    }
}

export const RemoveQtyFromCart = async (foodId, token) => {
    try {
        await axios.post(API_URL+'/remove', { foodId }, { headers: { "Authorization": `Bearer ${token}` } });

    } catch (error) {
          console.error("Error while qty  removoing the data",error);
    }
}

export const getCartData = async (token) => {
    try {
       
        const response = await axios.get(API_URL, {
            headers: { Authorization: `Bearer ${token}` },
        });

            toast.success(response.data.items);
           21
        return response.data.items;



    } catch (error) {
        console.error("Error while feching the datda",error)
    }
}