<script>

import axios from 'axios';


export default {
  name: 'Create',
  data() {
    return {
      result:{},
      user:{
        name: '',
        firstName:'',
        age: '',
        birthDate:'',
        licenseNumber:'',
       licenseObtentionDate: '',
        mail: '',
        password: '',
      }
    }
  },
created() {
},
  mounted() {
    console.log('Component mounted.');
  },

  methods: {
    postUser(){
      axios.post(`http://192.168.1.245:8082/users`, this.user)
          .then(({data})=>{
            alert("User Created Successfully");})
    }
  }
}
</script>

<template>
  <h1>Créer un Compte</h1>

  <form @submit.prevent="postUser()">
    <div class="identifiant">
      <label for="exampleInputEmail1" class="form-label">Prenom</label>
      <input v-model="user.firstName" type="text" class="form-control"  aria-describedby="emailHelp">
    </div>

    <div class="identifiant">
      <label for="exampleInputPassword1" class="form-label">Nom</label>
      <input v-model="user.name" type="text" class="form-control" >
    </div>

    <div class="identifiant">
      <label for="exampleInputEmail1" class="form-label">Age</label>
      <input v-model="user.age" type="text" class="form-control"  aria-describedby="emailHelp">
    </div>

    <div class="identifiant">
      <label for="exampleInputPassword1" class="form-label">Date de Naissance</label>
      <input v-model="user.birthDate" type="text" class="form-control" >
    </div>

    <div class="identifiant">
      <label for="exampleInputEmail1" class="form-label">Numero License</label>
      <input v-model="user.licenseNumber" type="text" class="form-control"  aria-describedby="emailHelp">
    </div>

    <div class="identifiant">
      <label for="exampleInputPassword1" class="form-label">Date obtention License</label>
      <input v-model="user.licenseObtentionDate" type="text" class="form-control" >
    </div>

    <div class="identifiant">
      <label for="exampleInputEmail1" class="form-label">Mail</label>
      <input v-model="user.mail" type="email" class="form-control"  aria-describedby="emailHelp">
    </div>

    <div class="identifiant">
      <label for="exampleInputPassword1" class="form-label">Mot de Passe</label>
      <input v-model="user.password" type="password" class="form-control" >
    </div>

    <button type="submit" class="btn btn-primary">Créer</button>

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

</style>