<template>

<div class="circle" data-splitting>circle-text-animation-effects-</div>  

</template>

<script>

import { defineComponent } from 'vue'
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";


export default defineComponent({
  name: 'CircleTextAnimation',
mounted: function () {
  this.$nextTick(function () {
    Splitting();
  })
}
})

console.log("here")
</script>

<style>
*
{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: monospace;
}
body
{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.circle
{
    transform-style: preserve-3d;
  animation: animate 10s linear infinite;
}
@keyframes animate
{
  0%
  {
    transform: perspective(1000px) rotateY(360deg) rotateX(30deg);
  }
}
.circle .char
{
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  color: purple;
  font-size: 4em;
  padding: 5px 12px;
  border-top: 4px solid purple;
  border-bottom: 4px solid blue; 
  transform-style: preserve-3d;
  transform-origin: center;
  transform: rotateY(calc(var(--char-index) * 12deg))
  translateZ(250px);
}


</style>

