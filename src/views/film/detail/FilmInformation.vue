<template>
  <div class="information">
    <van-space>
      <van-text-ellipsis :content="props.film.name" />
    </van-space>
    <div class="detail-text">{{ category }}</div>
    <div class="detail-text">{{ premiereAt }}上映</div>
    <div class="detail-text">{{ film.nation }} | {{ film.runtime }}分钟</div>
  </div>
</template>
<script setup lang="ts">
import dayjs from 'dayjs'
import { FilmItem } from '@/types/film';
import { computed } from 'vue';
import { PropType } from 'vue';


const props = defineProps({
  film: {
    type: Object as PropType<FilmItem>,
    required: true
  },
})

const category = computed(() => props.film?.category?.split('|')?.join(' | ') ?? '')
const premiereAt = computed(() => {
  return props.film?.premiereAt ? dayjs(props.film?.premiereAt * 1000).format('YYYY-MM-DD') : ''
})
</script>

<style scoped lang="scss">
.information {
  background: #fff;
  padding: 15px;

  .detail-text {
    color: #797d82;
    font-size: 13px;
    line-height: 18.5px;
    margin-top: 4px;
  }
}
</style>