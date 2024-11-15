<script setup>
import {ref, onMounted} from 'vue';
import {deleteBookingById, fetchBooking} from "@/services/modules/vehiclesAPICalls.js";
import {deleteVehicleById} from "@/services/modules/vehiclesAPICalls.js";

const bookings = ref([]);

onMounted(async () => {
  const result = await fetchBooking();
  if (result) {
    bookings.value = result;
  }
  console.log(bookings.value);
})

</script>

<template>

  <h1>Page Admin Booking</h1>
  <router-link to="/admin"><button id="backButton">Back</button></router-link>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Start Date</th>
      <th scope="col">End Date</th>
      <th scope="col">Number Km</th>
      <th scope="col">UserId</th>
      <th scope="col">VehicleId</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(booking,index) in bookings" :key="index">
      <td>{{booking.id}}</td>
      <td>{{booking.startDate}}</td>
      <td>{{booking.endDate}}</td>
      <td>{{booking.numberKm}}</td>
      <td>{{booking.userId}}</td>
      <td>{{booking.vehicleId}}</td>

      <RouterLink :to="'/booking/' + booking.id">
        <button type="button" id="buttonUpdate" class="btn btn-primary">Modifier</button>
      </RouterLink>

      <td><button @click="deleteBookingById(booking.id)" type="button" id="buttondelete" class="btn btn-danger">Supprimer</button></td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>

h1{
  text-align: center;
  position: relative;
  top: 10vh;
  margin-bottom: 3%;
}

table{
  position: relative;
  top: 10vh;
}

#buttonUpdate{
  position: relative;
  top: 0.8vh;
  left: 1vw;
}
#buttondelete{
  position: relative;
  left: -13vh;
}
#backButton{
  position: relative;
  left: 5vw;
  background-color:grey;
  border: none;
  border-radius: 10px;
  width: 4vw;
  height: 2vw;
}
</style>