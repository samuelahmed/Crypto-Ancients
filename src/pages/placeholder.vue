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


                //select background 
                const modalBg = document.querySelector('.modal-background');
                //select modal
                const modal = document.querySelector('.modal');
                //set img link 
                let img = document.createElement('img');
                //delete past img on multi mint
                if (document.querySelector('#linkdelete') !==null) {
                  document.querySelector('#linkdelete').remove();
                }
                //create img and give id to delte
                img.src = `https://gateway.pinata.cloud/ipfs/QmaCvNHRxVpizVFs4yQ22YnebheT1MA4njUoPb8DZmmZP4/${newToken}.png`;
                document.querySelector('#linkhere').appendChild(img);
                img.id = 'linkdelete';
                img.style.borderRadius = '2em';
                //token ID number
                newToken = document.getElementById('newToken').textContent = newToken;
                //confirmation link
                document.getElementById('newTransactionLink').textContent = trasactionLink;
                //trigger modal
                modal.classList.add('is-active');
                //close modal
                modalBg.addEventListener('click', () => {
                  modal.classList.remove('is-active')
                });
                console.log(newToken)