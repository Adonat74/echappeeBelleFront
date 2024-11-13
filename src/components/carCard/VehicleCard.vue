<script setup>
defineProps(['vehicle'])
</script>

<template>
  <div class="vehicleCard">
    <img src="@/assets/images/vehicule2.jpg" alt="">
    <div class="cardBody">
      <div class="titleContainer">
        <h2>{{vehicle.brand + ", " + vehicle.model + ", " + vehicle.type + ", " + vehicle.color}}</h2>
        <p class="price">{{(vehicle.pricePerKilometerInCents/100).toFixed(2) + "€/Km"}} </p>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis voluptatem delectus error adipisci. Enim delectus odit debitis! Laudantium illum necessitatibus dolorem illo libero sed debitis iste esse vel ad.</p>
      <p>>>En savoir plus<<</p>
    </div>
  </div>



</template>

<style scoped>
.vehicleCard {
  height: 100%;
  display: flex;
  padding: 50px 0;
  border-bottom: 1px solid #9e9e9e;
}
img{
  width: 300px;
  margin-right: 50px;
}
.cardBody {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.titleContainer {
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
}

.price {
  font-size: 1.6rem;
  font-weight: 500;
  background-color: #6C98E1;
  padding: 12px 15px;
  color: white;
}

</style>