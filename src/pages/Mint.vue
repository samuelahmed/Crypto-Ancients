<template>
  <div class="background-image" style="width: 100vh; height: 100vh; position: fixed">
  <Particles
      id="tsparticless"
      :options="{
    fps_limit: 60,
    interactivity: {
      detect_on: 'canvas',
      events: {
        onclick: { enable: true, mode: 'repulse' },
        onhover: {
          enable: true,
          mode: 'bubble',
          parallax: { enable: false, force: 2, smooth: 10 }
        },
        resize: true
      },
      modes: {
        bubble: { distance: 250, duration: 2, opacity: 0, size: 0, speed: 3 },
        grab: { distance: 400, line_linked: { opacity: 1 } },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
        repulse: { distance: 400, duration: 0.4 }
      }
    },
    particles: {
      color: { value: '#0033ff' },
      line_linked: {
        color: '#0033ff',
        distance: 150,
        enable: false,
        opacity: 0.4,
        width: 1
      },
      move: {
        size: true,
        attract: { enable: false, rotateX: 600, rotateY: 600 },
        bounce: false,
        direction: 'none',
        enable: true,
        out_mode: 'out',
        random: true,
        speed: 0.3,
        straight: false
      },
      number: { density: { enable: true, value_area: 800 }, value: 160 },
      opacity: {
        anim: { enable: true, opacity_min: 0, speed: 1, sync: false },
        random: true,
        value: 1
      },
      shape: {
        character: {
          fill: false,
          font: 'Verdana',
          style: '',
          value: '*',
          weight: '400'
        },
        image: {
          height: 100,
          replace_color: true,
          src: 'images/github.svg',
          width: 100
        },
        polygon: { nb_sides: 5 },
        stroke: { color: '#000000', width: 0 },
        type: 'circle'
      },
      size: {
        anim: { enable: false, size_min: 0.3, speed: 4, sync: false },
        random: true,
        value: 3
      }
    },
    polygon: {
      draw: { enable: false, lineColor: '#ffffff', lineWidth: 0.5 },
      move: { radius: 10 },
      scale: 1,
      type: 'none',
      url: ''
    },
    retina_detect: true
    }"
    />
  <Particles
      id="tsparticles"
      :options="{
          fpsLimit: 60,
        particles: {
        number: {
        value: 1,
        density: {
          enable: true,
          value_area: 800
          }
          },
      color: {
        value: '#0033ff',
        animation: {
          enable: true,
          speed: 5,
          sync: true
        }
        },
      shape: {
        type: 'circle'
      },
      opacity: {
        value: 1,
        random: false,
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 10,
          sync: false
        }
      },
      size: {
        value: 1,
        random: { enable: true, minimumValue: 4 },
        animation: {
          enable: false,
          speed: 7,
          minimumValue: 1,
          sync: false
        }
      },
      life: {
        duration: {
          value: 2
        },
        count: 1
      },
      move: {
        angle: {
          value: 90,
          offset: 0
        },
        enable: true,
        gravity: {
          enable: true,
          acceleration: 0,
          inverse: true,
        },
        speed: 10,
        direction: 'side',
        random: true,
        straight: false,
        size: true,
        outModes: {
          default: 'destroy',
          bottom: 'none'
        },
        attract: {
          enable: false,
          distance: 300,
          rotate: {
            x: 0,
            y: 0,
          }
        }
      }
    },

    detectRetina: true,
    background: {
    },
    emitters: {
      direction: 'bottom-right',
      rate: {
        quantity: 5,
        delay: 0
      },
      size: {
        width: 100,
        height: 10
      },
      position: {
        x: -38,
        y: 10
      }}
      }"
    />
  </div>
  <div class="q-mt-xl">
    <div class="flex flex-center">
     <q-card-section style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
     <p class="fontchange q-mt-xl" style="font-size: 48px; text-align: center;">
      Mint
    </p>
    </q-card-section>
    </div> 
    <q-page class="flex-center">
      <div div id="q-app">
        <div class="row items-start q-gutter-md flex flex-center">
          <q-card class="my-card" flat>
            <q-card-section horizontal>
              <div class="flex flex-centered">
                <q-card-section class="q-mt-xl" style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">

                 <n-image
                    width="269"
                    height="269"
                    :src="getImage()"
                    :alt="getAltImage ()"
                    :fallback-src="getAltImage ()"
                  />  
                                  </q-card-section>

                <q-card-section class="q-pt-md" style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
                  <div class="text-caption">
                      <p class="fontchange q-mt-lg text-h6" style="text-align: left;">
                      There are 10,000 Crypto Ancients 
                      </p>
                      <p class="fontchange text-h6" style="text-align: left;">
                      Each is unique 69x69 pixel art
                      </p>
                      <p class="fontchange text-h6" style="text-align: left;">
                      Full ownership with 0% Creator Royalty
                      </p>
                      <p class="fontchange text-h6" style="text-align: left;">
                      ERC-721 Tokens on Ethereum 
                      </p>
                      <p class="fontchange text-h6" style="text-align: left;">
                      Images on Pinata IPFS
                      </p>
                      <p class="fontchange text-h6" style="text-align: left;">
                      Mint yours for 0.01 ETH + gas 
                      </p>
                    </div>
                    <div class="flex flex-center q-pt-sm">
                       <q-btn class="q-mr-sm" color="amber-10" @click="connectMetamask" label="Connect Metamask" />
                         <q-btn color="blue-10" @click="mintButton" label="Mint Crypto Ancient" />
                  </div>      
                </q-card-section>
              </div>
            </q-card-section>
          </q-card>
        </div>

               <div class="q-pa-sm row items-start q-gutter-md flex flex-center">
                  
                      <q-card-section class="q-mt-xl" style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">


                      <div class="fontchange q-mt-lg text-h6" style="text-align: left">
                        <p>Official Contract: <a href="https://rinkeby.etherscan.io/address/0x4bf827186cc2f59a48bc9f93f11d81b78b2e1be5" target="_blank">0x4bf827186Cc2F59A48BC9f93F11D81b78b2E1bE5</a>  </p>
                        <p><span class="newTokenLoad"></span></p>
                       <p> <span class="newTransactionLink"></span></p>
                        <p><span class="showAccount"></span></p>

                        
                        </div>
