<template>
  <div class="background-image" style="width: 100vh; height: 100vh; position: fixed">
    <RedParticles />
  </div>
  <div class="q-mt-none">
    <div class="flex flex-center">
      <q-card-section>
        <p class="fontchange q-mt-xl" style="font-size: 48px; text-align: center;">
          Mint
        </p>
      </q-card-section>
    </div> 
    <q-page class="flex-center">
      <div div id="q-app">
        <div class="row items-start q-gutter-md flex flex-center">
          <!-- <q-card class="my-card" flat> -->
            <q-card-section horizontal>
              <div class="flex flex-centered">
                <q-card-section class="q-mt-xl">
                  <n-image
                  class="pixelated"
                  id="rcorners1"
                  width="249"
                  height="249"
                  :src="getImage()"
                  :alt="getAltImage ()"
                  :fallback-src="getAltImage ()"
                  />  
                </q-card-section>
                <q-card-section class="q-pt-md">
                  <div class="text-caption">
                    <p class="fontchange q-mt-lg text-h6" style="text-align: left;">
                     There are 10,000 Crypto Ancients 
                    </p>
                    <p class="fontchange text-h6" style="text-align: left;">
                     Each is Unique 69x69 Pixel Art 
                    </p>
                    <p class="fontchange text-h6" style="text-align: left;">
                     Full Ownership with 0% Creator Royalty
                    </p>
                    <p class="fontchange text-h6" style="text-align: left;">
                     ERC-721 Tokens on Ethereum 
                    </p>
                    <p class="fontchange text-h6" style="text-align: left;">
                     1 per Mint & 10 Maximum per Address
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
          <!-- </q-card> -->
        </div>
        <div class="q-pa-sm row items-start q-gutter-md flex flex-center">
          <q-card-section class="q-mt-xl">
            <div class="fontchange q-mt-lg text-h6" style="text-align: left">
              <p>Official Contract: <a href="https://etherscan.io/address/0x835177a3aa64ee6129f4f22d598adedcc32bec74" target="_blank">0x835177A3AA64ee6129F4F22d598ADEDcC32bec74</a>  </p>
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
import RedParticles from "../components/RedParticles.vue"

export default defineComponent({
  components: {
      NImage,
      RedParticles
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
    const ADDRESS = "0x835177A3AA64ee6129F4F22d598ADEDcC32bec74";
    const ABI = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]
    let  newToken = ref("");
    return {
      getImage () {
        console.log("in getImage method with new Token:",newToken.value);
        return `images/${newToken.value}.png`
        // return `https://gateway.pinata.cloud/ipfs/QmbGRXvN8eQTWyceoYX4Q5oDVToHKR5pcQhhAHqjpPdwKG/${newToken.value}.png`
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
              showAccount.innerHTML = "Metamask Connected Account: " +  account;}
        },
        async mintButton () {
          window.web3 = new Web3(window.ethereum);
          var accounts = await web3.eth.getAccounts();
          account = accounts[0];
          //START TRANSACTION
          contract = new web3.eth.Contract(ABI, ADDRESS)
          let transaction = await contract.methods.mint(1).send({from: account, gas: 500000,  maxPriorityFeePerGas: 1999999987, value: 10000000000000000})
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
  background-image: url(~assets/sunRed.png)
  background-repeat: no-repeat
  background-size: contain  
  z-index:-1

#rcorners1 
  border-radius: 29px

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

.pixelated 
  image-rendering: pixelated
  image-rendering: crisp-edges

</style>