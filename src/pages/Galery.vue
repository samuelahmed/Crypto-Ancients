<template>
    <div class="background-image" style="width: 100vh; height: 100vh; position: fixed"></div>

  <div class="q-mt-xl">
    <div class="flex flex-center">
     <p class="fontchange q-mt-xl" style="font-size: 48px; text-align: center;">
      Galery
    </p>
        <!-- <p class="fontchange q-mt-lg" style="font-size: 22px; text-align: left;">
    Arranged is a short story on Bitcoin, Ethereum, NFTs and how they relate to our world. Where do you stand?  
    </p> -->
    </div> 


<div class="q-pa-xl">
<q-infinite-scroll @load="onLoad" :offset="250">
<imgComp v-for="item in items" v-bind="item" v-bind:key="item.edition" />
</q-infinite-scroll>
</div>
</div>
</template>

<script>
import imgComp from "../components/ImgComponent.vue"

export default {
name: 'Galery',
components: {
imgComp
},
data() {
return {
items: []
}},
methods: {
async onLoad()  {
  const res = await fetch("https://gateway.pinata.cloud/ipfs/QmZgb8gMhMnsc3sZUf5aargWKi35jS5pc9AJj9GYVKrJ1p/_metadata.json");
  this.items = await res.json();
}}}
</script>


<style lang="sass" scoped>
.background-image
  background-image: url(~assets/sunPink.png)
  background-repeat: no-repeat
  background-size: contain  
  z-index:-1

.fontchange
    font-family: 'Titillium Web'
</style>


