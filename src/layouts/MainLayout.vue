<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Crypto Ancients </q-toolbar-title>

        <div>Crypto Ancients v1.0</div>
        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header>
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Home',
    caption: 'Mission HQ',
    icon: 'home',
    link: ''
  },
  {
    title: 'Mint',
    caption: 'Mint a New Ancient',
    icon: 'factory',
    link: ''
  },
  {
    title: 'My Ancients',
    caption: 'See your Crypto Ancients',
    icon: 'person',
    link: ''
  },
  {
    title: 'Galery',
    caption: 'See all Minted Ancients',
    icon: 'image',
    link: ''
  },
  {
    title: 'Twitter',
    caption: 'We tweet sometimes',
    icon: 'rss_feed',
    link: ''
  },
  {
    title: 'Discord',
    caption: 'Come hangout',
    icon: 'code',
    link: ''
  }
]

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
