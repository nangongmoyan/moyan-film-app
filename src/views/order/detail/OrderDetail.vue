<template>
  <navigation-bar title="订单详情" />
  <div class="order-detail-main">
    <div class="order-container ">
      <order-id-status v-if="detail" :orderId="orderId" :detail="detail" />
    </div>
    <div class="order-container ">
      <order-sku-cell v-for="sku in detail?.skuList" :key="sku.skuId" :sku="sku" />
    </div>
    <div class="order-container ">
      <order-cinema v-if="cinema" :cinema="cinema" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { orderApi } from '@/api/order';
import { OrderDetail } from '@/types/order';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import OrderIdStatus from './OrderIdStatus.vue';
import OrderSkuCell from './OrderSkuCell.vue'
import OrderCinema from './OrderCinema.vue'
import { computed } from 'vue';
const route = useRoute()
const detail = ref<OrderDetail | null>(null)
const orderId = ref(route.params.orderId as string)


const cinema = computed(() => detail.value?.skuList?.[0]?.thirdOrderExtInfo?.cinemaInfo)
onMounted(() => {
  loadOrderDetail()
})

const loadOrderDetail = async () => {
  try {
    const { data } = await orderApi.orderDetail(orderId.value)
    detail.value = data
  } catch (error) {
    console.log('OrderDetail-loadOrderDetail' + error)
  }
}
</script>
<style lang="scss" scoped>
// 



.order-detail-main {
  width: 100vw;
  height: 100vh;
  padding: 15px;
  background: #f4f4f4;

  .order-container {
    width: calc(100vw - 50px);
    background: #fff;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 5px;
  }


}
</style>