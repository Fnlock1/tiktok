<template>
  <div class="card">
    <!--    这是头像-->
    <div class="userhead">
      <img :src="head" alt="">
    </div>


    <!--    用户名-->
    <div class="content">
      <div class="username font">{{ name }}</div>

      <!--   这是消息   -->
      <div class="msg">
        {{ msg }}
      </div>

      <!--      这是回复 小时 -->
      <div class="reply">
        <div>{{ time }}</div>
        <div>{{ ip }}</div>
      </div>


      <!--      这是回复的长度-->
      <div class="reply "
           style="justify-content: flex-start;
                  width: 50vw;
                  align-items: center;
                  "
      >
        <div>━━━展开
          {{ reply.length }}
          条评论
        </div>
        <Icon size="14px" style="margin-left: 5px;">
          <ArrowDown24Filled></ArrowDown24Filled>
        </Icon>
      </div>



      <div class="card"
           v-for="(item,index) in 20"
           :key="index"
          style="width: 100%;margin-top: 10px;"
      >
        <div class="userhead"
              style="width: 30px;height: 30px;"
        >
          <img :src="head" alt="">
        </div>
        <div class="content">
          <div class="username font">{{ name }}</div>
          <div class="msg">
            {{ msg }}
          </div>
          <div class="reply">
            <div>{{ time }}</div>
            <div>{{ip}}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import {Icon} from "@vicons/utils";
import {ArrowDown24Filled} from "@vicons/fluent";

let props = defineProps({
  name: {
    type: String,
    default: '加载中'
  },
  head: {
    type: String,
    default: 'https://img1.baidu.com/it/u=3768804500,181908195&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
  },
  msg: {
    type: String,
    default: '测试消息，这是一个占位符，我们随便瞎说就可以了'
  },
  ip: {
    type: String,
    default: '地球'
  },
  time: {
    type: String,
    default: '两天前'
  },
  reply: {  //回复
    type: Array,
    default: []
  },
  id: {
    type: String,
    default: '123'
  },
})
</script>

<style scoped>
.card {
  width: 100vw;
  min-height: 80px;
}

.userhead {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #1D1D1D;
  margin: 10px;
  float: left;
}

.userhead img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.username {
  font-size: 14px;
  color: rgba(152, 131, 131, 0.58);
}

.msg {
  font-size: 14px;
  padding: 4px;
}

.reply {
  font-size: 12px;
  color: rgba(152, 131, 131, 0.58);
  display: flex;
  justify-content: space-between;
  padding: 4px;
  width: 30vw;
}

.content {
  display: flex;
  flex-direction: column;
}
</style>
