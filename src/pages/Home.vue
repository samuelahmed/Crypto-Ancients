<template>
<div class="background-image" style="width: 100vh; height: 100vh; position: fixed">
  <Particles
 
    id="tsparticless"
    :options="{
   fps_limit: 60,
  interactivity: {
    detect_on: 'canvas',
    events: {
      onclick: { enable: true, mode: 'repulse' },
      onhover: {
        enable: true,
        mode: 'bubble',
        parallax: { enable: false, force: 2, smooth: 10 }
      },
      resize: true
    },
    modes: {
      bubble: { distance: 250, duration: 2, opacity: 0, size: 0, speed: 3 },
      grab: { distance: 400, line_linked: { opacity: 1 } },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
      repulse: { distance: 400, duration: 0.4 }
    }
  },
  particles: {
    color: { value: '#ffcc00' },
    line_linked: {
      color: '#ffcc00',
      distance: 150,
      enable: false,
      opacity: 0.4,
      width: 1
    },
    move: {
      size: true,
      attract: { enable: false, rotateX: 600, rotateY: 600 },
      bounce: false,
      direction: 'none',
      enable: true,
      out_mode: 'out',
      random: true,
      speed: 0.3,
      straight: false
    },
    number: { density: { enable: true, value_area: 800 }, value: 160 },
    opacity: {
      anim: { enable: true, opacity_min: 0, speed: 1, sync: false },
      random: true,
      value: 1
    },
    shape: {
      character: {
        fill: false,
        font: 'Verdana',
        style: '',
        value: '*',
        weight: '400'
      },
      image: {
        height: 100,
        replace_color: true,
        src: 'images/github.svg',
        width: 100
      },
      polygon: { nb_sides: 5 },
      stroke: { color: '#000000', width: 0 },
      type: 'circle'
    },
    size: {
      anim: { enable: false, size_min: 0.3, speed: 4, sync: false },
      random: true,
      value: 3
    }
  },
  polygon: {
    draw: { enable: false, lineColor: '#ffffff', lineWidth: 0.5 },
    move: { radius: 10 },
    scale: 1,
    type: 'none',
    url: ''
  },
  retina_detect: true
  

  
  }"
  />




<Particles
 
    id="tsparticles"

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
        value: 2
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
        acceleration: 0,
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
      quantity: 5,
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
    


    <div id="absolute" class="q-mt-none">


   <div class="q-pa-xl flex flex-center">
<div class="row flex flex-center">
  <div class="col-12 col-md-10 flex-center">


      
  	<!-- <button @click="show = !show">Toggle</button> -->


  <!-- <Transition
    name="dropdown"
    appear
    enter-active-class="animate__animated animate__backInDown animate__slow"
  > -->
    <p v-if="show">

 

      <q-card-section style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
     <p class="cafont" style="font-size: 48px; text-align: center;">
      Crypto Ancients
    </p>
    </q-card-section>

    </p>
  <!-- </Transition> -->
  

    <!-- <Transition
    name="dropdown"
    appear
    enter-active-class="animate__animated animate__fadeIn animate__slow animate__delay-3s"
  > -->
                                        <q-card-section class="q-mt-sm" style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">

    <p v-if="show">
    <p class="fontchange text-h6" style="text-align: left;">
    For those passionate to improve the world. People, artists, leaders, workers, lovers, geniuses, degens and all are welcome.
    </p>
    </p>
    </q-card-section>
  <!-- </Transition> -->

    <!-- <Transition
    name="dropdown"
    appear
    enter-active-class="animate__animated animate__fadeIn animate__slow animate__delay-3s"
  > -->
          <q-card-section class="q-mt-sm" style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">

    <p v-if="show">

       <p class="fontchange text-h6" style="text-align: left;">

    No roadmap. No discord. The jpegs are simply themselves, tokens living on the Ethereum blockchain hoping to inspire people.
    </p>
    </p>
    </q-card-section>
  <!-- </Transition> -->


      <!-- <Transition
    name="dropdown"
    appear
    enter-active-class="animate__animated animate__fadeIn animate__slow animate__delay-3s"
  > -->
            <q-card-section class="q-mt-sm" style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">

    <p v-if="show">


         <p class="fontchange text-h6" style="text-align: left;">
    Explore the story of blockchains and our gallery. If it feels right you can also mint your very own crypto ancient.  
    </p>
    </p>
        </q-card-section>

  <!-- </Transition> -->

    
<!--    
 <Transition
    name="dropdown"
    appear
    enter-active-class="animate__animated animate__fadeInLeftBig animate__slow animate__delay-5s"
  > -->
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
  <!-- </Transition> -->

  
        
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