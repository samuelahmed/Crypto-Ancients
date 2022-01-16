<template>
  <q-page class="flex flex-center" style="margin-top: 10vh">
    <img
      alt="Quasar logo"
      src="~assets/nftHumans.png"
      style="width: 400px; height: 400px"
    />



    <div id="q-app" style="min-height: 100vh; min-width: 600px;">
      <div class="q-pa-md row items-start q-gutter-md">
    <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        The Crypto Ancients foundation is for those passionate to improve the world. People, artists, leaders, workers, lovers, geniuses, degens and all are welcome so long as you make no excuses and devote your life to fighting greed and evil.
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
  max-width: 250px
</style>