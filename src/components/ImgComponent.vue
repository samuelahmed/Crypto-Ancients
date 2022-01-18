<template>
    
    <div class="imgComp">
        <h1> {{ edition }} </h1>
        <p> {{ image }} </p>
    </div>
</template>

<script>

export default {
    name: 'imgComp',
    props: {
         edition: Number,
          image: String
    }  
}

</script>
