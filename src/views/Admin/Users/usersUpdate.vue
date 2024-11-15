<script>
import axios from "axios";
import {updateUserById} from "@/services/modules/vehiclesAPICalls.js";
export default {
  data() {
    return {
      user:{},
    }
  },
  methods: {
    updateUserById,
    async getUserId(id){
      try{
        const response = await axios.get(`http://192.168.1.245:8082/users/${id}`);
        console.log(response.data);
        this.user=response.data;
      }catch(err){
        console.log(err);
      }
    },
  },
  mounted() {
    this.getUserId(this.$route.params.id);
  }

}
</script>

  <template>
    <h1>Modifier Users</h1>

    <router-link to="/adminUsers"><button id="backButton">Back</button></router-link>

    <form @submit.prevent="updateUserById(user.id, user)">
      <div class="identifiant">
        <label for="exampleInputEmail1" class="form-label">Prenom</label>
        <input v-model="user.firstName"  type="text" class="form-control"  aria-describedby="emailHelp">
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
        <input v-model="user.mail" type="email" class="form-control"  aria-describedby="emailHelp">
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

      <button type="submit" class="btn btn-primary">Modifier</button>

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

