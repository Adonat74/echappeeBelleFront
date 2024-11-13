import axios from "axios";

export async function getVehicles() {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/vehicles`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}