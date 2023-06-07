<template>
  <div class="nav-bar-main"
    :style="isDownScroll ? { background: 'white', 'border-bottom': '0.5px solid #d2d6dc' } : { background: 'transparent' }">
    <div class="goBack">
      <van-icon name="arrow-left" @click="goBack" />
    </div>
    <span v-if="isDownScroll" class="title">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  scrollValue: {
    type: Number,
    default: 50
  },
})

onMounted(() => {
  window.onscroll = hanleScroll
})
const isDownScroll = ref(false)

const goBack = () => {
  router.back()
}
const hanleScroll = () => {
  if ((document.documentElement.scrollTop || document.body.scrollTop) >= props.scrollValue) {
    isDownScroll.value = true
  } else {
    isDownScroll.value = false
  }
}
</script>
<style lang="scss" scoped>
.nav-bar-main {
  top: 0;
  left: 0;
  width: 100vw;
  height: 44px;
  position: fixed;
  background: transparent;
  display: flex;
  justify-content: center;

  .goBack {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background: #f4f4f438;
    left: 15px;
    top: 7px;

    top: img {
      width: 30px;
    }
  }

  .title {
    font-size: 17px;
    line-height: 44px;
  }
}
</style>