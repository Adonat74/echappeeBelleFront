<script setup>
import {onMounted, ref, watch} from "vue";

defineEmits(['changeEvent', 'resetFilter']);
const props = defineProps(['allVehicles']);


const types = ref([]);
const brands = ref([]);
const models = ref([]);


// liste les type, brand et model pour ajouter dynamiquement des options dans les selects
function listBrandsAndModels() {
  for (let vehicle of props.allVehicles) {
    if (!types.value.includes(vehicle.type)) {
      types.value.push(vehicle.type);
    }
    if (!brands.value.includes(vehicle.brand)) {
      brands.value.push(vehicle.brand);
    }
    if (!models.value.includes(vehicle.model)) {
      models.value.push(vehicle.model);
    }
  }
}



onMounted(listBrandsAndModels);
</script>

<template>
  <section>
    <div class="filterHeader">
      <img src="@/assets/images/icone-voiture.png" alt="">
      <h2>Rechercher</h2>
    </div>
    <form v-on:submit.prevent="onSubmit">
      <select name="type" id="type" @change="$emit('changeEvent', $event.target.value, 'type')">
        <option value="" disabled selected>Type</option>
        <option value="">Tout</option>
        <option v-for="type in types" :value="type">{{ type }}</option>
      </select>

      <select name="brand" id="brand" @change="$emit('changeEvent', $event.target.value, 'brand')">
        <option value="" disabled selected>Marque</option>
        <option value="">Tout</option>
        <option v-for="brand in brands" :value="brand">{{ brand }}</option>
      </select>

      <select name="model" id="model" @change="$emit('changeEvent', $event.target.value, 'model')">
        <option value="" disabled selected>Modèle</option>
        <option value="">Tout</option>
        <option v-for="model in models" :value="model">{{ model }}</option>
      </select>
      <button @click="$emit('resetFilter')">Réinitialiser</button>
    </form>
  </section>
</template>

<style scoped>
section {
  margin-left: 100px;
  box-shadow: 0 0 20px 0 #bfbfbf;
  height: 470px;
}
.filterHeader {
  background-color: var(--black);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 30px;
}
img{
  width: 50px;
}
form{
  width: 300px;
  display: flex;
  flex-direction: column;
}

select{
  margin: 20px 50px;
  height: 50px;
  font-size: 1.3rem;
  background-color: var(--tGray);
  border: none;
  padding: 0 20px;
}
button {
  margin: 20px 50px;
  height: 50px;
  font-size: 1.4rem;
  font-weight: bold;
  background-color: var(--blue);
  color: white;
  border: none;
  padding: 0 20px;
}

</style>