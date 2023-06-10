<template>
  <div class="order-row">
    <span class="order-id">订单号：
      <span style="color: #797d82;">{{ orderId }}</span>
    </span>
    <van-button plain hairline type="primary" size="mini" color="#797d82">复制</van-button>
    <span class="grey-text" style="margin-left: auto;">{{ orderStatus.statusName }}</span>
  </div>

  <div class="order-row">
    <span class="order-row-label">下单手机号:</span>
    <span class="order-row-value">{{ detail.mobile }}</span>
  </div>
  <div class="order-row">
    <span class="order-row-label">商品总额:</span>
    <span class="order-row-value">¥ {{ totalPrice }}</span>
  </div>
  <div class="order-row">
    <span class="order-row-label">优惠券抵扣:</span>
    <span class="order-row-value">-¥ 0.0</span>
  </div>
  <div class="order-row">
    <span class="order-row-label">实付:</span>
    <span class="order-row-value">¥ {{ totalPrice }}</span>
  </div>
</template>
<script setup lang="ts">
import { OrderDetail } from '@/types/order';
import { convertStatus } from '@/utils/order';
import { computed } from '@vue/reactivity';
import { PropType } from 'vue';

const props = defineProps({
  detail: {
    type: Object as PropType<OrderDetail>,
    required: true
  },
  orderId: {
    type: String,
    required: true
  }
})


const orderStatus = computed(() => convertStatus(props.detail.orderStatus))

const totalPrice = computed(() => (props.detail.totalPrice / 100).toFixed(1))
</script>
<style lang="scss" scoped>
:deep(.van-button) {
  height: 20px;
  margin-left: 2.5px;
}



.order-row {
  display: flex;
  height: 30px;
  align-items: center;
  width: calc(100vw - 50px);
  justify-content: space-between;
}



.order-id {
  font-size: 10px;
  max-width: calc(100vw - 260px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.order-row-label {
  font-size: 12px;
}

.order-row-value {
  font-size: 10px;
  color: #797d82
}

.grey-text {
  font-size: 13px;
  color: #797d82;
}
</style>