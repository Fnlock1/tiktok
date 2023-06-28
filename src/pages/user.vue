<template>
<!--  筛选-->

  <Icon color="white" class="AlignJustify" size="26">
    <AlignJustify></AlignJustify>
  </Icon>


  <div class="body">
    <img src="https://img0.baidu.com/it/u=1122013262,2429552709&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1687971600&t=59b22d2695abb99665c1141445fdd3b7"
         class="userhead"
         alt="">

    <div class="username text-white font">username</div>
    <div class="font text-white">id</div>
    <div class="font address text-white">
      兰西县第四中学
    </div>
  </div>

</template>

<script setup>
import { Icon } from '@vicons/utils' // vue3
import {AlignJustify} from '@vicons/fa'
</script>

<style scoped>
.userhead{
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  margin: 50px;
  margin-bottom: 20px;
}

.username{
  font-size: 24px;
}

.body{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.AlignJustify{
  position: absolute;
  right: 10px;
  top: 10px;
}

.address{
  padding: 3px;
  background: #494949;
  font-size: 13px;
  border-radius: 5px;
}

</style>
