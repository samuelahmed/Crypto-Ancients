<template>
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
      value: '#663366',
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
<div class="q-mt-xl">

  <div class="flex flex-center">
<p class="fontchange flex flex-center q-mt-xl" style="font-size: 48px; text-align: center;">
Mint
</p>
</div> 
<q-page class="flex-center">
<div div id="q-app">
<div class="q-pa-xl row items-start q-gutter-md flex flex-center">
<q-card class="my-card" flat>
<q-card-section horizontal>
  <div class="flex flex-centered">
  <q-card-section class="col-4 flex flex-center">
  <img v-if="image" :key="image.id" @click="switchImage" class="image" :src="image.src" alt="image.alt">



</q-card-section>
<q-card-section class="q-pt-md">
<!-- <div class="text-h5 q-mt-sm q-mb-xs" style="text-align: center">
Mint
</div> -->
<div class="text-caption">
 <div class="col-12 col-md-12">
    <p class="fontchange q-mt-xl" style="font-size: 20px; text-align: left;">
    There are 10,000 Crypto Ancients 
    </p>
       <p class="fontchange q-mt-lg" style="font-size: 20px; text-align: left;">
      Each is unique 69x69 pixel art
        </p>
         <p class="fontchange q-mt-lg" style="font-size: 20px; text-align: left;">
      Full ownership with 0% Creator Royalty
    </p>
          <p class="fontchange q-mt-lg" style="font-size: 20px; text-align: left;">
      ERC-721 Tokens on Ethereum 
    </p>
         <p class="fontchange q-mt-lg" style="font-size: 20px; text-align: left;">
      Images on Pinata IPFS
    </p>
      <p class="fontchange q-mt-lg" style="font-size: 20px; text-align: left;">
      Mint yours for 0.01 ETH + gas 
    </p>
  </div>

<div class="flex flex-center q-pt-sm">
<q-btn align="right" id="enableEthereumButton" color="primary">
  Mint
</q-btn>
</div>
 
</div>      
</q-card-section>
</div>
</q-card-section>

<!-- <q-card-actions>

</q-card-actions> -->
</q-card>

</div>
</div>

</q-page>
</div>

</template>

<script>
import { defineComponent } from 'vue'
import Web3 from "../components/Web3.vue"
import detectEthereumProvider from '@metamask/detect-provider'

export default defineComponent({
name: 'PageIndex',
data() {
  return {
    index: 0,
    image: null,
    images: [{
      id: 1,
      src: "https://lh3.googleusercontent.com/gqryHen2xwI8u5FCMGHnbMfUH9Mv33ahDkUWO3TtWiDmyeBwPdK-suj_HtHkS6uL1Gvf0eQ0kn3K8e0juKsYSMEkrY0jBELl3r3Y12A",
    },
    {
      id:2,
      src: "https://lh3.googleusercontent.com/mA96eHwEigzEDRBvz9-_ghO60RDu-F76rxkQ-X6bpk7mHR1tadoI5iVV2dmxXkXamsjeEvv9orZrwhByauSh4sRRSQYpuGecttNKMg",
    },
    {
      id: 3,
      src: "https://lh3.googleusercontent.com/QjWB1WBEiOWo7Advhy9iu1BJAvETV7IdpLDrfOcIcwtJKSYqaTjhZ273Ky37mT8Y-kLycRhaFfnwdzguiAw8P9m3eMhaL7IfRM6kjw",
    },
    {
      id: 4, 
      src: "https://lh3.googleusercontent.com/P9Xc1iAOg2PayWwOpbRXZELw8OF_f-jj-cny2l335SJBK9MolrrKLb8FGx7YGjMpSH9jAvQgtGBeIrwdNPYnnLisnxn1uGTaqDkRoW0"
    },
        {
      id: 5, 
      src: "https://lh3.googleusercontent.com/gpQRy-u8I6BHXDcUzD87wvOHbI8fUxtAgVtwipw-xEe5gHOEQ7xYGlzV5y2ME-7RRs3LhTU3M0AIh-AFILc-CV9IWcfDaIK9qKCGsA"
    },
        {
      id: 6, 
      src: "https://lh3.googleusercontent.com/7bDotaLTYBYchav8YCtKAL10qPiPJAoGV7DxDMZ5-wS1FyWnAYuBse0qWUiMXecefhyYUcZLu73SMrISFlpbZyAjksN5r9pRXPbLuQ"
    },
    {
      id: 7, 
      src: "https://lh3.googleusercontent.com/YN0lLTbXFIfAbSKHtIUFmK5gf5mIbaPa37XVUKtVsgeXtX-JJ5YbBv9yc8RYiMxw19pXJyz95DIw85z-e0955vrni4GMbHZ-mHer"
    }
    ],
  }
},
  mounted() {
    this.switchImage();
  },
  methods: {
    switchImage() {
      this.image = this.images[this.index]
      this.index = (this.index + 1) % this.images.length;
    }
  }

})


</script>

<style lang="sass" scoped>
.background-image
  background-image: url(~assets/sunPurple.png)
  background-repeat: no-repeat
  background-size: contain  
  z-index:-1


.fontchange
  font-family: 'Titillium Web'


.image 
  max-height: 30vh
  max-width: 30vh
  image-orientation: center
  cursor: pointer
  transition: filter 0.3s ease-in
  image-borders: rounded
  border-radius: 25px

// .image:hover 
  // filter: brightness(1.05)


.my-card
  background: transparent


</style>