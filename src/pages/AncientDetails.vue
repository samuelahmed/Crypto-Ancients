<template>
<div class="row">
  <div class="col flex flex-center">
    <q-btn color="blue-grey-1" label="Previous"
        text-color="blue-grey-10"

        @click="PreviousAncient()"  />      
  </div>
  <div class="col-7 flex flex-center">
    <div v-if="details">
      <AncientDetailsHeader
        :name="details.name"
        :edition="details.edition"
        :attributes="details.attributes"
        >
      </AncientDetailsHeader>
    </div>
  </div>
  <div class="col flex flex-center">
    <q-btn color="blue-grey-1" label="Next" align=""
    text-color="blue-grey-10"

    @click="NextAncient()"  />
  </div>
</div>



</template>

<script>
import { defineComponent } from 'vue'
import AncientDetailsHeader from '../components/AncientDetailsHeader.vue'

export default defineComponent({

  components: {
    AncientDetailsHeader
      },
  data: () => ({
    details: undefined,
    edition: Number,
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
    NextAncient() {
      let edition = this.$route.params.edition
      edition ++
      this.$router.push({ name: 'AncientDetails', params: { edition }, replace:true })
    },
    PreviousAncient() {
      let edition = this.$route.params.edition
      edition --
      this.$router.push({ name: 'AncientDetails', params: { edition }, replace:true })
    },
    }
})
</script>
