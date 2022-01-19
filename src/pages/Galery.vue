<template>
  <div class="q-pa-md">
    <q-infinite-scroll @load="onLoad" :offset="250">
      <imgComp v-for="item in items" v-bind="item" v-bind:key="item.edition" />

    </q-infinite-scroll>
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
    items: []
  }
},
  methods: {
    async onLoad()  {
     const res = await fetch("https://gateway.pinata.cloud/ipfs/QmZgb8gMhMnsc3sZUf5aargWKi35jS5pc9AJj9GYVKrJ1p/_metadata.json");
      this.items = await res.json();
    }
  }
}

</script>




