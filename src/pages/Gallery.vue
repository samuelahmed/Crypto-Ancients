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
        color: { value: '#ff33cc' },
        line_linked: {
          color: '#ff33cc',
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
  <div class="q-mt-none">
    <div class="flex flex-center">
      <q-card-section style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
        <p class="fontchange q-mt-xl" style="font-size: 48px; text-align: center;">
          Gallery
        </p>
      </q-card-section>
    </div> 
    <div class="row fontchange q-pa-xl">
      <div class="col-2">
        <imgMenu :filterPosts="filterPosts" />
      </div>
      <div class="col-10" v-if="show">
        <div class="q-pa-md">
          <q-infinite-scroll @load="onLoad" :offset="250">
            <q-card>   
              <n-image-group>
                <n-space>
                  <imgComp :posts="posts" v-for="item in items" v-bind="item" v-bind:key="items" />
                </n-space>
              </n-image-group>    
            </q-card>
          </q-infinite-scroll>     
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgComp from "../components/ImgComponent.vue"
import { NImage, NImageGroup, NSpace } from 'naive-ui'
import imgMenu from "../components/ImgMenu.vue"

export default {
  name: 'Galery',
  props: [
    'posts',
  ],
  components: {
    imgComp,
    NImage,
    NImageGroup,
    imgMenu,
    NSpace
  },
  data() {
    return {
      items: [],
      show: true
      }
    },
    methods: {
      async onLoad()  {
        const res = await fetch("https://raw.githubusercontent.com/samuelahmed/quasar-vue-cryptoancient-v1.0/master/public/img/metadata.json");
        this.items = await res.json();
        },
      filterPosts (trait_type) {
        this.posts = this.post.filter((post) => {
          return post.category === trait_type
      })
    }
  }
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

</style>


