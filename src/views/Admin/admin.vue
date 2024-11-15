<script>

</script>

<template>
  <h1>Page Admin</h1>
  <div class="buttonPlacement">

  <RouterLink to="/adminUsers"><button id="buttonUsers">Users</button></RouterLink>

  <router-link to="/adminVehicles"><button id="buttonVehicle">Vehicles</button></router-link>

  <router-link to="/adminBooking"><button id="buttonBooking">Booking</button></router-link>
  </div>

</template>

<style scoped>
h1{
  text-align: center;
  position: relative;
  top: 10vh;
  margin-bottom: 3%;
}
#buttonUsers{
  font-size: 2.5em;
  color: white;
  background-color: #FAB637;
  border: none;
  border-radius: 10px;
  width: 20vh;
  height: 20vh;
}
#buttonVehicle{
  font-size: 2.5em;
  color: white;
  background-color: red;
  border: none;
  border-radius: 10px;
  width: 20vh;
  height: 20vh;
}
#buttonBooking{
  font-size: 2.5em;
  color: white;
  background-color: cornflowerblue;
  border: none;
  border-radius: 10px;
  width: 20vh;
  height: 20vh;
}
.buttonPlacement{
  height: 40vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

</style>
