<template>
  <div class="background-image" style="width: 100vh; height: 100vh; position: fixed">
  <PinkParticles />
  </div>
  <div class="q-mt-none">
    <div class="flex flex-center">
      <q-card-section style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
        <p class="fontchange q-mt-xl" style="font-size: 48px; text-align: center;">
          Gallery
        </p>
      </q-card-section>
    </div> 
    <div class="row fontchange q-pa-xl">
      <div class="col-2">
        <p>Add Search Menu Here</p>
      </div>
      <div class="col-10">
        <div class="q-pa-md">
          <q-infinite-scroll @load="onLoad" :offset="250">
              <n-image-group>
                  <imgComp v-for="item in items" v-bind="item" v-bind:key="items" />
              </n-image-group>    
          </q-infinite-scroll>     
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgComp from "../components/ImgComponent.vue"
import PinkParticles from "../components/PinkParticles"
import { NImageGroup } from 'naive-ui'


export default {
  name: 'Galery',
  components: {
    imgComp,
    PinkParticles,
    NImageGroup
  },
  data() {
    return {
      items: [],
      }
    },
    methods: {
      async onLoad()  {
        const res = await fetch("https://raw.githubusercontent.com/samuelahmed/quasar-vue-cryptoancient-v1.0/master/public/img/metadata.json");
        this.items = await res.json();
    },
  }
}
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


