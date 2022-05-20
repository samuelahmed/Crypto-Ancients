<template>
  <q-img id="rcorners1" class="q-pt-xl" width="69px" height="69px" :src="getImage()"></q-img>
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
    trait_type: String,
    value: String
  },
  methods: {
    getImage: function () {
      // console.log(this.attributes)
      return `images/${this.edition}.png`
    }
  }
})
</script>

<style lang="sass" scoped>
#rcorners1 
  border-radius: 19px
</style>