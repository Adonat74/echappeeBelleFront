<script setup>
import { ref, onMounted } from 'vue';
import { fetchVehicles } from "@/services/modules/vehiclesAPICalls.js";

const vehicles = ref([]);

onMounted(async () => {
  const result = await fetchVehicles();
  if (result) {
    vehicles.value = result;
  }
  console.log(vehicles.value);
});

</script>

<template>

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

    <div class="container4">
            <h2>VEHICULES RECENTS</h2>
        <div class="allVehicle">
          <div class="choiceVehicle" v-for = "(vehicle, index) in vehicles.slice(0,3)" :key="index">
                    <img class="imageProduitAcceuil" src="../assets/images/vehicule2.jpg" alt="Véhicule">
                          <h3 class="titleAcceuil">{{vehicle.brand}} {{vehicle.model}}<br>{{vehicle.plateNumber}}<br>Taxes Horses {{vehicle.taxHorses}}</h3>
                          <a class="hrefButton" href="#"><button class="priceButtonAcceuil">{{(vehicle.pricePerKilometerInCents/100).toFixed(2)}}€/km</button></a>
          </div>
        </div>
    </div>
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
  height: 90vh;
}

.container4{
  background-color: #232628;
  height: 90vh;
}
.container4 h2{
  text-align: center;
  font-size: 3em;
  padding-top: 2%;
 padding-bottom: 2%;
  color: white;
}
.allVehicle{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

}
.choiceVehicle{
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 2em;
  color: white;
}
.choiceVehicle button{
  width: 20%;
  font-size: 0.7em;
}

.choiceVehicle img{
  width: 90%;
  margin-left: 5%;
}

</style>
