<template>
<div class="tabbar">

  <Icon
    @click="jump('/',0)"

    :color="index==0?'white':'gray'"
    color="white" size="30">
    <Bandcamp></Bandcamp>
  </Icon>


  <Icon
    @click="jump('/friend',1)"
    :color="index==1?'white':'gray'"
    color="gray" size="30">
    <UserFriends></UserFriends>
  </Icon>

  <Icon
    @click="jump('/user',2)"
    :color="index==2?'white':'gray'"
    size="24">
    <UserAlt></UserAlt>
  </Icon>

</div>
</template>

<script setup>
import { Icon } from '@vicons/utils' // vue3
import {Bandcamp,UserFriends,UserAlt} from '@vicons/fa'
import {ref} from "vue";
import router from "src/router/index";
let index = ref(0)

async function jump(url, i) {
  index.value = i
     router.push(url)
}

</script>

<style scoped>
.tabbar{
  width: 100vw;
  background: #1D1D1D;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: -1px;
  z-index: 500;
}
</style>
