<template>
        <div class="col text-h6">
          <q-card-section class="q-pa-none">
            <p>Attribute Select Menu </p>
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

const filters = [
  'Daytime',
  'body'
]


export default {
  props: [
    'filterPosts',
    'search',
    'filteredPosts'
  ],
   data () {
     return {
       filters,
       term: '',
     }
   },
    name: 'imgMenu'
 }
</script>

<style>

</style>





