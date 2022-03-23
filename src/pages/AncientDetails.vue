<template>


  <div v-if="details">
    <AncientDetailsHeader
      :name="details.name"
      :edition="details.edition"
      :attributes="details.attributes"
      >
    </AncientDetailsHeader>
  </div>

 
     <q-btn color="primary" label="Next Ancient"
      @click="forceRerender()"  />


  
</template>

<script>
import { defineComponent } from 'vue'
import AncientDetailsHeader from '../components/AncientDetailsHeader.vue'

export default defineComponent({

  components: {
    AncientDetailsHeader
      },
  data: () => ({
    details: undefined
  }),

  async created () {
    try {
      const edition = this.$route.params.edition

      if (!edition) {
        alert('no edition specified, try again')
        return
      }
      const res = await this.$api.get(`/json/${edition}.json`)
      res.status === 200
        ? (this.details = res.data)
        : alert('error fetching ancient')
      console.log(this.details)
    } catch (error) {
      alert('there was another error')
    }
  },
    methods: {
    forceRerender() {
      let edition = this.$route.params.edition ++
      edition ++
      console.log("in Ancient Details")
      console.log(edition) 
      this.$router.push({ name: 'AncientDetails', params: { edition }, replace:true })





        .then(() => {
          
    console.log('Updated route', this.$route)
this.$forceUpdate();
  })

      
    
    },

    },
})
</script>
