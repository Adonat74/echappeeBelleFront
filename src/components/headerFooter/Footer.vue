<script setup>

</script>

<template>
  <footer>
    <div class="footerContainer">
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
        <div class="inputContainer">
          <input type="email">
          <img class="emailIcon" src="@/assets/logo-réseaux-sociaux/boutton-submit-footer.svg" alt="icon newsletter">
        </div>
        <p>Inscrivez-vous pour recevoir les
          dernières offres</p>
      </section>
      <section>
        <h4>RESEAUX SOCIAUX</h4>
        <div>
          <img class="social" src="@/assets/logo-réseaux-sociaux/facebook-logo-carré.svg" alt=""><img class="social" src="@/assets/logo-réseaux-sociaux/twitter-logo-carré.svg" alt=""><img class="social" src="@/assets/logo-réseaux-sociaux/instagram.svg" alt=""><img class="social" src="@/assets/logo-réseaux-sociaux/google-plus-g.svg" alt=""><img class="social" src="@/assets/logo-réseaux-sociaux/youtube.svg" alt="">
        </div>
      </section>
    </div>
    <p class="copyright">Copyright © Club Auto - Tous droits réservés</p>


  </footer>
</template>

<style scoped>

footer {
  background-color: var(--black);
  height: 280px;
  width: 100%;
  color: white;
  margin-top: 100px;
  top: calc(100vh - 280px);
}
.footerContainer{
  display: flex;
  align-items: start;
  justify-content: space-around;
  margin: 60px 60px 0  60px;
  border-bottom: 1px solid #9a9a9a;
}
section{
  max-width: 20%;
}
h4{
  margin-bottom: 20px;
}
p{
  color: #9a9a9a;
  margin-bottom: 25px;
}
.social{
  width: 50px;
  margin: 10px 10px 0 0;
}
.inputContainer{
  display: flex;
  align-items: center;
}
input{
  height: 50px;
}
.emailIcon{
  height: 50px;
}


.copyright{
  width: 100%;
  text-align: center;
  margin-top: 30px;
}
</style>