<template>
  <div class="card"
       @click="emit('CardClick',props.id)"
  >
    <canvas ref="canvas" class="canvas"></canvas>
    <canvas ref="foreground" class="canvas foreground"></canvas>

    <img src="https://img0.baidu.com/it/u=1122013262,2429552709&fm=253&fmt=auto&app=138&f=JPEG?w=610&h=500"
         class="userhead"
         alt="">
    <div class="font username">用户名字</div>
<!--    <div class="content font">-->
<!--      北京大学医学部.公共教学部.22级-->
<!--    </div>-->
    <div class="camera font"
         v-if="!props.login || !props.release"
    >
      拍摄后解锁
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
let emit = defineEmits(['CardClick'])
let props = defineProps({
  img: {
    type: String,
    default: "https://sns-img-hw.xhscdn.com/bc81db3a-9378-3cc0-0690-bbc77e5d82bb?imageView2/2/w/1920/format/webp|imageMogr2/strip"
  },
  login: { // 判断是否是登录状态
    type: Boolean,
    default: false
  },
  release: {
    type: Boolean,
    default: false
  },
  id:{
    type: String,
    default: "1"
  }
})

let canvas = ref(null)
let foreground = ref(null)
onMounted(() => {
  write(canvas, null, null)
  write(foreground, 100, 200,0,10)
})

function write(canvasDom, w, h, l, t) {
  // 使用 ImageBitmap 来绘制图片
  let ctx = canvasDom.value.getContext('2d')
  let img = new Image()
  img.src = props.img
  img.onload = async () => {
    let bitmap = await createImageBitmap(img)
    canvasDom.value.width = w ? w : canvasDom.value.parentNode.clientWidth
    canvasDom.value.height = h ? h : canvasDom.value.parentNode.clientHeight
    // 滤镜
    if (!props.login || !props.release) {
      ctx.filter = 'blur(100px)'
    }
    let imgWidth = bitmap.width
    let imgHeight = bitmap.height
    let canvasWidth = canvasDom.value.width
    let canvasHeight = canvasDom.value.height
    let scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight)
    let x = (canvasWidth / 2) - (imgWidth / 2) * scale
    let y = (canvasHeight / 2) - (imgHeight / 2) * scale
    ctx.drawImage(bitmap,
     l?l:x,t?t:y,
      imgWidth * scale,
      imgHeight * scale
    )
  }
}

</script>

<style scoped>
.card {
  width: 90vw;
  height: 60.333vh;
  border-radius: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.canvas {
  position: absolute;
  border-radius: 20px;
}

.userhead {
  width: 120px;
  height: 120px;
  border: 3px solid white;
  z-index: 200;
  object-fit: cover;
  border-radius: 50%;
}

.username {
  font-size: 18px;
  color: white;
  z-index: 10;
  margin-top: 10px;
}

.content {
  color: white;
  z-index: 100;
}

.camera {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
  border-radius: 10px;
  background: white;
  z-index: 10;
  /*  字体间距*/
  letter-spacing: 1px;
  font-size: 14px;
}

.foreground{
  border-radius: 20px;
  z-index: 50;
  transform:translate(-30vw,-100px);
}
</style>
