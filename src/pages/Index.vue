<template>
  <q-page class="flex flex-center" style="margin-top: 10vh">
    <img
      alt="Quasar logo"
      src="~assets/nftHumans.png"
      style="width: 400px; height: 400px"
    />



    <div id="q-app">
      <div class="q-pa-md row items-start q-gutter-md" style="height: 250px">
    <q-card
      class="my-card text-black"
      style="background: radial-gradient(circle, #0072C5 0%, #FFFFFF 100%)"
    >
      <q-card-section>
        <div class="text-h6">Foundation</div>
        <div class="text-subtitle2">Nodes of Truth</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        The Crypto Ancients foundation is for those passionate to improve the world. People, artists, leaders, workers, lovers, geniuses, degens and all are welcome so long as you make no excuses and devote your life to fighting greed and evil.
      </q-card-section>
       </q-card>


    <q-card
      class="my-card text-black"
      style="background: radial-gradient(circle, #596EBF 0%, #FFFFFF 100%)"
    >
      <q-card-section>
        <div class="text-h6">Origin</div>
        <div class="text-subtitle2">Web3 Pioneers</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
Inspired by CryptoPunks, Nouns, and other pioneering projects, Crypto Ancients are resurrected to enjoy the sun with us, their decendents. A collection of 10,000 NFTs hand-drawn from the beyond.
      </q-card-section>
       </q-card>



    <q-card
      class="my-card text-black"
      style="background: radial-gradient(circle, #FFD700 0%, #FFFFFF 100%)"
    >
      <q-card-section>
        <div class="text-h6">Reflection</div>
        <div class="text-subtitle2">Who are you?</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
Every ancient is unique and wants to build a bond with you. Ownership of a Crypto Ancient NFT is membership to the foundation.
      </q-card-section>
       </q-card>


     </div>
      </div>

   







  </q-page>
  <!-- <div class="q-pa-md" style="background-color: pink;">

    <div class="row">
      <div class="col" style="height: 500px; width 500px;"> -->
        









      <!-- </div> -->
      <!-- <div class="col" style="height: 150px; width 500px;">
        .col
      </div>
    </div>

  </div> -->

  
</template>

<script>
import { defineComponent, } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>



<style lang="sass" scoped>
.my-card
  width: 100%
  height: 100%
  max-width: 350px
  max-height: 350px
</style>