<template>
  <div class="grid place-items-center h-96">
    <div> you are connected with address: {{address}} </div>
    <div v-if="!isLoggedIn">
      <button
        @click="connectWallet"
        v-if="isMetamaskSupported"
        class="px-4 py-2 rounded"
      >
        Metamask Login
      </button>
      <div v-else>Install Metamask extension</div>
    </div>

    <div v-else>
       you are connected with address: {{address}}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "@vue/runtime-core";

const isLoggedIn = ref(false);
const address = ref("")
const isMetamaskSupported = ref(false);
onMounted(() => {
  isMetamaskSupported.value = typeof (window as any).ethereum !== "undefined";
});
async function connectWallet() {
  const accounts = await (window as any).ethereum.request({ method: "eth_requestAccounts" });
  address.value = accounts[0]
  isLoggedIn.value =  address.value ? true : false
}
</script>