<template>
  <div class="q-pa-sm final">
    <n-image
      width="69"
      height="69"
      :src="getImage()"
    />
    <div class="flex flex-center"> 
      {{ edition }} 
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { NImage, NImageGroup } from 'naive-ui'

export default defineComponent({
  components: {
    NImage,
    NImageGroup,
  },
  name:  [
    'imgComp'
  ],
  props: {
    edition: Number,
    image: String,
    name: String,
    description: String,
    dna: NaN,
    date: Number,
    attributes: Array,
    compiler: String,
  },
  methods: {
    getImage: function () {
      // console.log("in getImage method ")
      return `images/${this.edition}.png`
    }
  }
})
</script>

<style>
.final {
  float: left;
}
</style>





