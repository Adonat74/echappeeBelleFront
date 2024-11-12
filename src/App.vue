<script setup>
import Header from "./components/headerFooter/Header.vue";
import Footer from "./components/headerFooter/Footer.vue";
import { RouterView } from 'vue-router'

</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>

</style>
