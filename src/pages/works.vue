<template>
  <div class="x-works">
    <div class="content">
      <img src="https://img1.baidu.com/it/u=4206217121,1228641219&fm=253&fmt=auto&app=138&f=JPEG?w=501&h=500"
           alt="">

      <img
        class="foreground"
        src="https://img1.baidu.com/it/u=2075733356,1837128879&fm=253&fmt=auto&app=138&f=JPEG?w=281&h=500"
        alt="">

    </div>


    <div class="rightContent">
      <Icon
        color="white"
        size="32"
        @click="showComment = !showComment"
      >
        <Comment48Filled></Comment48Filled>
      </Icon>

      <Icon
        color="white"
        size="32"
        @click="showShare = !showShare"
      >
        <Share></Share>
      </Icon>
    </div>

  </div>

  <Popo
    v-if="showComment"
    :height="500">
    <div class="cancel">
      <icon size="24">
        <FullScreenMaximize16Regular></FullScreenMaximize16Regular>
      </icon>

      <icon size="24"
            style="margin-left: 10px;"
            @click="showComment = !showComment"
        >
        <Close></Close>
      </icon>
    </div>
    <div class=" comment">{{comment}}条评论</div>
    <card v-for="item in 2"></card>
  </Popo>
</template>

<script setup>
import {CommentAltRegular,Share} from "@vicons/fa";
import {Icon} from "@vicons/utils";
import {Comment48Filled,FullScreenMaximize16Regular} from "@vicons/fluent";
import {Close} from "@vicons/ionicons5";
import {ref} from "vue";
import Popo from "../components/Popo.vue";
import Card from '../components/card.vue'
let showComment =ref(false)
let showShare =ref(false)

let comment = ref(12)

</script>

<style scoped>
.x-works {
  position: fixed;
  left: 40%;
  top: 40%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(2, 201, 59, 0.5);
  animation: x-works-mounted 1s forwards ease-in-out ;
  z-index: 500;
}

@keyframes x-works-mounted {
  0% {
    transform: scale(0);
    width: 100px;
    height: 100px;
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    left: 0;
    top: 0;
    z-index: 1000;
    background: var(--bg-color);
  }
}

@keyframes op1 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }

}


.content {
  opacity: 0;
  animation: op1 1s forwards ease-in-out 1.5s;
  width: 100%;
  height: 100%;
}

.content img:first-child {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.foreground {
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  object-fit: contain;
  opacity: 0;
  animation: op1 1s forwards ease-in-out 1.5s;
}

.rightContent{
  position: absolute;
  right: 10px;
  bottom: 180px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 110px;
}

.comment{
  display: flex;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
  margin: 12px;

}

.cancel{
  color: black;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  width: 100%;
  margin-top: 10px;
  margin-right: 30px;
  padding-right: 10px;
}
</style>
