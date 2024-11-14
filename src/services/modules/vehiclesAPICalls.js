import axios from "axios";

export async function fetchVehicles() {
    try {
        const response = await axios.get(`http://localhost:8082/vehicles`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function fetchOneVehicle(vehicleId) {
    try {
        const response = await axios.get(`http://localhost:8082/vehicles/${vehicleId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

