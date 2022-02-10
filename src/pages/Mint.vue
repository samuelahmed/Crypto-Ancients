<template>
<div class="background-image" style="width: 100vh; height: 100vh; position: fixed"></div>
<div class="q-mt-xl">

  <div class="flex flex-center">
<p class="fontchange flex flex-center q-mt-xl" style="font-size: 48px; text-align: center;">
Mint
</p>
</div> 
<q-page class="flex-center">
<div div id="q-app">
<div class="q-pa-xl row items-start q-gutter-md flex flex-center">
<q-card class="my-card" flat bordered>
<q-card-section horizontal>
  <div class="flex flex-centered">
  <q-card-section class="col-4 flex flex-center">
<q-img
  class="rounded-borders"
  src="~assets/378.png"
  style="width: 400px"
  >
</q-img>
</q-card-section>
<q-card-section class="q-pt-md">
<!-- <div class="text-h5 q-mt-sm q-mb-xs" style="text-align: center">
Mint
</div> -->
<div class="text-caption">
 <div class="col-12 col-md-10">
    <p class="fontchange q-mt-xl" style="font-size: 20px; text-align: left;">
    There are 10,000 Crypto Ancients 
    </p>
       <p class="fontchange q-mt-lg" style="font-size: 20px; text-align: left;">
      Each is unique 69x69 pixel art
        </p>
         <p class="fontchange q-mt-lg" style="font-size: 20px; text-align: left;">
      Full ownership with 0% Creator Royalty
    </p>
      <p class="fontchange q-mt-lg" style="font-size: 20px; text-align: left;">
      Mint yours for 0.01 ETH
    </p>
  </div>

<div class="flex flex-center">
<q-btn align="right" id="enableEthereumButton" color="primary">
  Mint
</q-btn>
</div>
 
</div>      
</q-card-section>
</div>
</q-card-section>
<q-separator>
</q-separator>
<!-- <q-card-actions>

</q-card-actions> -->
</q-card>

</div>
</div>

</q-page>
</div>

</template>

<script>
import { defineComponent } from 'vue'
import Web3 from "../components/Web3.vue"
import detectEthereumProvider from '@metamask/detect-provider'

export default defineComponent({
name: 'PageIndex'
})
</script>

<style lang="sass" scoped>
.background-image
  background-image: url(~assets/sunRed.png)
  background-repeat: no-repeat
  background-size: contain  
  z-index:-1


.fontchange
  font-family: 'Titillium Web'

</style>