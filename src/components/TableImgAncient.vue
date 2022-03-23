<template>
  <q-img class=" q-pt-xl" width="69px" height="69px" :src="getImage()"></q-img>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TableImgAncient',
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
    trait_type: {
      type: Object
    },
    value: {
      type: Object
    },
  },
  methods: {
    getImage: function () {
      // console.log("in getImage method ")
      return `images/${this.edition}.png`
    }
  }
})
</script>
