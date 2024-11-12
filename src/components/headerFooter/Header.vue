<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div class="headerContainer">
      <p class="title">ÉCHAPPÉE BELLE</p>
      <div class="flexRow">
        <img src="@/assets/images/icone-adresse.png" alt="pin point adress icon">
        <p><span style="color: var(--orange)">ADRESSE : </span><br>AVENUE CHARLES DE GAULLE <br>75000 PARIS</p>
      </div>
      <div class="flexRow">
        <img src="@/assets/images/icon-telephone.png" alt="telephone icon">
        <p><span style="color: var(--orange)">TÉLÉPHONE :</span><br>01 23 45 67 89</p>
      </div>
      <div>
        <p><span style="color: var(--orange)">OUVERTURE :</span> Du Lundi au Samedi</p>
        <p><span style="color: var(--orange)">HORAIRES :</span> De 9h à 17h</p>
      </div>
      <div class="socialIcons">
        <img src="@/assets/logo-réseaux-sociaux/facebook-logo.svg" alt="facebook logo">
        <img src="@/assets/logo-réseaux-sociaux/twitter-logo.svg" alt="twitter logo">
      </div>
    </div>


    <div class="navContainer">
      <nav>
        <RouterLink to="/" :class="{ 'active-link': $route.path === '/' }">ACCUEIL</RouterLink>
        <RouterLink to="/renting" :class="{ 'active-link': $route.path === '/renting' }">LOCATION</RouterLink>
        <RouterLink to="/account" :class="{ 'active-link': $route.path === '/account' }">COMPTE</RouterLink>
        <RouterLink to="/contact" :class="{ 'active-link': $route.path === '/contact' }">CONTACT</RouterLink>
      </nav>
    </div>

  </header>


</template>

<style scoped>
header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
}

.headerContainer {
  background-color: var(--black);
  color: white;
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: 0.8rem;
  font-weight: 600;
}
.title{
  font-weight: bold;
  font-size: 2rem;
}
img{
  height: 40px
}

.flexRow {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.flexRow > p {
  margin-left: 5px;
}
.socialIcons {
  display: flex;
  align-items: center;
  width: 100px;
  justify-content: space-between;
}

.navContainer{
  width: 100%;
  height: 55px;
  background-color: var(--tGray);
}

nav{
  width: 100%;
  height: 100%;
  margin-left: 60%;
  display: flex;
  align-items: center;
}

nav a{
  height: 100%;
  padding: 0 30px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
}

nav a.active-link {
  background-color:  var(--orange);
  color: #fff;
}


</style>