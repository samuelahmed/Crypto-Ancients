<template>
    <div class="background-image" style="width: 100vh; height: 100vh; position: fixed"></div>

<q-page class="flex flex-center">
  <img
  alt="Quasar logo"
  src="~assets/MyAncientsUnderConstruction.png"
  style="width: 400px; height: 400px"
  >
</q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
name: 'PageIndex'
})
</script>

<style lang="sass" scoped>
.background-image
  background-image: url(~assets/vueBackgroundSun.png)
  background-repeat: no-repeat
  background-size: contain  
  z-index:-1
</style>