<template>
  <div class="q-pa-md">
    <q-infinite-scroll @load="onLoad" :offset="250">
      <imgComp v-for="item in items" v-bind="item" v-bind:key="item.id" />
        <p>
        </p>
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
  </div>
</template>
<script>

import imgComp from "../components/ImgComponent.vue"

export default {
  components: {
    imgComp
  },
data() {
  return {
    items: [],
    page: 1
  }
},
  methods: {
    async onLoad()  {
      const res = await fetch(`https://gateway.pinata.cloud/ipfs/QmZgb8gMhMnsc3sZUf5aargWKi35jS5pc9AJj9GYVKrJ1p/${this.page++}.json`);
      const items = await res.json();
      console.log(items)
      this.items = [...this.items, ...items];
    }
  }
}
</script>




