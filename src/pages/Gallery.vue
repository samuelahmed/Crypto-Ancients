<template>
  <div class="background-image" style="width: 100vh; height: 100vh; position: fixed">
  <PinkParticles />
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
import ImgMenu from "../components/ImgMenu.vue"
import PinkParticles from "../components/PinkParticles"

export default {
  name: 'Galery',
  props: [
    'posts',
  ],
  components: {
    imgComp,
    NImage,
    NImageGroup,
    ImgMenu,
    NSpace,
    PinkParticles
  },
  data() {
    return {
      items: [],
      show: true,
      str: '',
      type: '',
      }
    },
    methods: {
      async onLoad()  {
        const res = await fetch("https://raw.githubusercontent.com/samuelahmed/quasar-vue-cryptoancient-v1.0/master/public/img/metadata.json");
        this.items = await res.json();
        },
      filterPosts (edition) {
        this.items = this.items.filter((item) => {
          return item.edition === edition
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


