<template>
    <div class="background-image" style="width: 100vh; height: 100vh; position: fixed"></div>

  <div class="q-pa-md q-gutter-md stack-top">
    <div class="row justify-between">


   <div class="q-pa-md">
<div class="row flex flex-center">
  <div class="col-12 col-md-12">
         <p class="fontchange" style="font-size: 100px; text-align: center;">
    CRYPTO ANCIENTS
        </p>
    <p class="fontchange" style="font-size: 28px; text-align: left;">
    Crypto Ancients are for those passionate to improve the world. People, artists, leaders, workers, lovers, geniuses, degens and all are welcome so long as you devote your life to progress the world.
    </p>
       <p class="fontchange" style="font-size: 28px; text-align: left;">
    No roadmap or goals, the jpegs simply are themselves. NFTs living on the Ethereum blockchain hoping to inspire people to stand strong and make the hard decisions for the joy of our species.
    </p>
  </div>

  <div class="col-12 col-md-6">

          <img
    alt="Quasar logo"
    src="~assets/centerPic.png"
    style="width: 400px; height: 400px"
    >
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