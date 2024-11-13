<script setup>

</script>

<template>
  <section>
    <div class="filterHeader">
      <img src="@/assets/images/icone-voiture.png" alt="">
      <h2>Rechercher</h2>
    </div>
    <form action="">
      <select name="type" id="type">
        <option value="" disabled selected>Type</option>
        <option value="car">Voiture</option>
        <option value="utility">Utilitaire</option>
        <option value="twoWheeler">2 Roues</option>
      </select>

      <select name="brand" id="brand">
        <option value="" disabled selected>Marque</option>
        <option value="dynamic">Dynamique</option>
      </select>

      <select name="model" id="model">
        <option value="" disabled selected>Modèle</option>
        <option value="dynamic">Dynamique</option>
      </select>
    </form>
  </section>
</template>

<style scoped>
section {
  margin-left: 100px;
  box-shadow: 0 0 20px 0 #bfbfbf;
  height: 400px;
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

select {
  margin: 20px 50px;
  height: 50px;
  font-size: 1.3rem;
  background-color: var(--tGray);
  border: none;
  padding: 0 20px;
}

</style>