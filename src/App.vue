<template>

    <router-view :key="$route.path"></router-view>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>
