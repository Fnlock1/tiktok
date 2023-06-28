<template>
  <div class="font  tansuo">探索</div>
  <div class="body">
    <tansuo-card
      :login="true"
      :release="true"
      @CardClick="CardClick"
      :id="index"
      v-for="(item,index) in 19"></tansuo-card>
  </div>

</template>

<script setup>
import TansuoCard from '../components/tansuoCard.vue'
import router from "src/router";
import { Icon } from '@vicons/utils' // vue3
import {Bandcamp,UserFriends,UserAlt} from '@vicons/fa'
function CardClick(id) {
  router.push('/work/'+id)
}
</script>

<style scoped>
.tansuo {
  font-size: 23px;
  text-align: center;
  color: rgba(255, 255, 255, .9);
  position: fixed;
  top: 10px;
  width: 100%;
  z-index: 100;
}

.body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.body > div:first-child {
  margin-top: 50px;
}
</style>
