<template>
<!-- <q-page class="row"> -->

<!-- <div
class="bg-blue col-3"
style="height: 50px"
 /> -->


  <q-page class="flex flex-center">
  
  <div id="q-app">
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-h5 q-mt-sm q-mb-xs">Mint</div>
          <div class="text-caption text-grey">
            Starting sometime soon you can mint your own Crypto Ancient. Proudly display it as your new profile picture to show your values and membership in the foundation. While you are allowed to mint up to 69 per address, please only hold a single one by 2025 to make sure our foundation is as vibrant and diverse as possible. When all have been minted the yellow button will disappear.
Each is 69x69 pixels and provides foundation membership to owner
Hot on the blockchain and in your collection
Minting requires Metamask, join the web3 revolution!
Minting creates and automatically transfers to you a single random Crypto Ancient NFT
Have full ownership of your Crypto Ancient and 0% Creator Royalty
Currently only Live on Rinkeby Test Network
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="~assets/MintUnderConstruction.png"
          ></q-img>
        </q-card-section>
      </q-card-section>
      <q-separator></q-separator>
      <q-card-actions>
        <q-btn flat color="primary">
          Mint
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
  </div>


  <!-- </q-page> -->
  </q-page>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex'
})

</script>
