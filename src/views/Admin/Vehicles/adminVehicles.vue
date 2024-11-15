<script setup>
import {ref, onMounted} from 'vue';
import {fetchVehicles} from "@/services/modules/vehiclesAPICalls.js";
import {deleteVehicleById} from "@/services/modules/vehiclesAPICalls.js";

const vehicles = ref([]);

onMounted(async () => {
  const result = await fetchVehicles();
  if (result) {
    vehicles.value = result;
  }
  console.log(vehicles.value);
})

</script>

<template>

  <h1>Page Admin Vehicles</h1>
  <router-link to="/admin"><button id="backButton">Back</button></router-link>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">type</th>
      <th scope="col">plateNumber</th>
      <th scope="col">taxeHorses</th>
      <th scope="col">model</th>
      <th scope="col">volumeInM3</th>
      <th scope="col">pricePerKilometerInCents</th>
      <th scope="col">bookingPriceInCents</th>
      <th scope="col">brand</th>
      <th scope="col">color</th>
      <th scope="col">displacementInCm3</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(vehicle,index) in vehicles" :key="index">

      <td>{{ vehicle.idVehicle }}</td>
      <td>{{vehicle.type}}</td>
      <td>{{vehicle.plateNumber}}</td>
      <td>{{vehicle.taxeHorses}}</td>
      <td>{{vehicle.model}}</td>
      <td>{{vehicle.volumeInM3}}</td>
      <td>{{vehicle.pricePerKilometerInCents}}</td>
      <td>{{vehicle.bookingPriceInCents}}</td>
      <td>{{vehicle.brand}}</td>
      <td>{{vehicle.color}}</td>
      <td>{{vehicle.displacementInCm3}}</td>

      <RouterLink :to="'/vehicles/' + vehicle.idVehicle">
        <button type="button" id="buttonUpdate" class="btn btn-primary">Modifier</button>
      </RouterLink>

      <td><button @click="deleteVehicleById(vehicle.idVehicle)" type="button" id="buttondelete" class="btn btn-danger">Supprimer</button></td>
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
  left: -20vh;
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