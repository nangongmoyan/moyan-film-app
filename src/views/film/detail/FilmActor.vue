<template>
  <div class="actor">
    <span class="actor-title-text">演职人员</span>
    <film-detail-swiper :slidesPerView="3.8" :spaceBetween="10" style="margin-top: 12px;">
      <swiper-slide v-for="actor in actors" :key="actor.name">
        <img :src="actor.avatarAddress" class="avatarAddress" />
        <div class="actor-name">{{ actor.name }}</div>
        <div class="actor-role">{{ actor.role }}</div>
      </swiper-slide>
    </film-detail-swiper>
  </div>
</template>
<script setup lang="ts">
import { Actor } from '@/types/film';
import { PropType } from 'vue';
import FilmDetailSwiper from './FilmDetailSwiper.vue';
import { SwiperSlide } from 'swiper/vue';

import 'swiper/css';
const props = defineProps({
  actors: {
    type: Array as PropType<Actor[]>,
    required: true
  },
})


</script>
<style lang="scss" scoped>
.actor {
  background: #fff;
  padding: 15px;
  margin-top: 8px;

  .actor-title-text {
    font-size: 16px;
    color: #191a1b;
  }

  .avatarAddress {
    width: 5.3125rem;
    height: 7.3281rem
  }

  .actor-name {
    font-size: 12px;
    color: #191a1b;
    width: 5.3125rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  }

  .actor-role {
    font-size: 10px;
    line-height: 16px;
    height: 32px;
    color: #797d82;
    width: 5.3125rem;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: break-spaces;
    text-align: center;
  }
}
</style>