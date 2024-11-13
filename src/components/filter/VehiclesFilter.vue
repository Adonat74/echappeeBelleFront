<script setup>

</script>

<template>
  <section>
    <div>
      <img src="" alt="">
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

</style>