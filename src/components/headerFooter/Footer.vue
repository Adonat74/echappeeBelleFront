<script setup>

</script>

<template>
  <footer>
    <div>
      <section>
        <h4>ÉCHAPPÉE BELLE</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Vel quos deserunt sit laudantium neque ipsam minima facere.</p>
      </section>
      <section>
        <h4>HORAIRES D'OUVERTURE</h4>
        <p>Lundi - Samedi : 09:00 - 17:00 <br>Dimanche et jours fériés: Fermé</p>
      </section>
      <section>
        <h4>NEWSLETTER</h4>
        <div>
          <input type="email">
          <button><img src="@/assets/logo-réseaux-sociaux/boutton-submit-footer.svg" alt="icon newsletter"></button>
        </div>
        <p>Inscrivez-vous pour recevoir les
          dernières offres</p>
      </section>
      <section>
        <h4>RESEAUX SOCIAUX</h4>
        <div>
          <img src="@/assets/logo-réseaux-sociaux/facebook-logo-carré.svg" alt=""><img src="@/assets/logo-réseaux-sociaux/twitter-logo-carré.svg" alt=""><img src="@/assets/logo-réseaux-sociaux/instagram.svg" alt=""><img src="@/assets/logo-réseaux-sociaux/google-plus-g.svg" alt=""><img src="@/assets/logo-réseaux-sociaux/youtube.svg" alt="">
        </div>
      </section>
    </div>
    <p class="copyright">Copyright © Club Auto - Tous droits réservés</p>


  </footer>
</template>

<style scoped>
footer {
  background-color: var(--black);
  color: white;
  height: 280px;
  margin-top: 100px;
  top: calc(100vh - 280px);
}
.copyright{
  color: black;
}
</style>