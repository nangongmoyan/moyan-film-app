<template>
  <div class="sku-cell-main">
    <van-image :src="sku.imgUrl" />
    <div class="sku-desc">
      <span>{{ sku.productName }} </span>
      <span class="grey-text">观影时间：{{ watchTime }} </span>
      <span class="grey-text">观影地址：{{ sku.name }} </span>
    </div>
    <div class="price-count">
      <price :price="sku.price" />
      <span class="grey-text" style="margin-left: 3px;"> {{ skuCount }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import dayjs from 'dayjs';
import { PropType, computed } from 'vue';
import { SkuListItem } from '@/types/order';
import { numberToWeek } from '@/utils/date';

const props = defineProps({
  sku: {
    type: Object as PropType<SkuListItem>,
    required: true
  },
})


const watchTime = computed(() => {
  const time = props.sku.extraInfo.watchTime * 1000
  return `${numberToWeek(dayjs(time).day())} ${dayjs(time).format('YYYY-MM-DD')}`
})

const skuCount = computed(() => `x  ${props.sku.count}`)

</script>

<style lang="scss" scoped>
:deep(.van-image__img) {
  width: 3.75rem;
  height: 5.3406rem;
  border-radius: 5px
}

.sku-cell-main {
  display: flex;

  .sku-desc {
    display: flex;
    padding: 0 10px;
    height: 5.3406rem;
    flex-direction: column;
    width: calc(100% - 150px);
    justify-content: space-between;
  }

  .price-count {
    display: flex;
    align-items: center;

    .price {
      font-size: 15px;
    }
  }
}

.grey-text {
  font-size: 13px;
  color: #797d82;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>