<template>
    <div class="background-image" style="width: 100vh; height: 100vh; position: fixed"></div>
    <div class="q-mt-xl">
    <div class="row justify-between">
   <div class="q-pa-xl">
<div class="row flex flex-center">
  <div class="col-12 col-md-12">
         <p class="fontchange" style="font-size: 55px; text-align: center;">
    CRYPTO ANCIENTS
        </p>
    <p class="fontchange q-mt-xl" style="font-size: 26px; text-align: left;">
    Crypto Ancients is for those passionate to improve the world. People, artists, leaders, workers, lovers, geniuses, degens and all are welcome.
    </p>
       <p class="fontchange q-mt-lg" style="font-size: 22px; text-align: left;">
    No roadmap, the jpegs are simply themselves, tokens living on the Ethereum blockchain hoping to inspire people.
    </p>
         <p class="fontchange q-mt-lg" style="font-size: 22px; text-align: left;">
    Arranged is a short story on Bitcoin, Ethereum, NFTs and how they relate to our world. Where do you stand?  
    </p>
  </div>

  <div class="col-12 col-md-6 q-mt-xl">

          <q-img
    alt="Quasar logo"
    src="~assets/cryptoAncientLogo.png"
     />
  </div>
</div>
</div>

    </div>
  </div>

 
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
name: 'PageIndex'
})
</script>








  
<style lang="sass" scoped>
  
.fontchange
    font-family: 'Titillium Web'

.background-image
  //WHY DOES STICKY NOT WORK FOR SUN ONLY IT EITHER WORKS FOR ALL OR NOTHING

  background-image: url(~assets/vueBackgroundSun.png)
  // height: 100vh
  // width: 100vh
  background-repeat: no-repeat
  background-size: contain  
  z-index:-1

</style>