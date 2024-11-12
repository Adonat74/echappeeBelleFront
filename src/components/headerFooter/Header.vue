<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <h3>Je suis le header</h3>
    <nav>
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/renting">Location</RouterLink>
      <RouterLink to="/account/1">Compte</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>
  </header>


</template>

<style scoped>

</style>