</q-card-section>
</div>

      </div>
    </q-page>
  </div>

</template>

<script>
import { defineComponent, ref} from 'vue';
import Web3 from 'web3/dist/web3.min.js'
import { NImage } from 'naive-ui'

export default defineComponent({
  components: {
      NImage
  },
  name:"Blah",
  props: {
     image: String,

  },
  data () {
      return {
          showText: true,
  
      }
  },
  methods: {
  },
  setup (props) {
    var account = null;
    var contract = null; 
    const ADDRESS = "0x4bf827186Cc2F59A48BC9f93F11D81b78b2E1bE5";
    const ABI = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_limit","type":"uint256"}],"name":"setNftPerAddressLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]
    let  newToken = ref("");
    return {
      getImage () {
        console.log("in getImage method with new Token:",newToken.value);
        return `https://gateway.pinata.cloud/ipfs/QmaCvNHRxVpizVFs4yQ22YnebheT1MA4njUoPb8DZmmZP4/${newToken.value}.png`
      },
      getAltImage () {
        console.log("am i here?")
        return `img/greyAncient.png`
      },
      async connectMetamask () {
          //User does NOT have Metamask
          if (typeof window.ethereum == 'undefined') {
          alert('Must install Metamask!') }
          //User HAS Metamask
          if (typeof window.ethereum !== 'undefined') {
          console.log('MetaMask is installed!') }
          //call metamask
          const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
          const account = accounts[0];
          //Metamask Connected log & Show Account
          if (accounts !== null) {
              console.log('MetaMask is Connected!') 
              const showAccount = document.querySelector('.showAccount');
              showAccount.innerHTML = "Metamask Connected - Account: " +  account;}
        },
        async mintButton () {
          window.web3 = new Web3(window.ethereum);
          var accounts = await web3.eth.getAccounts();
          account = accounts[0];
          //START TRANSACTION
          contract = new web3.eth.Contract(ABI, ADDRESS)
          let transaction = await contract.methods.mint(1).send({from: account, gas: 3000000, value: 10000000000000000})
          //TRANSACTION IS INITIATED
          .once('sent', (payload) => {console.log('sent')})
          .once('transactionHash', (hash) => {
            alert('Crypto Ancient Mining. This may take a few seconds to a couple minutes. When complete your new Ancient will be displayed.')
            console.log('hashed')
          });
          //CREATE AND DISPLAY RECEIPT ON WEBPAGE
          newToken.value = transaction.events.Transfer.returnValues.tokenId;
          let transactionLink = transaction.transactionHash;
          console.log(newToken.value);
          console.log(transactionLink);
          // that needs to be replaced by a reference in the vue template   
          if (newToken.value !== null) {
            console.log('newtokencreated') 
            const newTokenLoad = document.querySelector('.newTokenLoad');
            newTokenLoad.innerHTML = "Successfully minted Crypto Ancient: " + newToken.value;
            const newTransactionLink = document.querySelector('.newTransactionLink');
            newTransactionLink.innerHTML = "Transaction ID: " + transactionLink;
            }
        }
    }
  }        
});
</script>

<style lang="sass" scoped>
.background-image
  background-image: url(~assets/sunMetaverse.png)
  background-repeat: no-repeat
  background-size: contain  
  z-index:-1

.img
  border-radius: 5px

.fontchange
  font-family: 'Titillium Web'

$link-color: #000000
$hover-color: #0033ff
$visited-color: none

a
  color: $link-color
  text-decoration: none
  background: transparent
  transition: background 1s ease, padding 1s ease

  &:hover
    color: #0033ff
    padding: 4px 0
  
  &:visited
    color: $visited-color
</style>