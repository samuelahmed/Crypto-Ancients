<template>

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
          value: '#FB48C4'
        },
        links: {
          color: '#FB48C4',
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


