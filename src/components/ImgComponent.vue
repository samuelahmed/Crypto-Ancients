<template>
<div class="q-pa-sm final" height="69" width="69" >

  <n-image
    width="69"
    height="69"
    :src="getImage()"
  />   
  
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
    name: 'imgComp',
    props: {
        edition: Number,
        image: String,
        name: String,
        description: String,
        dna: NaN,
        date: Number,
        attributes: Array,
        compiler: String
        // getImage:function () {console.log("in getImage"); return `assets/${edition}.png`}
    },
    methods: {
      getImage: function () {
              console.log("in getImage method ")
              return `images/${this.edition}.png`
          }
    },
    data () {
      return {
          showText: true,
      }
    }
})
</script>

<style>
.final {
  float: left;
}
</style>





