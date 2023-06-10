<template>
  <navigation-bar title="我的订单" />
  <div class="order-list-main">
    <van-list v-model:loading="listLoading" :finished="finished" finished-text="没有更多了" @load="onLoadMore"
      :immediate-check="false">
      <order-cell v-for="order in orders" :key="order.payOrderId" :order="order" />
    </van-list>
  </div>
</template>
<script setup lang="ts">
import { orderApi } from '@/api/order';
import OrderCell from './OrderCell.vue';
import { OrderListItem } from '@/types/order';
import { onMounted, reactive, ref } from 'vue';
const finished = ref(false)
const listLoading = ref(false)

/** 列表数据查询参数 */
const listParams = reactive({
  /** 当前页面 */
  pageNum: 1,
  /** 每页多少条数据 */
  pageSize: 8,
})

const orders = ref<OrderListItem[]>([])

onMounted(() => {
  loadOrderList()
})

const loadOrderList = async () => {
  try {
    const { data } = await orderApi.orderList(listParams)
    orders.value = data.list
  } catch (error) {
    console.log('OrderList-loadOrderList' + error)
  }
}

const onLoadMore = () => { }
</script>

<style lang="scss" scoped>
.sticky {
  position: sticky;
  top: 0px
}

.order-list-main {
  width: 100vw;
  height: 100vh;
  padding: 15px;
  background: #f4f4f4;
}
</style>