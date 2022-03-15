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
        <p>
          Add Search Menu Here
        </p>
        <input v-model="searchQuery" type="text" placeholder="search here">
      </div>
      <div class="col-10">
        <div class="q-pa-md">
              <q-scroll-area style="height: 1000px; max-width: 1000px;">

          <q-infinite-scroll class="wrap" @load="onLoad" :offset="99">
              <n-image-group>
                <ImgComp v-for="item in filteredItems" v-bind="item"  />
                <!-- <imgComp :key="index" :index="item.index" :sent="item.sent" /> -->
              </n-image-group>    
           </q-infinite-scroll>
               </q-scroll-area>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImgComp from "../components/ImgComponent.vue"
import PinkParticles from "../components/PinkParticles"
import { NImageGroup } from 'naive-ui'



export default {
  name: 'Galery',
  components: {
    ImgComp,
    PinkParticles,
    NImageGroup
  },
   props: {
    edition: Number,
    image: String,
    name: String,
    description: String,
    dna: NaN,
    date: Number,
    attributes: Array,
    compiler: String,
    trait_type: String
  },
  data() {
    return {
      items: [],
      searchQuery: "",
      searchItems: "",
      }
    },
    computed: {
      filteredItems() {
        const query = this.searchQuery.toLowerCase()
        if(this.searchQuery == "") {
          return this.items
        }
        function strContainsQuery(str) {
          return str.toString().toLowerCase().includes(query);
        } 
        return this.items.filter(item => {
          return ( 
            strContainsQuery(item.edition)  
            || strContainsQuery(item.attributes[0].trait_type)
            || strContainsQuery(item.attributes[0].value) 
            || strContainsQuery(item.attributes[1].trait_type) 
            || strContainsQuery(item.attributes[1].value) 
            || strContainsQuery(item.attributes[2].trait_type) 
            || strContainsQuery(item.attributes[2].value) 
            || strContainsQuery(item.attributes[3].trait_type) 
            || strContainsQuery(item.attributes[3].value) 
            || strContainsQuery(item.attributes[4].trait_type) 
            || strContainsQuery(item.attributes[4].value) 
            || strContainsQuery(item.attributes[5].trait_type) 
            || strContainsQuery(item.attributes[5].value) 
            || strContainsQuery(item.attributes[6].trait_type) 
            || strContainsQuery(item.attributes[6].value) 
            || strContainsQuery(item.attributes[7].trait_type) 
            || strContainsQuery(item.attributes[7].value) 
            || strContainsQuery(item.attributes[8].trait_type) 
            || strContainsQuery(item.attributes[8].value) 
            || strContainsQuery(item.attributes[9].trait_type) 
            || strContainsQuery(item.attributes[9].value) 
          )
        });
      }
    },
    methods: {
      async onLoad()  {
        const res = await fetch("https://raw.githubusercontent.com/samuelahmed/quasar-vue-cryptoancient-v1.0/master/public/img/metadata.json");
        this.items = await res.json();
        console.log(this.items);
        return this.items
    },
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

.wrap 
  display: flex
  flex-direction: row
  flex-wrap: wrap


</style>


