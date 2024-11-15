<script setup>
import VehiclesFilter from "@/components/filter/VehiclesFilter.vue";
import VehicleCard from "@/components/carCard/VehicleCard.vue";
import { ref, onMounted } from 'vue';
import { fetchVehicles } from "@/services/modules/vehiclesAPICalls.js";

const vehicles = ref([]);
const allVehicles = ref([]);
// index 0 = type, 1 = brand 2 = model
const filterValues = ref(["", "", ""]);
const filterKey = ref(0);

// Séparer 2 fonctions pour éviter de mettre à jour la variable AllVehicles et causer des problèmes au filtre
async function getVehicles() {
  const result = await fetchVehicles(filterValues.value[0], filterValues.value[1], filterValues.value[2]);
  if (result) {
    vehicles.value = result;
  }
}
async function getVehiclesMounted() {
  const result = await fetchVehicles(filterValues.value[0], filterValues.value[1], filterValues.value[2]);
  if (result) {
    vehicles.value = result;
    allVehicles.value = result;
  }
}

// Enregistre les valeurs des filtre dans un tableau
function changeFilterValues(value, filterBy) {
  if (filterBy === "type") {
    filterValues.value[0] = value;
  } else if (filterBy === "brand") {
    filterValues.value[1] = value;
  } else if (filterBy === "model") {
    filterValues.value[2] = value;
  }
  getVehicles();
  //filterVehicles();
}

function resetFilter() {
  filterValues.value = ["", "", ""];
  vehicles.value = allVehicles.value;
  filterKey.value ++;
}

// filtre les véhicule en fonction des valeurs
// function filterVehicles() {
//   vehicles.value = allVehicles.value;
//   if (filterValues.value[0] !== "") {
//     vehicles.value = vehicles.value.filter(vehicle => vehicle.type === filterValues.value[0]);
//   }
//   if (filterValues.value[1] !== "") {
//     vehicles.value = vehicles.value.filter(vehicle => vehicle.brand === filterValues.value[1]);
//   }
//   if (filterValues.value[2] !== "") {
//     vehicles.value = vehicles.value.filter(vehicle => vehicle.model === filterValues.value[2]);
//   }
// }

// trie les véhicules en fonction du prix ou de la marque
function sortVehicles(sortBy) {
  if (sortBy === "priceIncrease") {
    vehicles.value.sort((a,b) => a.pricePerKilometerInCents - b.pricePerKilometerInCents);
  } else if (sortBy === "priceDecrease") {
    vehicles.value.sort((a,b) => b.pricePerKilometerInCents - a.pricePerKilometerInCents);
  } else if (sortBy === "brandAZ") {
    vehicles.value.sort((a,b) => (a.brand.toLowerCase() > b.brand.toLowerCase()) ? 1 : ((b.brand.toLowerCase() > a.brand.toLowerCase()) ? -1 : 0))
  } else if (sortBy === "brandZA") {
    vehicles.value.sort((a,b) => (a.brand.toLowerCase() > b.brand.toLowerCase()) ? -1 : ((b.brand.toLowerCase() > a.brand.toLowerCase()) ? 1 : 0))
  }
}

onMounted(getVehiclesMounted);
</script>

<template>
  <section class="mainHeader">
    <img src="@/assets/images/vente-location.jpg" alt="femme assise dans le coffre de sa voiture devant un beau couché de soleil">
    <h1>LOCATION</h1>
  </section>
  <div class="rentingContainer">
    <section>
      <div>
        <label for="sort">TRIER PAR : </label>
        <select name="sort" id="sort" @change="sortVehicles($event.target.value)">
          <option value="priceIncrease">Prix : Croissant</option>
          <option value="priceDecrease">Prix : Décroissant</option>
          <option value="brandAZ">marque : A-Z</option>
          <option value="brandZA">marque : Z-A</option>
        </select>
      </div>
      <div class="vehiclesList">
        <div v-for="vehicle in vehicles" :key="vehicle.id">
          <VehicleCard :vehicle="vehicle"/>
        </div>
      </div>
    </section>
    <VehiclesFilter :key="filterKey" v-if="allVehicles.length > 0" :allVehicles="allVehicles" @change-event="changeFilterValues" @reset-filter="resetFilter"/>
  </div>
</template>



<style scoped>
.mainHeader {
  width: 100%;
  position: relative;
}
.mainHeader img{
  width: 100%;
  height: 280px;
  object-fit: cover;
  filter: brightness(50%)
}
h1{
  position: absolute;
  top: 100px;
  left: 180px;
  color: white;
  font-size: 3.5rem;
}
select{
  height: 50px;
  font-size: 1.3rem;
  background-color: var(--tGray);
  border: none;
}
.rentingContainer{
  margin: 50px 10%;
  display: flex;
}
.vehiclesList{
  margin-top: 50px;
  width: 100%;
  border-top: 1px solid #9e9e9e;
  max-height:1000px;
  overflow-y: scroll;
  padding: 0 30px;
}
.vehiclesList::-webkit-scrollbar {
  width: 10px; /* Set the width for the vertical scrollbar */
}
.vehiclesList::-webkit-scrollbar-track {
  background: #f1f1f1; /* Color of the scrollbar track */
  border-radius: 10px; /* Optionally round the corners of the track */
}
.vehiclesList::-webkit-scrollbar-thumb {
  background: #9fbae1; /* Color of the scrollbar thumb */
  border-radius: 10px; /* Optionally round the corners of the thumb */
}
.vehiclesList::-webkit-scrollbar-thumb:hover {
  background: var(--blue); /* Color of the scrollbar thumb when hovered */
}
</style>