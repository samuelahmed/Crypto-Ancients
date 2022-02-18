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

 <Particles
    id="tsparticles"
    :options="{
      fpsLimit: 60,
      interactivity: {
        detectsOn: 'window',
        events: {
          onClick: {
            enable: true,
            mode: 'push'
          },
          onHover: {
            enable: true,
            mode: 'repulse'
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
            speed: 3
          },
          push: {
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: '#FFD700'
        },
        links: {
          color: '#FFD700',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        collisions: {
          enable: true
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: false,
          speed: 6,
          straight: false
        },
        number: {
          density: {
            enable: true,
            value_area: 800
          },
          value: 80
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: 'circle'
        },
        size: {
          random: true,
          value: 5
        }
      },
      detectRetina: true
    }"
  />

    <div class="background-image" style="width: 100vh; height: 100vh; position: fixed"></div>
    



    <div class="q-mt-xl">


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

.background-image
  background-image: url(~assets/sunGolden.png)
  // height: 100vh
  // width: 100vh
  background-repeat: no-repeat
  background-size: contain  
  z-index:-1

.caImg
  margin-left: 25px
  margin-right: 25px


@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"



</style>