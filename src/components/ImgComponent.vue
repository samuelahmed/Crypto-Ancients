<template>



<div class="q-pa-sm final" height="69" width="69" >

  <n-image
    width="69"
    height="69"
    :src="`https://gateway.pinata.cloud/ipfs/QmVuuRsSJRB4REFA9jgfyJzEPBnJU4qwW3tdgZHNUWcKMN/${edition}.png`"
  />
             
             </div>

</template>

<script>
  import { defineComponent } from 'vue'
  import { NImage } from 'naive-ui'
  

export default defineComponent({
    components: {
        NImage
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
    },
data: function () {
    return {
        showText: false,
    }
  },
})
</script>

<style>
.final {
  float: left;
}

</style>





