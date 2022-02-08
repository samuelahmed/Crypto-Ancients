<template>
    <div class="background-image" style="width: 100vh; height: 100vh; position: fixed"></div>
<q-page class="flex flex-center q-mt-xl">
<div div id="q-app">
<div class="q-pa-md row items-start q-gutter-md">
<q-card class="my-card" flat bordered>
<q-card-section horizontal>
<q-card-section class="q-pt-xl">
<div class="text-h5 q-mt-sm q-mb-xs" style="text-align: center">
  Mint
  </div>
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
  >
</q-img>
</q-card-section>
</q-card-section>
<q-separator>
</q-separator>
<q-card-actions>
<q-btn id="enableEthereumButton" flat color="primary">
  Mint
</q-btn>
</q-card-actions>
</q-card>
</div>
</div>
</q-page>
</template>

<script>
import { defineComponent } from 'vue'
import Web3 from "../components/Web3.vue"
import detectEthereumProvider from '@metamask/detect-provider'

export default defineComponent({
name: 'PageIndex',
components: {
Web3,
detectEthereumProvider
},
mounted:function(){
this.method1() //method1 will execute at pageload
},
methods:{
method1: async function detectEthereumProvider(){
  let provider = await detectEthereumProvider();
  if (provider) {
  // From now on, this should always be true:
  // provider === window.ethereum
  startApp(provider); // initialize your app
  } else {
  console.log('Please install MetaMask!');
  return
}}}})
console.log("iamhere")
console.log("Why is nothing happening above??")
</script>

<style lang="sass" scoped>
.background-image
  background-image: url(~assets/vueBackgroundSun.png)
  background-repeat: no-repeat
  background-size: contain  
  z-index:-1
</style>