import axios from "axios";

export async function fetchVehicles() {
    try {
        const response = await axios.get(`http://localhost:8082/vehicles`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}