<template>


  
    <div class="background-image" style="width: 100vh; height: 100vh; position: fixed"></div>

  <div class="q-mt-xl">
    
    <div class="flex flex-center">
     <p class="fontchange q-mt-xl" style="font-size: 48px; text-align: center;">
      Gallery
    </p>
        <!-- <p class="fontchange q-mt-lg" style="font-size: 22px; text-align: left;">
    Arranged is a short story on Bitcoin, Ethereum, NFTs and how they relate to our world. Where do you stand?  
    </p> -->
    </div> 

    <Transition
    name="dropdown"
    appear
    enter-active-class="animate__animated animate__fadeIn"
  >
    <p v-if="show">

<div class="q-pa-xl">
<q-infinite-scroll @load="onLoad" :offset="250">
<imgComp v-for="item in items" v-bind="item" v-bind:key="item.edition" />
</q-infinite-scroll>
</div>

  </p>
  </Transition>

</div>

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
      value: '#ff33cc',
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
</template>

<script>
import imgComp from "../components/ImgComponent.vue"

export default {
name: 'Galery',
components: {
imgComp
},
data() {
  return {
    items: [],
    show: true
    }},
  methods: {
    async onLoad()  {
    const res = await fetch("https://gateway.pinata.cloud/ipfs/QmZgb8gMhMnsc3sZUf5aargWKi35jS5pc9AJj9GYVKrJ1p/_metadata.json");
    this.items = await res.json();
    }}}
    
</script>


<style lang="sass" scoped>
.background-image
  background-image: url(~assets/sunPink.png)
  background-repeat: no-repeat
  background-size: contain  
  z-index:-1

.fontchange
    font-family: 'Titillium Web'

@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"

</style>


