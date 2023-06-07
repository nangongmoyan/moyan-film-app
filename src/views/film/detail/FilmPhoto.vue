<template>
  <div class="photo">
    <span class="photo-title-text">剧照</span>
    <film-detail-swiper :slidesPerView="2.3" :spaceBetween="10" style="margin-top: 12px;">
      <swiper-slide v-for="(photo, index) in photos" :key="photo">
        <img :src="photo" class="photo-img" @click="onPreview(index)" />
      </swiper-slide>
    </film-detail-swiper>
  </div>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import { showImagePreview } from 'vant'
import FilmDetailSwiper from './FilmDetailSwiper.vue';
import { SwiperSlide } from 'swiper/vue';

import 'swiper/css';

const props = defineProps({
  photos: {
    type: Array as PropType<string[]>,
    required: true
  },
})
const onPreview = (startPosition: number) => {
  showImagePreview({
    startPosition,
    closeable: true,
    images: props.photos
  })
}
</script>
<style lang="scss" scoped> .photo {
   background: #fff;
   padding: 15px;
   margin-top: 8px;

   .photo-title-text {
     font-size: 16px;
     color: #191a1b;

   }

   .photo-img {
     width: 9.375rem;
     height: 5.8438rem
   }

 }
</style>