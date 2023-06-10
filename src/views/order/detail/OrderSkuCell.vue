<template>
  <div class="sku-cell-main">
    <van-image :src="sku.imgUrl" />
    <div class="sku-desc">
      <span>{{ title }}</span>
      <span class="grey-text">{{ watchTime }}</span>
      <span class="grey-text">{{ cinemaName }}</span>
      <span class="grey-text">{{ seat }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { SkuListItem } from '@/types/order';
import { numberToWeek } from '@/utils/date';
import dayjs from 'dayjs';
import { computed, PropType } from 'vue';

const props = defineProps({
  sku: {
    type: Object as PropType<SkuListItem>,
    required: true
  },
})

const title = computed(() => {
  const curSku = props.sku
  return `${curSku.productName} ${curSku?.thirdOrderExtInfo?.goodsInfo?.[0].goodsName.replace('订座票', '') ?? ''}`
})

const watchTime = computed(() => {
  const time = props.sku.thirdOrderExtInfo?.goodsInfo?.[0].startDate
  return time ? `${numberToWeek(dayjs(time * 1000).day())} ${dayjs(time * 1000).format('YYYY-MM-DD')}` : 'z'
})

const cinemaName = computed(() => props.sku.thirdOrderExtInfo?.cinemaInfo.name)

const seat = computed(() => {

  const good = props.sku?.thirdOrderExtInfo?.goodsInfo?.[0]

  if (good) {
    const seatExtInfo = good?.seatExtInfo
    const hallNameCount = `${good?.seatExtInfo.hallName}(${good?.goodsCount})`
    const seats = seatExtInfo.seats.split('|')

    const seatStr = seats.map((seat) => {
      const [row, place] = seat.split(':')
      return ` ${row}排${place}座(¥${good.price / 100}) `
    }).join(' ')
    return `${hallNameCount} ${seatStr}`
  }
  return ''
})
</script>
<style lang="scss" scoped>
:deep(.van-image__img) {
  width: 5.3125rem;
  height: 7.8125rem;
  border-radius: 5px
}

.sku-cell-main {
  display: flex;

  .sku-desc {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    justify-content: space-evenly;
  }

  .grey-text {
    font-size: 13px;
    color: #797d82;
  }
}
</style>