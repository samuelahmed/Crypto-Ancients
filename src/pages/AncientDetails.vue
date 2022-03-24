<template>
<div class="row" 
    tabindex="0"
    autofocus
    id="divfocus"
    ref="divfocus"
    @keydown="focusOnDivFocus()"
    @keydown.left="PreviousAncient()"
    @keydown.right="NextAncient()"
    >
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
    <q-btn color="blue-grey-1" label="Next"
    text-color="blue-grey-10"
    @click="NextAncient()"  />
  </div>
</div>


</template>


<script>
import { defineComponent } from 'vue'
import AncientDetailsHeader from '../components/AncientDetailsHeader.vue'
import ref from 'vue'







// const element = document.getElementById(tabindex);
// if (element.value.length >= 10) {
//     alert("Mobile Number Should be in 10 digits only")
//     element.value = ""
//     window.setTimeout(() => element.focus(), 0)
// }


// document.onkeydown = checkKey;
// // let PreviousAncient = PreviousAncient()
// function checkKey(e) {

//     e = e || window.event;

//     if (e.keyCode == '38') {
//         // up arrow
//         console.log("up arrow")
//     }
//     else if (e.keyCode == '37') {
//        // left arrow
//          PreviousAncient()
//     }
//     else if (e.keyCode == '39') {
//        // right arrow
//          NextAncient
//     }
// }

export default defineComponent({

  components: {
    AncientDetailsHeader
      },
  data: () => ({
    details: undefined,
    edition: Number,
  }),

// created() {
//     const self = this;
//     window.addEventListener("keydown", function (e) {
//       switch (e.key) {
//         case "ArrowLeft":
//           self.PreviousAncient();
//           break;
//         case "ArrowRight":
//           self.addAnimateToNext();
//       }
//     });
//   },

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
     focusOnDivFocus() {
window.setTimeout(function () { 
    document.getElementById('divfocus').focus(); 
}, 0); 
}
    },
  

    
//       onLoad () {
//     const element = document.querySelector('divfocus');
// element.focus();
//   },
//   created () {
//     this.onLoad()
//   }
  
//     created: {
//   onLoad() {
//   window.setTimeout(function () { 
//     document.getElementById('divfocus').focus(); 
// }, 0); 
//   },
//     }
})
</script>


<style lang="sass" scoped>

  .divfocus
    :focus
</style>