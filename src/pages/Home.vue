<template>
    <div class="background-image" style="width: 100vh; height: 100vh; position: fixed"></div>
    
    <div class="q-mt-xl">
   <div class="q-pa-xl flex flex-center">
<div class="row flex flex-center">
  <div class="col-12 col-md-10 flex-center">


      
  	<!-- <button @click="show = !show">Toggle</button> -->


  <Transition
    name="dropdown"
    appear
    enter-active-class="animate__animated animate__backInDown animate__slow"
  >
    <p v-if="show">

 

          <p class="fontchange">
          <CircleTextAnimation />


        </p>

    </p>
  </Transition>
  

    <Transition
    name="dropdown"
    appear
    enter-active-class="animate__animated animate__fadeIn animate__slow animate__delay-3s"
  >
    <p v-if="show">
    <p class="fontchange q-mt-xl" style="font-size: 20px; text-align: left;">
    For those passionate to improve the world. People, artists, leaders, workers, lovers, geniuses, degens and all are welcome.
    </p>
    </p>
  </Transition>

    <Transition
    name="dropdown"
    appear
    enter-active-class="animate__animated animate__fadeIn animate__slow animate__delay-3s"
  >
    <p v-if="show">

       <p class="fontchange q-mt-lg aling-left" style="font-size: 20px; text-align: left;">
    No roadmap. No discord. No community. The jpegs are simply themselves, tokens living on the Ethereum blockchain hoping to inspire people.
    </p>
    </p>
  </Transition>


      <Transition
    name="dropdown"
    appear
    enter-active-class="animate__animated animate__fadeIn animate__slow animate__delay-3s"
  >
    <p v-if="show">


         <p class="fontchange q-my-lg align-left" style="font-size: 20px; text-align: left;">
    Explore the story of blockchains and our gallery. If it feels right you can also mint your very own crypto ancient.  
    </p>
    </p>
  </Transition>

    
   
 <Transition
    name="dropdown"
    appear
    enter-active-class="animate__animated animate__fadeInLeftBig animate__slow animate__delay-5s"
  >
    <p v-if="show">

  <div class="row flex flex-center q-mt-xl">



          <q-img
    class="caImg"
    alt="Quasar logo"
    src="~assets/homeCABlue.png"
    style="height: 200px; max-width: 200px"

     />

 
              <q-img
    class="caImg"
    alt="Quasar logo"
    src="~assets/homeCAPurple.png"
    style="height: 200px; max-width: 200px"
     />



                  <q-img
    class="caImg"
    alt="Quasar logo"
    src="~assets/homeCASwirl.png"
    style="height: 200px; max-width: 200px"
     />


  </div>
</p>
  </Transition>

  
        
  </div>
</div>
</div>

  </div>

 
</template>

<script>


import CircleTextAnimation from 'src/components/CircleTextAnimation.vue'


import { defineComponent } from 'vue'
 

export default defineComponent({

name: 'PageIndex',
  data() {
    return {
      show: true
    }
  },
components: {
    CircleTextAnimation
}
})



</script>








  
<style lang="sass" scoped>
  
.fontchange
    font-family: 'Titillium Web'

.background-image
  //WHY DOES STICKY NOT WORK FOR SUN ONLY IT EITHER WORKS FOR ALL OR NOTHING

  background-image: url(~assets/sunGolden.png)
  // height: 100vh
  // width: 100vh
  background-repeat: no-repeat
  background-size: contain  
  z-index:-1

.caImg
    margin-left: 25px
    margin-right: 25px


@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"



</style>