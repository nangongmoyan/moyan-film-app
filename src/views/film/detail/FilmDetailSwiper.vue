<template>
  <swiper :free-mode="true" :slides-per-view="slidesPerView" :space-between="spaceBetween">
    <slot />
  </swiper>
</template>
<script setup lang="ts">
import { Swiper, } from 'swiper/vue';

import 'swiper/css';

defineProps({
  spaceBetween: {
    type: Number,
    default: 15
  },
  slidesPerView: {
    type: Number,
    default: 1
  },
})


</script>
<style lang="scss" scoped></style>