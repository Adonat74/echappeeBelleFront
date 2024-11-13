<script setup>
import { ref } from 'vue'


</script>

<template>
  <section id="pageContent">
    <div id="container1">
      <div class="titre">
        <img id="imageBackground" src="../assets/images/vehicule1.jpg" alt="photo voiture">
        <h2>ECHAPEE BELLE LE MEILLEUR DE L'AUTOMOBILE</h2>
      </div>
    </div><!--Ici se termine le #container1-->

    <div class="container2">
      <div class="image2">
            <img src="../assets/images/clients.jpg" alt="Nos clients sont satisfaits">
          <div class="text1">
              <h2>BIENVENUE CHEZ ECHAPPEE BELLE</h2>
              <h3><b>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam  voluptatibus earum quisquam ab, doloribus ducimus enim quia est esse architecto.</b></h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores nemo hic delectus omnis rerum dicta expedita corrupti, blanditiis modi atque vel, natus voluptas obcaecati aut aliquid, eos neque. Ducimus, facere? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dolore maiores ipsa, doloribus, sapiente cumque eveniet quibusdam qui aliquam cum voluptates repudiandae error nesciunt ratione magnam quod itaque neque. Ipsam?</p>
          </div>
        </div>

      <div class="text3">

        <div class="column3">
            <h2 class="h2Text3">LE MEILLEUR DE L'AUTOMOBILE</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae corporis amet, omnis iure culpa facere rem tempora hic? Ad quisquam suscipit non perspiciatis hic natus ea aut doloribus alias sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veritatis labore dolor dolore pariatur repellat autem ea hic maiores inventore distinctio id accusantium nostrum minima nobis saepe, qui est eaque!</p>
            <ul class="bold" id="ulCheck">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>

        </div>
          <div class="image3">
            <img src="../assets/images/entretien.jpg" alt="votre voiture est bien entretenue">
          </div>
      </div>
    </div><!--Ici se termine le #container2-->

    <div class="locationChoice">
          <div class="container3Flex">
                  <div class="textBlock">
                      <img src="../assets/images/vente-location.jpg" alt="Nos clients sont satisfaits">
                      <div class="placementText">

                                 <div class="locationChoicetext1">
                                    <h2>Vous souhaitez louer?</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique omnis eveniet magnam excepturi quibusdam
                                      iste ducimus a dolores? Exercitationem est rem sit corporis ratione, delectus quisquam maiores facere praesentium porro!</p>
                                  </div>

                                  <div class="locationChoicetext2">
                                    <h2>Vous souhaitez acheter?</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique omnis eveniet magnam excepturi quibusdam iste ducimus a dolores? Exercitationem est rem sit corporis ratione, delectus quisquam maiores facere praesentium porro!</p>
                                </div>
                      </div>
                  </div>
          </div>
    </div><!--Ici se termine le #container3-->

    <div id="container4">
      <h2>VEHICULES RECENTS</h2>
      <div id="cardContainerAcceuil">
        <div id="cardAcceuil1" class="cardAcceuil">
          <img class="imageProduitAcceuil" src="../assets/images/vehicule2.jpg" alt="Véhicule">
          <div class="cardFlexContainer">
            <div class="cardFlex">
              <h3 class="titleAcceuil">BMW 535I, NAVI, LEATHER, ABS</h3>
              <a class="hrefButton" href="#">
                <button class="priceButtonAcceuil">5 500&euro;</button>
              </a>
            </div>
          </div>
        </div>
        <div id="cardAcceuil2" class="cardAcceuil">
          <img class="imageProduitAcceuil" src="../assets/images/vehicule2.jpg" alt="Véhicule">
          <div class="cardFlexContainer">
            <div class="cardFlex">
              <h3 class="titleAcceuil">BMW 328i, SPORT LINE BODY KIT</h3>
              <a class="hrefButton" href="#">
                <button class="priceButtonAcceuil">8 000&euro;</button>
              </a>
            </div>
          </div>
        </div>
        <div id="cardAcceuil3" class="cardAcceuil">
          <img class="imageProduitAcceuil" src="../assets/images/vehicule2.jpg" alt="Véhicule">
          <div class="cardFlexContainer">
            <div class="cardFlex">
              <h3 class="titleAcceuil">FORD EXPLORER 2015 4WD</h3>
              <a class="hrefButton" href="#">
                <button id="priceButtonAcceuil" class="priceButtonAcceuil"><span
                    style="color: #000000; ">9 000&euro;</span><br>8 200&euro;</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div><!--Ici se termine le #container4-->
    <div id="container5">
      <h2>Pourquoi nous choisir?</h2>
      <div id="container5Grid">
        <div class="pourquoiChoisir">
          <img class="container5Image" src="../assets/images/icon1.png" alt="etiquette">
          <div class="container5Text">
            <h4>FINANCEMENT</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus hic tempora vitae iusto velit alias fugit tenetur! Quidem neque maiores magnam odit voluptas suscipit earum</p>
          </div>
        </div>
        <div class="pourquoiChoisir">
          <img class="container5Image" src="../assets/images/icon2.png" alt="curseur">
          <div class="container5Text">
            <h4>RÉACTIVITÉ DE<br>
              L'ÉQUIPE TECHNIQUE</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus hic tempora vitae iusto velit alias fugit tenetur! Quidem neque maiores magnam odit voluptas suscipit earu</p>
          </div>
        </div>
        <div class="pourquoiChoisir">
          <img class="container5Image" src="../assets/images/icon3.png" alt="bulle">
          <div class="container5Text">
            <h4>A L'ÉCOUTE DE NOTRE<br>
              CLIENTÈLE</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus hic tempora vitae iusto velit alias fugit tenetur! Quidem neque maiores magnam odit voluptas suscipit earum</p>
          </div>
        </div>
        <div class="pourquoiChoisir">
          <img class="container5Image" src="../assets/images/icon4.png" alt="calepin">
          <div class="container5Text">
            <h4>SERVICE &amp;<br>
              MAINTENANCE</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus hic tempora vitae iusto velit alias fugit tenetur! Quidem neque maiores magnam odit voluptas suscipit earum</p>
          </div>
        </div>
      </div>
      <a id="hrefButtonContact" href="#"><button id="buttonContact">CONTACTEZ NOUS</button></a>
    </div><!--Ici se termine le #container5-->
    <div id="container6">
      <div id="text7Container">
        <div id="text7">
          <h4>CLUB AUTO<br>
            <span style="color: #FFFFFF; ">VENTE ET LOCATION</span></h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium animi nostrum labore eos ut, magnam similique. Veritatis itaque officiis aliquam, repudiandae optio quidem tenetur! Natus nisi eos vitae! Labore, autem.</p>
        </div>
      </div>
    </div><!--Ici se termine le #container6-->
  </section><!--Ici se termine le #pagecontent-->


