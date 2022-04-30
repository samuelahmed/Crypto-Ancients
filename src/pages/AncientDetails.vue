<template>
  <div class="row" 
    tabindex="0"
    autofocus
    id="divfocus"
    ref="divfocus"
    @keydown="focusOnDivFocus()"
    @keydown.left="changeAncient(-1)"
    @keydown.right="changeAncient(+1)"
    >
    <div class="col flex flex-center">
      <q-btn color="blue-grey-1" label="Previous"
        text-color="blue-grey-10"
        @click="changeAncient(-1)"  
      />      
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
      <q-btn color="blue-grey-1" label="Next"
      text-color="blue-grey-10"
      @click="changeAncient(+1)"  
      />
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
    } catch (error) {
      alert('there was another error')
    }
  },
  methods: {
    changeAncient(increment) {
      let edition = Number(this.$route.params.edition);
      edition += increment;
      this.$router.push({ name: 'AncientDetails', params: { edition }, replace:true })
    },
     focusOnDivFocus() {
      window.setTimeout(() => { 
      document.getElementById('divfocus').focus(); 
      }, 0); 
    }
  },
})
</script>


//gpt-3?

