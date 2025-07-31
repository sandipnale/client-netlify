import axios from "axios";

const API_URL = "http://ec2-13-126-78-224.ap-south-1.compute.amazonaws.com:8080/api";

export const registerUser = async (data) => {
    try {
        const response = await axios.post(API_URL + "/register", data);
        return response;
    } catch (error) {

        throw error;
    }

}



export const login=async(data)=>{

    try {
      const response= await axios.post(API_URL+"/login",data);
      return response;
    } catch (error) {
        throw error;

    }
}
