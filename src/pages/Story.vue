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
    color: { value: '#663366' },
    line_linked: {
      color: '#663366',
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
      value: '#663366',
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
        value: 1
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
        acceleration: -1,
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
     <p class="fontchange q-mt-xl" style="font-size: 48px; text-align: center;">
      Blockchains and NFTs in our World
    </p>
        <!-- <p class="fontchange q-mt-lg" style="font-size: 22px; text-align: left;">
    Arranged is a short story on Bitcoin, Ethereum, NFTs and how they relate to our world. Where do you stand?  
    </p> -->
    </div> 

  <div class="row items-start q-gutter-md flex-center q-mt-xl" style="height: 300px">
    
  <q-card
    class="my-card text-black"
    style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
    <q-card-section>
      <div class="text-h6">What’s a Blockchain?</div>
      <div class="text-subtitle2">1</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
A blockchain is a distributed digital ledger. A database which tracks ownership, transactions, and is maintained by a network. In a decentralized blockchain anyone with an able computer can join the global peer-to-peer network. Information is usually stored in a series of timestamped blocks whose data is hashed to provide long-term security. 
    </q-card-section>
  </q-card>




<q-card
  class="my-card text-black"
  style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
  <q-card-section>
  <div class="text-h6">Blockchain Revolution</div>
  <div class="text-subtitle2">2</div>
  </q-card-section>
  <q-card-section class="q-pt-none">
The revolution started by Bitcoin is the ability to turn computing power into social trust. So that all participants in the network can be assured that their ledger is most likely accurate even in the face of adversaries. This is a sharp change from past digital ledgers which were susceptible to corruption by both hackers and the issuing authority, regardless of intentions <a class="has-text-info" href="https://en.wikipedia.org/wiki/DigiCash" target="_blank">DigiCash</a>.
  </q-card-section>
</q-card>

<q-card
  class="my-card text-black"
  style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
  <q-card-section>
  <div class="text-h6">Decentralized Methods</div>
  <div class="text-subtitle2">3</div>
  </q-card-section>
  <q-card-section class="q-pt-none">
Blockchains achieve security without a central authority through cryptographic methods. For example Bitcoin uses <a class="has-text-info" href="https://en.wikipedia.org/wiki/Proof_of_work" target="_blank">proof of work</a>, which requires miners to repeatedly update a nonce and hash until their output has a certain number of leading 0s. When achieved they can submit that block and peers can easily <a class="has-text-info" href="https://en.wikipedia.org/wiki/One-way_function" target="_blank">verify</a> that the necessary work was completed. 
  </q-card-section>
</q-card>

<q-card
  class="my-card text-black"
  style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)"> 
  <q-card-section>
  <div class="text-h6">Injecting Cryptographic Trust</div>
  <div class="text-subtitle2">4</div>
  </q-card-section>
  <q-card-section class="q-pt-none">
Every block has a set value in the header. Any change to the data in the block will alter that value wildly, which will in turn impact the hash of the next block and so on. Because of this hash-chain we can generally assume that past information in the blockchain is accurate, with deeper blocks becoming increasingly secure.   
</q-card-section>
</q-card>

<q-card
  class="my-card text-black"
  style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
  <q-card-section>
  <div class="text-h6">Ledgers are Important</div>
  <div class="text-subtitle2">5</div>
  </q-card-section>
  <q-card-section class="q-pt-none">
Ledgers are one of the foundations of capitalism. They enable enterprises to scale globally, borrowing and loaning, standardization of money, exchanges, and the ability to do all this quickly and securely without having to carry lots of valuable goods, such as precious metals or cash. Nearly all meaningful exchanges are recorded somewhere, and that location matters.   </q-card-section>
</q-card>

<q-card
  class="my-card text-black"
  style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
  <q-card-section>
  <div class="text-h6">Issuing is Power</div>
  <div class="text-subtitle2">6</div>
  </q-card-section>
  <q-card-section class="q-pt-none">
For ledgers to work they need to be backed by some sort of authority. People must know that they can rely on what is written. In the past this was mostly corporations and countries, now blockchains have entered the sphere. In the spirit of modernity and globalization, blockchains are not tied to specific locations or people as tightly as issuers of the past. 
  </q-card-section>
</q-card>

<q-card
  class="my-card text-black"
  style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
  <q-card-section>
  <div class="text-h6">What about Banks?</div>
  <div class="text-subtitle2">7</div>
  </q-card-section>
  <q-card-section class="q-pt-none">
