<template>

<!-- <div
class="bg-blue col-3"
style="height: 50px"
 /> -->
   <q-page class="flex flex-center">
     
      <div class="q-pa-md shadow-5"
            style="width: 400px; height: 400px; padding: 0px;">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      :autoplay="autoplay"
      ref="carousel"
      infinite
    >
      <q-carousel-slide :name="1" img-src="https://lh3.googleusercontent.com/gqryHen2xwI8u5FCMGHnbMfUH9Mv33ahDkUWO3TtWiDmyeBwPdK-suj_HtHkS6uL1Gvf0eQ0kn3K8e0juKsYSMEkrY0jBELl3r3Y12A" />
      <q-carousel-slide :name="2" img-src="https://lh3.googleusercontent.com/mA96eHwEigzEDRBvz9-_ghO60RDu-F76rxkQ-X6bpk7mHR1tadoI5iVV2dmxXkXamsjeEvv9orZrwhByauSh4sRRSQYpuGecttNKMg" />
      <q-carousel-slide :name="3" img-src="https://lh3.googleusercontent.com/QjWB1WBEiOWo7Advhy9iu1BJAvETV7IdpLDrfOcIcwtJKSYqaTjhZ273Ky37mT8Y-kLycRhaFfnwdzguiAw8P9m3eMhaL7IfRM6kjw" />
      <q-carousel-slide :name="4" img-src="https://lh3.googleusercontent.com/7KrOpHlvMpVCU1WOmoR5podLE51-7BtEbKpUE6GVbe6IBCP_aHOo4-zcoSNrAo9CdHda7cJIbsurpaJjfyPxvhid4L5eapm09_Od" />

      <template v-slot:control>
        <q-carousel-control
          position="top-right"
          :offset="[18, 18]"
          class="text-white rounded-borders"
          style="background: rgba(0, 0, 0, .3); padding: 4px 8px;"
        >
          <q-toggle dense dark color="orange" v-model="autoplay" label="Auto Play" />
        </q-carousel-control>

        <q-carousel-control
          position="bottom-right"
          :offset="[18, 18]"
          class="q-gutter-xs"
        >
          <q-btn
            push round dense color="accent" text-color="black" icon="mdi-arrow_left"
            @click="$refs.carousel.previous()"
          />
          <q-btn
            push round dense color="accent" text-color="black" icon="mdi-arrow_right"
            @click="$refs.carousel.next()"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
      </div>

      




  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'


export default defineComponent({
  name: 'PageIndex',
    setup () {
    return {
      slide: ref(1),
      autoplay: ref(false)
    }
  }

})
</script>
