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
        <!-- <li v-for="item in filteredItems" :key="edition">
          {{ item.edition }}
          {{ item.attributes }} -->
        <!-- </li> -->
      </div>
      <div class="col-10">
        <div class="q-pa-md">
          <q-infinite-scroll @load="onLoad" :offset="99">
              <n-image-group>
                <imgComp v-for="item in filteredItems" v-bind="item" />
              </n-image-group>    
          </q-infinite-scroll>     
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgComp from "../components/ImgComponent.vue"
import PinkParticles from "../components/PinkParticles"
import { NImageGroup } from 'naive-ui'

export default {
  name: 'Galery',
  components: {
    imgComp,
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
          return str.toString().includes(query)
        } 
        return this.items.filter(item => {
          return strContainsQuery(item.edition)  
          // ||  item.attributes.some(att=>
          //   strContainsQuery(att.trait_type) || 
          //   strContainsQuery(att.value))
        });
      }
    },
    methods: {
      async onLoad()  {
        const res = await fetch("https://raw.githubusercontent.com/samuelahmed/quasar-vue-cryptoancient-v1.0/master/public/img/metadata.json");
        this.items = await res.json();
        console.log(this.items);
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

</style>


