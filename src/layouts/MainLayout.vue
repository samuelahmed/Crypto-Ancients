<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
    <q-toolbar class="bg-primary glossy text-white">
        <q-btn
          flat
          dense
          round
          icon="mdi-menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <!-- remove text gold in future -->
        <q-toolbar-title>
          Crypto Ancients
        </q-toolbar-title>

        <div>v1.0</div>
        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>

<!-- make mobile only when possible -->
        <q-toolbar class="bg-primary glossy">
          <q-toolbar-title class="text-white text-body2 text-center ">
            Welcome to the Foundation
          </q-toolbar-title>
        </q-toolbar>

        <router-link 
        style="text-decoration: none; color: inherit;"
        to="/home">
          <q-item  
          clickable 
          v-ripple
          >
            <q-item-section side>
            <q-icon name="mdi-home" />
            </q-item-section>
            <q-item-section>
            <q-item-label>
              Home
            </q-item-label>
            <q-item-label caption>
              Project HQ
            </q-item-label>
            </q-item-section>
          </q-item>
        </router-link>

        <router-link 
        style="text-decoration: none; color: inherit;"
        to="/mint">
           <q-item  clickable v-ripple>
            <q-item-section side>
            <q-icon name="mdi-account-multiple-plus" />
            </q-item-section>
            <q-item-section>
            <q-item-label>
              Mint
            </q-item-label>
            <q-item-label caption>
              Create a new Crypto Ancient
            </q-item-label>
            </q-item-section>
          </q-item>
        </router-link>

        <router-link 
        style="text-decoration: none; color: inherit;"
        to="/myancients">   
           <q-item  clickable v-ripple>
            <q-item-section side>
            <q-icon name="mdi-wallet" />
            </q-item-section>
            <q-item-section>
            <q-item-label>
              My Ancients
            </q-item-label>
            <q-item-label caption>
              View your Crypto Ancients
            </q-item-label>
            </q-item-section>
          </q-item>
        </router-link>

        <router-link 
        style="text-decoration: none; color: inherit;"
        to="/galery">   
        <q-item  clickable v-ripple>
          <q-item-section side>
          <q-icon name="mdi-eye" />
          </q-item-section>
          <q-item-section>
          <q-item-label>
            Galery
          </q-item-label>
          <q-item-label caption>
            See all minted Crypto Ancients
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
  name: 'MainLayout',

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
