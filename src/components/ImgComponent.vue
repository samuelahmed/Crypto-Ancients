<template>
    
              <q-img
        :src="`https://gateway.pinata.cloud/ipfs/QmVuuRsSJRB4REFA9jgfyJzEPBnJU4qwW3tdgZHNUWcKMN/${edition}.png`"
        spinner-color="red"
        style="height: 140px; max-width: 150px"
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
