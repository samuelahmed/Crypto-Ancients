<template>
<!-- <div class="container">
  <Renderer resize="window" orbit-ctrl>
    <Camera :position="{ z: 10 }" />
    <Scene>
      <PointLight :position="{ y: 50, z: 50 }" />
      <Box>
        <LambertMaterial />
      </Box>
    </Scene>
  </Renderer>
</div> -->

<!-- <button @click="pause()"> hello</button> -->
<div class="background-image" style="width: 100vh; height: 100vh; position: fixed">
<Particles
 
    id="tsparticles"
      :particlesInit="particlesInit"
                :particlesLoaded="particlesLoaded"
    :options="{
        fpsLimit: 60,
       particles: {
       number: {
       value: 1,
       density: {
        enable: true,
        value_area: 800
         }
         },
    color: {
      value: '#ffcc00',
      animation: {
        enable: true,
        speed: 5,
        sync: true
      }
       },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 1,
      random: false,
      animation: {
        enable: true,
        speed: 0.5,
        minimumValue: 10,
        sync: false
      }
    },
    size: {
      value: 1,
      random: { enable: true, minimumValue: 4 },
      animation: {
        enable: false,
        speed: 7,
        minimumValue: 1,
        sync: false
      }
    },
    life: {
      duration: {
        value: 1
      },
      count: 1
    },
    move: {
      angle: {
        value: 90,
        offset: 0
      },
      enable: true,
      gravity: {
        enable: true,
        acceleration: -1,
        inverse: true,
      },
      speed: 10,
      direction: 'side',
      random: true,
      straight: false,
      size: true,
      outModes: {
        default: 'destroy',
        bottom: 'none'
      },
      attract: {
        enable: false,
        distance: 300,
        rotate: {
          x: 0,
          y: 0,
        }
      }
    }
  },

  detectRetina: true,
  background: {
  },
  emitters: {
    direction: 'bottom-right',
    rate: {
      quantity: 50,
      delay: 0
    },
    size: {
      width: 100,
      height: 10
    },
    position: {
      x: -38,
      y: 10
    }}



    }"
  />

    </div>
    


    <div id="absolute" class="q-mt-xl">


   <div class="q-pa-xl flex flex-center">
<div class="row flex flex-center">
  <div class="col-12 col-md-10 flex-center">


      
  	<!-- <button @click="show = !show">Toggle</button> -->


  <Transition
    name="dropdown"
    appear
    enter-active-class="animate__animated animate__backInDown animate__slow"
  >
    <p v-if="show">

 

          <p class="titlefont" style="font-size: 48px; text-align: center;">

CRYPTO ANCIENTS

        </p>

    </p>
  </Transition>
  

    <Transition
    name="dropdown"
    appear
    enter-active-class="animate__animated animate__fadeIn animate__slow animate__delay-3s"
  >
    <p v-if="show">
    <p class="fontchange q-mt-xl" style="font-size: 20px; text-align: left;">
    For those passionate to improve the world. People, artists, leaders, workers, lovers, geniuses, degens and all are welcome.
    </p>
    </p>
  </Transition>

    <Transition
    name="dropdown"
    appear
    enter-active-class="animate__animated animate__fadeIn animate__slow animate__delay-3s"
  >
    <p v-if="show">

       <p class="fontchange q-mt-lg aling-left" style="font-size: 20px; text-align: left;">
    No roadmap. No discord. No community. The jpegs are simply themselves, tokens living on the Ethereum blockchain hoping to inspire people.
    </p>
    </p>
  </Transition>


      <Transition
    name="dropdown"
    appear
    enter-active-class="animate__animated animate__fadeIn animate__slow animate__delay-3s"
  >
    <p v-if="show">


         <p class="fontchange q-my-lg align-left" style="font-size: 20px; text-align: left;">
    Explore the story of blockchains and our gallery. If it feels right you can also mint your very own crypto ancient.  
    </p>
    </p>
  </Transition>

    
   
 <Transition
    name="dropdown"
    appear
    enter-active-class="animate__animated animate__fadeInLeftBig animate__slow animate__delay-5s"
  >
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
  </Transition>

  
        
  </div>
</div>
</div>

  </div>

 
</template>

<script>




import { defineComponent } from 'vue'
import { Box, Camera, LambertMaterial, PointLight, Renderer, Scene } from 'troisjs';

export default defineComponent({
    components: { Box, Camera, LambertMaterial, PointLight, Renderer, Scene },

name: 'PageIndex',
  data() {
    return {
      show: true
    }
  }
})




</script>








  
<style lang="sass" scoped>
.fontchange
    font-family: monospace

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


@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"



</style>