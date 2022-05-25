<template>
  <div class="background-image" style="width: 100vh; height: 100vh; position: fixed">
    <BlueParticles />
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
import BlueParticles from "../components/BlueParticles"
import GalleryIndex from '../components/GalleryIndex.vue'


export default {
  name: 'Galery',
  components: {
    BlueParticles,
    GalleryIndex
  },
}
</script>

<style lang="sass" scoped>
.background-image
  background-image: url(~assets/sunMetaverse.png)
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


