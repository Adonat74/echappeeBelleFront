<script setup>
import VehiclesFilter from "@/components/filter/VehiclesFilter.vue";
import CarCard from "@/components/carCard/CarCard.vue";
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

  <div>
    <section>
      <div>
        <label for="sort"></label>
        <select name="sort" id="sort">
          <option value="priceIncrease">Prix : Croissant</option>
          <option value="priceDecrease">Prix : Décroissant</option>
          <option value="brandAZ">marque : A-Z</option>
          <option value="brandZA">marque : Z-A</option>
        </select>
      </div>
      <div class="carList">
        <CarCard/>
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
</style>