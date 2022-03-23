<template>
<div class="column fontchange flex flex-center">
<div class="col text-h4 flex flex-center q-pt-md">
  <p>{{ name }}</p>
</div>
<div class="flex flex-center q-pt-none">
  <q-img class="q-pt-xl rounded-borders" width="369px" height="369px"  :src="getImage()"></q-img>
</div>
  <div class="text-h6">
    <pre class="fontchange q-mb-none"><span class="text-h5">{{ attributes[0].trait_type }}: </span>{{ attributes[0].value }}</pre> 
  </div>
<div class="text-h6 flex flex-center">
  <div class="col-10 text-left text-h6 q-mr-sm ">
    <pre class="fontchange"><span class="text-h5">{{ attributes[1].trait_type }}: </span>{{ attributes[1].value }}</pre>
    <p><pre class="fontchange"><span class="text-h5">{{ attributes[3].trait_type }}: </span>{{ attributes[3].value }}</pre></p>
    <p><pre class="fontchange"><span class="text-h5">{{ attributes[4].trait_type }}: </span>{{ attributes[4].value }}</pre></p>
    <p><pre class="fontchange"><span class="text-h5">{{ attributes[5].trait_type }}: </span>{{ attributes[5].value }}</pre></p>
  </div>
  <div class="col-10 text-left text-h6 q-ml-sm ">
    <pre class="fontchange"><span class="text-h5">{{ attributes[6].trait_type }}: </span>{{ attributes[6].value }}</pre>
    <p><pre class="fontchange"><span class="text-h5">{{ attributes[7].trait_type }}: </span>{{ attributes[7].value }}</pre></p>
    <p><pre class="fontchange"><span class="text-h5">{{ attributes[8].trait_type }}: </span>{{ attributes[8].value }}</pre></p>
    <p><pre class="fontchange"><span class="text-h5">{{ attributes[9].trait_type }}: </span>{{ attributes[9].value }}</pre></p>
  </div>
</div>
<div class="text-h6">
  <a :href="`https://testnets.opensea.io/assets/0x724b1b31CEcc6036F261d2730952Eefaf1444bF9/${edition}`" target="_blank">Visit on Opensea</a>  
</div>

</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AncientDetailsHeader',
  props: {
    image: {
      type: String
    },
    name: {
      type: String
    },
    attributes: {
      type: Array
    },
    edition: {
      type: Number
    },
    trait_type: String,
    value: String
  },
  methods: {
    getImage: function () {
      // console.log("in getImage method ")
      return `images/${this.edition}.png`
    },
  }
})
</script>

<style lang="sass" scoped>

.fontchange
    font-family: 'Titillium Web'

$link-color: #0000FF
$hover-color: #00009c
$visited-color: none

a
  color: $link-color
  text-decoration: none
  background: transparent
  transition: background 1s ease, padding 1s ease

  &:hover
    color: #00009c
    padding: 4px 0
  
  &:visited
    color: $visited-color
</style>
