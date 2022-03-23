<template>
  <div class="flex flex-center q-pt-xl">
    <q-img class="q-pt-xl rounded-borders" width="300px" :src="getImage()"></q-img>
  </div>
  <div class="text-h5 flex flex-center">
    <div class="row text-left">
      <div class="col-12 flex flex-center q-pt-lg">
        <p>{{ name }}</p>
      </div>
      <div class="col-12 flex flex-center q-pt-none">
        <p class="text-secondary text-center">Attributes</p>
      </div>
      <div class="col-6 q-pl-xl">
        <p>{{ attributes[1].trait_type }}: {{ attributes[1].value }}</p>
        <p>{{ attributes[3].trait_type }}: {{ attributes[3].value }}</p>
        <p>{{ attributes[4].trait_type }}: {{ attributes[4].value }}</p>
        <p>{{ attributes[5].trait_type }}: {{ attributes[5].value }}</p>
      </div>
      <div class="col-6">
        <p>{{ attributes[6].trait_type }}: {{ attributes[6].value }}</p>
        <p>{{ attributes[7].trait_type }}: {{ attributes[7].value }}</p>
        <p>{{ attributes[8].trait_type }}: {{ attributes[8].value }}</p>
        <p>{{ attributes[9].trait_type }}: {{ attributes[9].value }}</p>
      </div>
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

<style scoped>

</style>
