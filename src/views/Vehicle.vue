<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue';
import { fetchOneVehicle } from '../services/modules/vehiclesAPICalls.js';

const route = useRoute()

const vehicle = ref({})

onMounted(async () => {
  const result = await fetchOneVehicle(route.params.id);
  if (result) {
    vehicle.value = result;
  }
  console.log(vehicle.value)
});
</script>

<template>
  <div class="vehicleContainer">
    <h1>{{vehicle.brand + ", " + vehicle.model}}</h1>
    <img src="@/assets/images/vehicule2.jpg" alt="image voiture">
    <h2>Description</h2>
    <ul>
      <li><b>Type de véhicule</b> : {{vehicle.type}}</li>
      <li><b>Marque </b> : {{vehicle.brand}}</li>
      <li><b>Modèle</b> : {{vehicle.model}}</li>
      <li><b>Couleur</b> : {{vehicle.color}}</li>
      <li><b>Prix de la location</b> : {{(vehicle.bookingPriceInCents/100).toFixed(2)}}€</li>
      <li><b>Prix au kilomètre</b> : {{(vehicle.pricePerKilometerInCents/100).toFixed(2)}}€</li>
      <li><b>Chevaux fiscaux</b> : {{vehicle.taxHorses}}</li>
      <li v-if="vehicle.type == 'UtilityVehicle'"><b>Volume utile</b> : {{vehicle.volumeInM3}}</li>
      <li v-if="vehicle.type == 'TwoWheeler'"><b>Cylindrée</b> : {{vehicle.displacementInCm3}}</li>
    </ul>
  </div>

</template>

<style scoped>
.vehicleContainer {
  margin: 100px 15vw 0;
}
h1 {
  font-size: 4rem;
}
img {
  margin-top: 50px;
  width: 70vw;
  height: 40vw;
  object-fit: cover;
}
h2 {
  font-size: 3rem;
  margin-bottom: 50px;
}
li {
  font-size: 1.5rem;
}
</style>