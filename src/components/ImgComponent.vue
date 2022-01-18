<template>
    
              <q-img
        :src="`https://gateway.pinata.cloud/ipfs/QmVuuRsSJRB4REFA9jgfyJzEPBnJU4qwW3tdgZHNUWcKMN/${edition}.png`"
        spinner-color="red"
        style="height: 69px; max-width: 69px; margin: 5px"
      />
</template>

<script>


export default {
    name: 'imgComp',
    props: {
         edition: Number,
          image: String,
          name: String,
        description: String,
        dna: NaN,
        date: Number,
        attributes: Array,
        compiler: String
    }  
}

</script>
