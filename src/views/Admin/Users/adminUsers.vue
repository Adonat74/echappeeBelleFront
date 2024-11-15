<script setup>
import {ref, onMounted} from 'vue';
import {getUsers} from "@/services/modules/vehiclesAPICalls.js";
import {deleteUserById} from "@/services/modules/vehiclesAPICalls.js";

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

  <h1>Page Admin Users</h1>
<router-link to="/admin"><button id="backButton">Back</button></router-link>
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

      <RouterLink :to="'/users/' + user.id">
        <button type="button" id="buttonUpdate" class="btn btn-primary">Modifier</button>
      </RouterLink>

      <td><button @click="deleteUserById(user.id)" type="button" id="buttondelete" class="btn btn-danger">Supprimer</button></td>
    </tr>
    <RouterLink to="/create"><button id="buttonCreate">Créer</button></RouterLink>
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
#buttonCreate{
  position: absolute;
  left: 90vh;
  top: 25vh;
  color: white;
  background-color: #FAB637;
 border: none;
  border-radius: 10px;
  width: 5vw;
}
#buttonUpdate{
  position: relative;
top: 0.8vh;
  left: 1vw;
}
#buttondelete{
  position: relative;
  left: -30vh;
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