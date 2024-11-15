<script>
import axios from "axios";
import {updateVehicleById} from "@/services/modules/vehiclesAPICalls.js";
export default {
  data() {
    return {
      vehicle:{},
    }
  },
  methods: {
    updateVehicleById,

    async getVehicleId(id){
      try{
        const response = await axios.get(`http://192.168.1.245:8082/vehicles/${id}`);
        console.log(response.data);
        this.vehicle=response.data;
      }catch(err){
        console.log(err);
      }
    },
  },
  mounted() {
    this.getVehicleId(this.$route.params.id);
  }

}
</script>

<template>
  <h1>Modifier Vehicle</h1>

  <router-link to="/adminVehicles"><button id="backButton">Back</button></router-link>

  <form @submit.prevent="updateVehicleById(vehicle.idVehicle, vehicle)">
    <div class="identifiant">
      <label for="exampleInputEmail1" class="form-label">type</label>
      <input v-model="vehicle.type"  type="text" class="form-control"  aria-describedby="emailHelp">
    </div>

    <div class="identifiant">
      <label for="exampleInputPassword1" class="form-label">plateNumber</label>
      <input v-model="vehicle.plateNumber" type="text" class="form-control" >
    </div>

    <div class="identifiant">
      <label for="exampleInputEmail1" class="form-label">taxeHorses</label>
      <input v-model="vehicle.taxHorses" type="text" class="form-control"  aria-describedby="emailHelp">
    </div>

    <div class="identifiant">
      <label for="exampleInputPassword1" class="form-label">model</label>
      <input v-model="vehicle.model" type="text" class="form-control" >
    </div>

    <div class="identifiant">
      <label for="exampleInputEmail1" class="form-label">volumeInM3</label>
      <input v-model="vehicle.volumeInM3" type="text" class="form-control"  aria-describedby="emailHelp">
    </div>

    <div class="identifiant">
      <label for="exampleInputPassword1" class="form-label">pricePerKilometerInCents</label>
      <input v-model="vehicle.pricePerKilometerInCents" type="text" class="form-control" >
    </div>

    <div class="identifiant">
      <label for="exampleInputEmail1" class="form-label">bookingPriceInCents</label>
      <input v-model="vehicle.bookingPriceInCents" type="text" class="form-control"  aria-describedby="emailHelp">
    </div>

    <div class="identifiant">
      <label for="exampleInputPassword1" class="form-label">brand</label>
      <input v-model="vehicle.brand" type="password" class="form-control" >
    </div>

    <div class="identifiant">
      <label for="exampleInputEmail1" class="form-label">color</label>
      <input v-model="vehicle.color" type="text" class="form-control"  aria-describedby="emailHelp">
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