In the last 100 years banks have been central to finance across the world. Their hard work made it possible for the commerce we know today: international monetary exchanges, loans, stock markets, ATMs, basic financial services, and more. In exchange for managing our ledgers somewhere between 5-10% of the world’s economy is taken by banks. 
  </q-card-section>
</q-card>

<q-card
  class="my-card text-black"
  style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
  <q-card-section>
  <div class="text-h6">Banks and the Internet</div>
  <div class="text-subtitle2">8</div>
  </q-card-section>
  <q-card-section class="q-pt-none">
Without the internet, giving nearly 1/10th of the world’s economy to banks in exchange for being a trustworthy third party may be a fair price. However, with the internet there is the possibility for digital ledgers. More so, decades of disregard for structural stability, high fees to users, and constant predatory practices make a strong case for investments in alternatives.
  </q-card-section>
</q-card>

<q-card
  class="my-card text-black"
  style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
  <q-card-section>
  <div class="text-h6">Bitcoin</div>
  <div class="text-subtitle2">9</div>
  </q-card-section>
  <q-card-section class="q-pt-none">
Bitcoin (2009) is the genesis blockchain. It combined advances in cryptography to create the first stable peer to peer digital currency. Tightly controlled and led by a conservative development team, it seems to aim as a beacon of stability. The ultimate deflationary asset. Early 2022 the market cap of Bitcoin is about 10% physical gold, if it is ever to be the global asset that all economies are pegged to - it must still grow by another 50-100x. 
  </q-card-section>
</q-card>

<q-card
  class="my-card text-black"
  style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
  <q-card-section>
  <div class="text-h6">Ethereum</div>
  <div class="text-subtitle2">10</div>
  </q-card-section>
  <q-card-section class="q-pt-none">
Ethereum (2013) is the virtual state machine blockchain. Turing complete and able to host applications and smart contracts. If Bitcoin is akin to gold, then Ethereum is like the creation of concrete. Through its coding language Solidity, it is possible to create DAPPs and ledgers that track more complex ownership: such as art, housing, DeFi, games and more. It is important to remember Ethereum gave up some security for functionality. 
  </q-card-section>
</q-card>

<q-card
  class="my-card text-black"
  style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
  <q-card-section>
  <div class="text-h6">BTC and ETH</div>
  <div class="text-subtitle2">11</div>
  </q-card-section>
  <q-card-section class="q-pt-none">
The technological marvels that are Bitcoin and Ethereum should not be underestimated. Many alternative solutions to scalability are but illusions with great intents. Forgoing a dramatic event, the future of blockchain will be built upon these two empires: The Bitcoin empire of deflation in which all economies are pegged to; and the Ethereum empire of web3 which allows for ownership of digital assets.  </q-card-section>
</q-card>

<q-card
  class="my-card text-black"
  style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
  <q-card-section>
  <div class="text-h6">Decentralization vs Centralization</div>
  <div class="text-subtitle2">12</div>
  </q-card-section>
  <q-card-section class="q-pt-none">
The grass is always greener on the other side. All forms of organization will have advantages and disadvantages. However, after some thousands of years of higher degrees of centralization it is pleasantly refreshing to see the rise of censorship resistant technologies. Blockchains are naturally censorship resistant because they have no central authority, which makes it far more difficult for any specific to impose its will upon another.   </q-card-section>
</q-card>

<q-card
  class="my-card text-black"
  style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
  <q-card-section>
  <div class="text-h6">So what is an NFT?</div>
  <div class="text-subtitle2">13</div>
  </q-card-section>
  <q-card-section class="q-pt-none">
A non-fungible token (NFT) is a token on a blockchain in which each member is different. Humans are non-fungible members of the homo sapiens series, whereas the US dollar bills are fungible because they can be exchanged equally for one another. The homo sapien series is backed by methods of biology (decentralized) while the US dollar is backed by the government (centralized).
  </q-card-section>
</q-card>

<q-card
  class="my-card text-black"
  style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
  <q-card-section>
  <div class="text-h6">Are NFTs Decentralized?</div>
  <div class="text-subtitle2">14</div>
  </q-card-section>
  <q-card-section class="q-pt-none">
  It depends. What is your definition, but more importantly which blockchain is your NFT is on. In most cases the image itself is stored on an IPFS and not on the blockchain. The NFT is a smart contract that is stored on a blockchain; some blockchains are more secure and decentralized than others. 
  </q-card-section>
