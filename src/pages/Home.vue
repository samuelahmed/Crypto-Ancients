<template>
  <div class="background-image" style="width: 100vh; height: 100vh; position: fixed">
  <YellowParticles />
  </div>
  <div id="absolute" class="q-mt-none">
    <div class="q-pa-xl flex flex-center">
      <div class="row flex flex-center">
        <div class="col-12 col-md-10 flex-center">
          <p v-if="show">
            <q-card-section style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
              <p class="cafont" style="font-size: 48px; text-align: center;">
                Crypto Ancients
              </p>
            </q-card-section>
          </p>
          <q-card-section class="q-mt-sm" style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
            <p v-if="show">
              <p class="fontchange text-h6" style="text-align: left;">
                For those passionate to improve the world. People, artists, leaders, workers, lovers, geniuses, degens and all are welcome.
              </p>
            </p>
          </q-card-section>
          <q-card-section class="q-mt-sm" style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
            <p v-if="show">
              <p class="fontchange text-h6" style="text-align: left;">
              No roadmap. No discord. The jpegs are simply themselves, tokens living on the Ethereum blockchain hoping to inspire people.
              </p>
            </p>
          </q-card-section>
          <q-card-section class="q-mt-sm" style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
            <p v-if="show">
              <p class="fontchange text-h6" style="text-align: left;">
                Explore the story of blockchains and our gallery. If it feels right you can also mint your very own crypto ancient.  
              </p>
            </p>
          </q-card-section>
          <p v-if="show">
            <div class="row flex flex-center q-mt-xl">
              <q-img
                class="caImg"
                alt="Quasar logo"
                src="~assets/homeCABlue.png"
                style="height: 200px; max-width: 200px"
              />
              <q-img
                class="caImg"
                alt="Quasar logo"
                src="~assets/homeCAPurple.png"
                style="height: 200px; max-width: 200px"
              />
              <q-img
                class="caImg"
                alt="Quasar logo"
                src="~assets/homeCASwirl.png"
                style="height: 200px; max-width: 200px"
              />
            </div>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import YellowParticles from "../components/YellowParticles"

export default defineComponent({
  name: 'PageIndex',
  components: {
    YellowParticles
  },
  data() {
    return {
      show: true
    }
  }
})
</script>

<style lang="sass" scoped>
.fontchange
    font-family: 'Titillium Web'

.titlefont
    font-family: 'Titillium Web'
      z-index: 9999

.background-image
  background-image: url(~assets/sunGolden.png)
  background-repeat: no-repeat
  background-size: contain  
  z-index: -2

.caImg
  margin-left: 25px
  margin-right: 25px

.tsparticles
  width: 100%
  height: 100%
  z-index: -9999

.absolute
  z-index: 9999

.cafont
    font-family: 'Titillium Web'

@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
</style>