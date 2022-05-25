/* eslint-disable */
<template>
  <div class="background-image" style="width: 100vh; height: 100vh; position: fixed">
    <PinkParticles />
  </div>
  <div>
    <div class="q-mt-none">
      <div class="flex flex-center">
        <q-card-section>
          <p class="fontchange q-mt-xl" style="font-size: 48px; text-align: center;">
            About
          </p>
        </q-card-section>
      </div> 
      <q-page class="flex-center">
        <div class="flex flex-center q-mt-sm">
          <div class="flex flex-center" style="width:1000px">
            <q-card-section style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
              <q-card-section class="q-pt-none">
                <div class="text-h6">Artist</div>
              </q-card-section>
              <q-card-section class="q-pt-none q-pb-none">
                <p>
                  Welcome to my genesis project - Crypto Ancients. It's 2022, I studied at UC Berkeley for a BA in political science and the LSE for an MSc in anthropology. Been passionate about blockchains for 5 years. Worked in tech but wasn't technical to my satisfaction so I'm now spending all my time learning computer science.
                </p>
                <p>
                  Very attuned to the institutial extraction that is occuring from the less wealthy towards those with more. Challenging the systems that perpetuate inequalities is often abstract and requires constant tiny sacrifices as well as bold moments. Huge shoutout to <a class="has-text-info" href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/" target="_blank">MIT</a> for having so many courses available online for free, youtube creators with coding content, and most importantly those who helped me directly. 
                </p>
              </q-card-section>
            </q-card-section>
            <q-card-section class="q-mt-sm q-pt-none q-pb-none" style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
              <q-card-section>
                <div class="text-h6">Build</div>
              </q-card-section>
              <q-card-section class="q-pt-none">
                <p>
                  This project was built using <a class="has-text-info" href="https://vuejs.org/" target="_blank">Vue 3</a>, <a class="has-text-info" href="https://quasar.dev/" target="_blank">Quasar</a>, <a class="has-text-info" href="https://www.naiveui.com/en-US/os-theme" target="_blank">Naive UI</a>, <a class="has-text-info" href="https://particles.js.org/" target="_blank">tsParticles</a>, <a class="has-text-info" href="https://github.com/HashLips" target="_blank">Hashlips Art Engine</a>, <a class="has-text-info" href="https://code.visualstudio.com/" target="_blank">VSCode</a> , <a class="has-text-info" href="https://remix.ethereum.org/" target="_blank">Remix</a>, <a class="has-text-info" href="https://www.adobe.com/products/photoshop.html" target="_blank">Photoshop</a>, and <a class="has-text-info" href="https://bulma.io/" target="_blank">Bulma</a> for earliers version of the website. Checkout the public repo on <a class="has-text-info" href="https://github.com/samuelahmed/quasar-vue-cryptoancient-v1.0" target="_blank">Github</a>. Website hosted by <a class="has-text-info" href="https://www.netlify.com/" target="_blank">Netlify</a>. 
                </p>
                <p>
                  Official Ethereum Contract Address (Rinkeby Test Network): <a class="has-text-info" href="https://rinkeby.etherscan.io/address/0x4bf827186cc2f59a48bc9f93f11d81b78b2e1be5" target="_blank">0x4bf827186Cc2F59A48BC9f93F11D81b78b2E1bE5</a>
                </p>
              </q-card-section>
            </q-card-section>
            <q-card-section class="q-mt-sm q-pt-none q-pb-none"  style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
              <q-card-section>
                <div class="text-h6">Copies</div>
              </q-card-section>
              <q-card-section class="q-pt-none">
                <p>
                  At time of writing there is already one copy named cryptohumans with 100x more followers on twitter and is a SCAM. Their website uses an old bulma version of the project which had the following footer “Crypto Ancients by humans. Please take any idea if you use it to fight greed and evil across the world”. While I doubt their scam is being used positively, the idea that others making copies does not harm the original or owners remains. 
                </p>
                <p>
                  When it comes to digital ownership, who owns what can be seen by looking at the blockchain. Copy projects will have different addresses or not even be on the blockchain whatsoever. For owners there is no need to worry about these developments, on the contrary, it is likely that the more a token is desired and copied the higher the value of the original.
                </p>
              </q-card-section>
            </q-card-section>
          </div>
        </div>
      </q-page>
    </div>
  </div>
</template>

<script>
import PinkParticles from "../components/PinkParticles.vue"
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    PinkParticles
  }
})
</script>

<style lang="sass" scoped>
.background-image
  background-image: url(~assets/sunPink.png)
  background-repeat: no-repeat
  background-size: contain  
  z-index:-1

.fontchange
  font-family: 'Titillium Web'

$link-color: #000000
$hover-color: #ff3333
$visited-color: none

a
  color: $link-color
  text-decoration: none
  background: transparent
  transition: background 1s ease, padding 1s ease

  &:hover
    color: #ff3333
    padding: 4px 0
  
  &:visited
    color: $visited-color
</style>