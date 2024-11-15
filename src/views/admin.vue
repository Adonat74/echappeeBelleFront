<script setup>
import {ref, onMounted} from 'vue';
import {getUsers} from "@/services/modules/vehiclesAPICalls.js";

const users = ref([]);

onMounted(async () => {
  const result = await getUsers();
  if (result) {
    users.value = result;
  }
  console.log(users.value);
})

</script>

<template>

  <h1>Page Admin</h1>

  <table class="table">
    <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Prenom</th>
      <th scope="col">Nom</th>
      <th scope="col">Age</th>
      <th scope="col">Date de Naissance</th>
      <th scope="col">Mail</th>
      <th scope="col">Password</th>
      <th scope="col">Numéro Licence</th>
      <th scope="col">Date obtention Licence</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(user,index) in users" :key="index">
      <td>{{ user.id }}</td>
      <td>{{user.firstName}}</td>
      <td>{{user.name}}</td>
      <td>{{user.age}}</td>
      <td>{{user.birthDate}}</td>
      <td>{{user.mail}}</td>
      <td>{{user.password}}</td>
      <td>{{user.licenseNumber}}</td>
      <td>{{user.licenseObtentionDate}}</td>
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
</style>