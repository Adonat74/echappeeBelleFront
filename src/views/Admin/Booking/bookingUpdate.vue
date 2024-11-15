<script>
import axios from "axios";
import {updateBookingById} from "@/services/modules/vehiclesAPICalls.js";
export default {
  data() {
    return {
      booking:{},
    }
  },
  methods: {
    updateBookingById,

    async getBookingId(id){
      try{
        const response = await axios.get(`http://192.168.1.245:8082/bookings/${id}`);
        console.log(response.data);
        this.booking=response.data;
      }catch(err){
        console.log(err);
      }
    },
  },
  mounted() {
    this.getBookingId(this.$route.params.id);
  }

}
</script>

<template>
  <h1>Modifier Booking</h1>

  <router-link to="/adminBooking"><button id="backButton">Back</button></router-link>

  <form @submit.prevent="updateBookingById(booking.id, booking)">
    <div class="identifiant">
      <label for="exampleInputEmail1" class="form-label">Start Date</label>
      <input v-model="booking.startDate"  type="text" class="form-control"  aria-describedby="emailHelp">
    </div>

    <div class="identifiant">
      <label for="exampleInputPassword1" class="form-label">End Date</label>
      <input v-model="booking.endDate" type="text" class="form-control" >
    </div>

    <div class="identifiant">
      <label for="exampleInputEmail1" class="form-label">Number Km</label>
      <input v-model="booking.numberKm" type="text" class="form-control"  aria-describedby="emailHelp">
    </div>

    <div class="identifiant">
      <label for="exampleInputPassword1" class="form-label">UserId</label>
      <input v-model="booking.userId" type="text" class="form-control" >
    </div>

    <div class="identifiant">
      <label for="exampleInputEmail1" class="form-label">VehicleId</label>
      <input v-model="booking.vehicleId" type="text" class="form-control"  aria-describedby="emailHelp">
    </div>

    <button type="submit" class="btn btn-primary">Modifier</button>

  </form>
</template>

<style scoped>
h1{
  text-align: center;
  position: relative;
  top: 10vh;
  margin-bottom: 3%;
}
.identifiant{
  width: 20%;
  position: relative;
  left: 40%;
  top: 100px;
}
.btn{
  font-size: 0.9em;
  width: 7%;
  margin: 2%;
  position: relative;
  left: 45%;
  top: 100px;
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

