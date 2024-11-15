<script>
import axios from 'axios';

export default {
  name: 'Account',
  data() {
    return {
      result:{},
      account:{
        mail:'',
        password:'',
      }
    }
  },
  methods: {
    postAccount(){

      axios.post("http://192.168.1.245:8082/users/login" , this.account)
          .then(({data})=>{
            if(data == false){
              alert("Mot de Passe incorect")
            }else{
              alert("Connecté")
            }
            console.log(data)
            this.result = data.data;
          })
      }
    }
}

</script>

<template>
  <h1>Connection</h1>
  <form  @submit.prevent="postAccount()">
    <div class="identifiant">
      <label for="exampleInputEmail1" class="form-label">Identifiant</label>
      <input v-model="account.mail" type="email" class="form-control"  aria-describedby="emailHelp">
    </div>
    <div class="identifiant">
      <label for="exampleInputPassword1" class="form-label">Mot de Passe</label>
      <input v-model="account.password" type="password" class="form-control" >
    </div>
    <button type="submit" class="btn btn-primary">Connection</button>
    <router-link to="Create"><button type="submit" class="btn btn-danger">Creer un compte</button></router-link>
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
  left: 39%;
  top: 100px;
}
</style>