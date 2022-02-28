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
        color: { value: '#ff3333' },
        line_linked: {
          color: '#0033ff',
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
          value: '#ff3333',
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
  <div class="q-mt-xl">
    <div class="flex flex-center">
      <p class="fontchange flex flex-center q-mt-xl" style="font-size: 48px; text-align: center;">
      About
      </p>
    </div> 
    <q-page class="flex-center">
      <div div id="q-app" class="flex flex-center q-mt-xl">
        <div class="flex flex-center" style="width:1000px">
          <q-card
            class="my-card text-black q-ma-sm"
            style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
            <q-card-section>
            <div class="text-h6">Artist</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
            <p>
            Welcome to my genesis project - Crypto Ancients. It's 2022, I'm 29 studied at UC Berkeley for a BA in political science and the LSE for an MSc in anthropology. Been passionate about blockchains for 5 years. Worked in tech but wasn't technical to my satisfaction so I'm now spending all my time learning computer science to work on and build systems that improve the world.
            </p>
            <p>
            Very attuned to the institutial extraction that is occuring from the less wealthy towards those with more. Challenging the systems that perpetuate inequalities is often abstract and requires constant tiny sacrifices as well as bold moments. Huge shoutout to <a class="has-text-info" href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/" target="_blank">MIT</a> for having so many courses available online for free, youtube creators with coding content, and most importantly those who helped me directly. 
            </p>
            </q-card-section>
          </q-card>
          <q-card
            class="my-card text-black q-ma-sm"
            style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
            <q-card-section>
            <div class="text-h6">Build</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
            <p>
            This project was built using <a class="has-text-info" href="https://vuejs.org/" target="_blank">Vue 3</a>, <a class="has-text-info" href="https://quasar.dev/" target="_blank">Quasar</a>, <a class="has-text-info" href="https://www.naiveui.com/en-US/os-theme" target="_blank">Naive UI</a>, <a class="has-text-info" href="https://particles.js.org/" target="_blank">tsParticles</a>, <a class="has-text-info" href="https://github.com/HashLips" target="_blank">Hashlips Art Engine</a>, <a class="has-text-info" href="https://code.visualstudio.com/" target="_blank">VSCode</a> , <a class="has-text-info" href="https://remix.ethereum.org/" target="_blank">Remix</a>, <a class="has-text-info" href="https://www.adobe.com/products/photoshop.html" target="_blank">Photoshop</a>, and <a class="has-text-info" href="https://bulma.io/" target="_blank">Bulma</a> for earliers version of the website. Checkout the public repo on <a class="has-text-info" href="https://github.com/samuelahmed/quasar-vue-cryptoancient-v1.0" target="_blank">Github</a>. Website hosted by <a class="has-text-info" href="https://www.netlify.com/" target="_blank">Netlify</a>. 
            </p>
            <p>
            Official Ethereum Contract Address (Rinkeby Test Network): <a class="has-text-info" href="https://rinkeby.etherscan.io/address/0x5472754c449fb990017e82c9449e456f2b9f3b58" target="_blank">0x5472754c449fB990017e82C9449e456f2B9f3B58</a>
            </p>
            </q-card-section>
          </q-card>
          <q-card
            class="my-card text-black q-ma-sm"
            style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
            <q-card-section>
            <div class="text-h6">Copies</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
            <p>
            At time of writing there is already one copy named cryptohumans with 100x more followers on twitter and is a SCAM. Their website uses an old bulma version of the project which had the following footer “Crypto Ancients by humans. Please take any idea if you use it to fight greed and evil across the world”. While I doubt their scam is being used positively, the idea that others making copies does not harm the original or owners remains. 
            </p>
            <p>
            </p>
            When it comes to digital ownership, who owns what can be seen by looking at the blockchain. Copy projects will have different addresses or not even be on the blockchain whatsoever. For owners there is no need to worry about these developments, on the contrary, it is likely that the more a token is desired and copied the higher the value of the original.
            </q-card-section>
          </q-card>
       </div>
      </div>
    </q-page>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
name: 'PageIndex'
})
</script>

<style lang="sass" scoped>
.background-image
  background-image: url(~assets/sunRed.png)
  background-repeat: no-repeat
  background-size: contain  
  z-index:-1

.fontchange
  font-family: 'Titillium Web'

.my-card
  background: transparent

$link-color: #000000
$hover-color: #ff3333
$visited-color: none

a
  color: $link-color
  text-decoration: none
  background: transparent
  transition: background 1s ease, padding 1s ease

  &:hover
    color: #ff3333
    background: darken($hover-color, 100%)
    padding: 4px 0
  
  &:visited
    color: $visited-color
</style>