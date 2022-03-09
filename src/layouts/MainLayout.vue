<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white text-black">
        <q-btn
          flat
          dense
          round
          icon="mdi-menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="100"
    >
      <q-list>
        <router-link 
          style="text-decoration: none; color: inherit;"
          to="/home">
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label style="text-align: center">
                Home
              </q-item-label>
            </q-item-section>
          </q-item>
        </router-link>
        <router-link 
          style="text-decoration: none; color: inherit;"
          to="/story">   
          <q-item  clickable v-ripple>
            <q-item-section>
              <q-item-label style="text-align: center">
                Story
              </q-item-label>
            </q-item-section>
          </q-item>
        </router-link>
        <router-link 
          style="text-decoration: none; color: inherit;"
          to="/gallery">   
          <q-item  clickable v-ripple>
            <q-item-section>
              <q-item-label style="text-align: center">
                Gallery
              </q-item-label>
            </q-item-section>
          </q-item>
        </router-link>
        <router-link 
          style="text-decoration: none; color: inherit;"
          to="/mint">
          <q-item  clickable v-ripple>
            <q-item-section>
              <q-item-label style="text-align: center">
                 Mint
              </q-item-label>
            </q-item-section>
          </q-item>
        </router-link>
        <router-link 
          style="text-decoration: none; color: inherit;"
          to="/about">   
          <q-item  clickable v-ripple>
            <q-item-section>
              <q-item-label style="text-align: center">
                About
              </q-item-label>
            </q-item-section>
          </q-item>
        </router-link>
      </q-list>
    </q-drawer>
      <q-page-container>
        <router-view />
      </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 
    'MainLayout',
  components: {
  },
  setup () {
    const leftDrawerOpen = ref(false)
    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
       leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
