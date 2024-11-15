import axios from "axios";

export async function fetchVehicles() {
    try {
        const response = await axios.get(`http://192.168.1.245:8082/vehicles`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
export async function fetchBooking() {
    try {
        const response = await axios.get(`http://192.168.1.245:8082/bookings`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function fetchOneVehicle(vehicleId) {
    try {
        const response = await axios.get(`http://192.168.1.245:8082/vehicles/${vehicleId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
export async function getUsers() {
    try {
        const response = await axios.get(`http://192.168.1.245:8082/users`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
export async function deleteUserById(userID) {
    try {
        const response = await axios.delete(`http://192.168.1.245:8082/users/`+ userID);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
export async function deleteVehicleById(vehicleID) {
    try {
        const response = await axios.delete(`http://192.168.1.245:8082/vehicles/`+ vehicleID);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteBookingById(bookingID) {
    try {
        const response = await axios.delete(`http://192.168.1.245:8082/bookings/`+ bookingID);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function updateUserById(userID, userData) {
    try {
        const response = await axios.put(`http://192.168.1.245:8082/users/`+ userID, userData);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function updateVehicleById(idVehicle, vehicleData) {
    try {
        const response = await axios.put(`http://192.168.1.245:8082/vehicles/`+ idVehicle, vehicleData);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
export async function updateBookingById(idBooking, bookingData) {
    try {
        const response = await axios.put(`http://192.168.1.245:8082/bookings/`+ idBooking, bookingData);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}