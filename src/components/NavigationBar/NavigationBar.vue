<template>
  <van-nav-bar :title="props.title" :left-text="props.leftText">
    <template #left>
      <div @click="onClickLeft">
        <van-icon v-if="showArrowLeft" name="arrow-left" size="20" color="#a3a3a3" />
      </div>
    </template>
    <template #right v-if="showRight">
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  leftText: {
    type: String,
    default: ''
  },
  showArrowLeft: {
    type: Boolean,
    default: true
  },
  showRight: {
    type: Boolean,
    default: false
  },
})



const onClickLeft = () => router.back()
</script>
<style lang="scss" scoped></style>