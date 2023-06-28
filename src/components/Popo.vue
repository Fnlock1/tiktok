<template>
<div class="Popo">
  <slot></slot>
</div>
</template>

<script setup>
let props = defineProps({
  height:{
    type:Number,
    default:100
  }
})
</script>

<style scoped>
.Popo{
  position: absolute;
  width: 100vw;
  background: white;
  bottom: 0px;
  height: 0px;
  z-index: 1000;
  border-radius: 10px 10px 0 0;
  animation: setheight .6s forwards ease-in-out ;
  overflow: hidden;
  overflow-y: scroll;
}

@keyframes setheight {
  100%{
    height: v-bind(height+'px');
  }
}
</style>
