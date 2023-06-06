<template>
  <van-cell>
    <van-space>
      <div class="cinema-left">
        <van-text-ellipsis :content="props.cinema.name" class="cinema-name" />
        <div class="cinema-address-container">
          <van-icon name="location" size="10" style="margin-top: 5px;" />
          <van-text-ellipsis :content="props.cinema.address" class="cinema-address-name" />
        </div>
      </div>
      <div class="cinema-right">
        <span class="price-fmt">
          <i> ¥ </i>
          <span>{{ props.cinema.lowPrice / 100 }}</span>
          <span class="upon"> 起 </span>
        </span>
        <div class="cinema-gpsAddress">
          <span class="cinema-distance">{{ props.cinema.distance ? props.cinema.distance.toFixed(1) + 'km' : '距离未知'
          }}</span>
        </div>
      </div>
    </van-space>
  </van-cell>
</template>
<script setup lang="ts">
import { CinemaItem } from '@/types/cinema';
import type { PropType } from 'vue'
const props = defineProps({
  cinema: {
    type: Object as PropType<CinemaItem>,
    required: true
  },
})
</script>
<style lang="scss" scoped>
:deep(.van-cell__value) {
  text-align: left;
}

.cinema-left {
  width: calc(100vw - 6.25rem);

  .cinema-name {
    color: #191a1b;
    font-size: 15px;
  }

  .cinema-address-container {
    display: flex;
    align-items: center;


    .cinema-address-name {
      color: #797d82;
      font-size: 12px;
      margin-top: 5px;
      width: calc(100vw - 7.5rem);
    }
  }
}

.cinema-right {
  display: flex;
  width: 3.75rem;
  margin-left: auto;
  align-items: flex-end;
  flex-direction: column;

  .price-fmt {
    font-size: 15px;
    color: #F03D37;
    height: 0 !important;
    display: inline-table !important;

    .upon {
      font-size: 10px;
    }
  }

  .cinema-gpsAddress {
    color: #797d82;
    margin-top: 5px;

    .cinema-distance {
      font-size: 9px;
    }
  }
}
</style>