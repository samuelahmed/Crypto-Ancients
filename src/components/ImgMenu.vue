<template>
<div class="col text-h6">
  <q-card-section class="q-pa-none">
    <p>
     Attribute Select Menu   
    </p>

    <label for="search">
    Search
    <input
      id="search"
      v-model="term"
      @keypress.enter="search(term)"
    />
  </label>

    <p 
      v-for="filter in filters" 
      :key="filter"
      @click="() => filterPosts(filter)">
      {{ filter }}
    </p>         
  </q-card-section>
</div>
</template>

<script>
import Gallery from "../pages/Gallery.vue"

const filters = [
    '',
    'Daytime',
    'body',
    '55'
]
export default {
  props: [
    'filterPosts',
    'search',
    'filteredPosts',
  ],
  data () {
    return {
      show: true,
      filters,
      term: '',
    }
  },
  name: 
    'ImgMenu',
  methods: {
          search (term) {
        this.resetPosts()
        this.items = this.items.filter((item) => {
          return item.title.toLowerCase().includes(term.toLowerCase())
        })
      },
            resetPosts () {
        this.posts = items
      }    
  },

}
</script>




