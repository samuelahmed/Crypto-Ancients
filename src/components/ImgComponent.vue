<template>
<q-card
class="card text-black q-ma-sm"
style="height: 325px; width: 250px"
>
  <q-card-section class="q-pa-none">
    <div class="q-pa-sm final">
      <div class="flex flex-center q-pr-sm text-h6">
      {{ edition }}
      </div> 
      <div class="flex flex-center">
        <n-image
          width="69"
          height="69"
          :src="getImage()"
        />   
      </div>

      <div class="flex flex-center q-pt-sm text-h7">
          {{ attributes[0].trait_type }}: {{ attributes[0].value }}
      </div> 

      <div class="q-pt-sm"> 
          <div class="row text-center">
            <div class="col-6 text-left q-pl-md">
              <p>{{ attributes[1].trait_type }}: {{ attributes[1].value }}</p> 
              <p>{{ attributes[3].trait_type }}: {{ attributes[3].value }}</p> 
              <p>{{ attributes[4].trait_type }}: {{ attributes[4].value }}</p> 
              <p>{{ attributes[5].trait_type }}: {{ attributes[5].value }}</p> 

            </div>
            <div class="col-6 text-left q-pl-sm">
              <p>{{ attributes[6].trait_type }}: {{ attributes[6].value }}</p> 
              <p>{{ attributes[7].trait_type }}: {{ attributes[7].value }}</p> 
              <p>{{ attributes[8].trait_type }}: {{ attributes[8].value }}</p> 
              <p>{{ attributes[9].trait_type }}: {{ attributes[9].value }}</p> 
            </div>
          </div>
      </div>
    </div>
  </q-card-section>
</q-card>
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
        trait_type: String,
        value: String

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



</style>





