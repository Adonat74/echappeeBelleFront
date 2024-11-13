<script setup>
import VehiclesFilter from "@/components/filter/VehiclesFilter.vue";
import VehicleCard from "@/components/carCard/VehicleCard.vue";
import { ref, onMounted } from 'vue';
import { getVehicles } from "@/services/modules/vehiclesAPICalls.js";

const vehicles = ref([]);

onMounted(async () => {
  const result = await getVehicles();
  if (result) {
    vehicles.value = result;
  }
  console.log(vehicles.value);
});



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
        <select name="sort" id="sort">
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
    <VehiclesFilter/>
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
}
</style>