<template>

  <video ref="video"
         style="width: 100vw;height: 100vh"
         autoplay></video>


  <video ref="foreground"
         style="
           width: 45vw;
           height: 25vh;
           position: fixed;
           top: 49px;
           left: 0px;"
         autoplay></video>

</template>

<script setup>
import {onMounted, ref} from "vue";

let video = ref(null)
let foreground = ref(null)
// getUserMedia 被弃用了，用新的 API 代替
onMounted(() => {
  navigator.mediaDevices.getUserMedia({  // 获取后置摄像头
    video: true,
    audio: false,
    facingMode: 'environment'
  }).then(stream => {
    video.value.srcObject = stream
  }).catch(err => {
    console.log(err)
  })


  navigator.mediaDevices.getUserMedia({  // 获取前置摄像头
    video: true,
    audio: false,
    facingMode: 'user'
  }).then(stream => {
    foreground.value.srcObject = stream
  }).catch(err => {
    console.log(err)
  })


})
</script>

<style scoped>

</style>