</q-card>

<q-card
  class="my-card text-black"
  style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
  <q-card-section>
  <div class="text-h6">What's a Crypto Ancient?</div>
  <div class="text-subtitle2">15</div>
  </q-card-section>
  <q-card-section class="q-pt-none">
Crypto Ancients are ERC-721 tokens on the Ethereum blockchain. At time of writing that seems the only blockchain capable of providing long-term digital ownership. Full ownership of the image’s IP and 0% creator royalty: You mint it, you own it. They have no utility but are to inspire those passionate to improve the world. People, artists, leaders, workers, lovers, geniuses, degens and all are welcome.  </q-card-section>
</q-card>

<q-card
  class="my-card text-black"
  style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
  <q-card-section>
  <div class="text-h6">What do you mean?</div>
  <div class="text-subtitle2">16</div>
  </q-card-section>
  <q-card-section class="q-pt-none">
  Humanity does not have infinite time to get our shit together. There are many internal and external existential threats that could end the human project before we have a chance to really explore Nature. Greed, hatred, environmental destructuction, and more are real threats to progress and the long-term joy of our species. Those with this pfp have focus.
  </q-card-section>
</q-card>

<q-card
  class="my-card text-black"
  style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
  <q-card-section>
  <div class="text-h6">How do Crypto Ancients Help?</div>
  <div class="text-subtitle2">17</div>
  </q-card-section>
  <q-card-section class="q-pt-none">
They do not. They consist of a few hundred layers made with passion in photoshop, rearranged with a JS program into 10,000 unique images, uploaded to pinata IPFS, pointed a Ethereum smart contract to those images, built a website, and made that contract available for minting. In most cases that is every NFT project today, give or take some bells and whistles.
  </q-card-section>
</q-card>

<q-card
  class="my-card text-black"
  style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
  <q-card-section>
  <div class="text-h6">So are NFTs useless?</div>
  <div class="text-subtitle2">18</div>
  </q-card-section>
  <q-card-section class="q-pt-none">
  No, they are structural. NFTs are paving the foundations for digital ownership. While Ethereum created the methods, the actual pathway to ownership is defined by constant conflict among all the members and eventual temporary agreement as to what ‘owning’ means. In the same way the laws of Rome no longer apply today, the rules of ownership in the future remain contested.
  </q-card-section>
</q-card>


<q-card
  class="my-card text-black"
  style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
  <q-card-section>
  <div class="text-h6">Art and Community</div>
  <div class="text-subtitle2">19</div>
  </q-card-section>
  <q-card-section class="q-pt-none">
Are are at the core of what make us human. NFTs and web3 offer potential new spaces but they remain in flux. What new possibilities are being created and are any being destroyed? Is the space really equal or are some groups benefiting more? How can people be aware and protected from scams? If anything we must see that constant wild speculation on all art is a little exhausting. 
  </q-card-section>
</q-card>


<q-card
  class="my-card text-black"
  style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
  <q-card-section>
  <div class="text-h6">Avoiding Scams</div>
  <div class="text-subtitle2">20</div>
  </q-card-section>
  <q-card-section class="q-pt-none">
With blockchains there is no central-authority to fix mistakes. Adversaries with technical skills are everywhere. Promises to double your money or more are likely scam. The future is not determined be careful of projects that say so. If you feel pressured, it is probably a scam. Every machine that has connected to the internet could be compromised. 
  </q-card-section>
</q-card>



<q-card
  class="my-card text-black"
  style="background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 100%)">
  <q-card-section>
  <div class="text-h6">Enter the Metaverse</div>
  <div class="text-subtitle2">21</div>
  </q-card-section>
  <q-card-section class="q-pt-none">
  Digital spaces protect the environment. They allow us to meet and explore without having to destroy the life which surrounds us. Our connection to other lifeforms on the planet is vital to health and joy. There are now so many humans with such destructive machinery that we really must take the lead in respecting the environment around us. 
  </q-card-section>
</q-card>

</div>
</div>
</template>

<script>
import { defineComponent, } from "vue";
export default defineComponent({
  name: "PageIndex",
});
</script>

<style lang="sass" scoped>
.background-image 
  background-image: url(~assets/sunPurple.png)
  background-repeat: no-repeat
  background-size: contain  
  z-index:-1


.my-card
  width: 100%
  height: 100%
  max-width: 350px

.fontchange
    font-family: 'Titillium Web'




  
</style>