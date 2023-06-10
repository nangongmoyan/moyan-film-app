<template>
  <div class="cinema-cell-main">
    <div class="cinema-desc">
      <span class="grey-text">{{ cinema.name }}</span>
      <span class="grey-text">{{ cinema.address }}</span>
    </div>
    <van-icon name="phone-o" size="24" color="#F03D37" />
  </div>
</template>
<script setup lang="ts">
import { CinemaInfo } from '@/types/order';
import { PropType } from 'vue';

const props = defineProps({
  cinema: {
    type: Object as PropType<CinemaInfo>,
    required: true
  },
})

</script>
<style lang="scss" scoped>
.cinema-cell-main {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .cinema-desc {
    display: flex;
    flex-direction: column;
    width: calc(100vw - 120px);
    justify-content: space-around;
  }


  .grey-text {
    font-size: 13px;
    color: #797d82;
  }

}
</style>