</template>

<style scoped>

#imageBackground {
  width: 100%;
  height: 50vh;
  object-fit: cover;
}
.titre h2{
  text-align: center;
  position: relative;
  top: -10px;
  color: white;
  font-size: 2em;
  background-color: #232628;
  padding: 1em;
}
.container2{
  display: flex;
  flex-direction: column;
}
.image2{
  display: flex;
  flex-direction: row;
}
.image2 img{
  width: 25%;
  margin-left: 5%;
  object-fit: cover;
}
.titre{
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.text1{
  width: 50%;
  padding: 5%;
  text-align: center;
  margin: auto;
}
.text1 h2{
  font-size: 2em;
  margin-bottom: 5%;
}
.text1 h3{
  margin-bottom: 5%;
}
.text3{
  display: flex;
  flex-direction: row;
  padding: 5%;
  text-align: center;
  margin: auto;
}
.text3 h2{
  font-size: 2em;
  margin-bottom: 5%;
}
.text3 p{
  margin-bottom: 5%;
}
.image3 img{
  width: 90%;
  object-fit: cover;
}
.column3{
  display: flex;
  flex-direction: column;
}
.locationChoice img{
  object-fit: cover;
  width: 100%;
  height: 80vh;
}

.locationChoicetext1{
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 4%;
  background-color:hsla(39, 95%, 60%, 0.82);;
}
.locationChoicetext1 h2{
  font-size: 2em;
  margin-bottom: 1%;
}
.locationChoicetext1 p{
  font-size: 1em;
  color:white;
}
.locationChoicetext2{
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 4%;
background-color: hsla(0, 100%, 64%, 0.82);
}

.locationChoicetext2 h2{
  font-size: 2em;
  margin-bottom: 1%;
}
.locationChoicetext2 p{
  font-size: 1em;
  color:white;
}
.placementText{
  position: relative;
  top: -550px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.textBlock{
  height: 80vh;
}
</style>
