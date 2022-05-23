<template>
  <div class="background-image" style="width: 100vh; height: 100vh; position: fixed">
    <PinkParticles />
  </div>
  <div class="q-mt-none">
    <div class="flex flex-center">
      <q-card-section>
        <p class="fontchange q-mt-xl" style="font-size: 48px; text-align: center;">
          Gallery
        </p>
      </q-card-section>
    </div> 
    <div class="row fontchange q-pa-none flex flex-center">
      <GalleryIndex />
    </div>
  </div>
</template>

<script>
import PinkParticles from "../components/PinkParticles"
import GalleryIndex from '../components/GalleryIndex.vue'


export default {
  name: 'Galery',
  components: {
    PinkParticles,
    GalleryIndex
  },
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

.wrap 
  display: flex
  flex-direction: row
  flex-wrap: wrap
</style>


