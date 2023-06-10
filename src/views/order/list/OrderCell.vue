<template>
  <div class="order" @click="toOrderdetail">
    <div class="order-row-one">
      <span class="create-time">{{ createTime }}</span>
      <span class="status-name">{{ statusName }}</span>
    </div>
    <order-sku-cell v-for="sku in order.skuList" :key="sku.skuId" :sku="sku" />
    <div class="order-row-three">
      <span class="total-info">共 {{ skuListCount }} 件商品 , 总价
        <price :price="order.totalPrice" />
      </span>
      <van-button plain type="primary" size="mini" color="#797d82">再次购买</van-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import OrderSkuCell from './OrderSkuCell.vue'
import { OrderListItem } from '@/types/order';
import dayjs from 'dayjs';
import { PropType, computed } from 'vue';
import { convertStatus } from '@/utils/order'
import { useRouter } from 'vue-router';

const router = useRouter()
const props = defineProps({
  order: {
    type: Object as PropType<OrderListItem>,
    required: true
  },
})


const createTime = computed(() => dayjs(props.order.createdAt * 1000).format('YYYY-MM-DD'))


const statusName = computed(() => convertStatus(props.order.orderStatus).statusName)

const skuListCount = computed(() => props.order.skuList.length)



const toOrderdetail = () => {
  // router.push({ path: `/order/${props.order.payOrderId}` })
  // router.push({ name: 'OrderDetail', params: { orderId: props.order.payOrderId } })
  router.push({ path: `/order/detail/${props.order.payOrderId}` })
}
</script>


<style lang="scss" scoped>
:deep(.van-button) {
  border-radius: 50px;
  padding: 0 7.5px;
}

.order {
  width: calc(100vw - 50px);
  background: #fff;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;

  .order-row-one {
    display: flex;
    align-items: flex-start;
    height: 30px;
    justify-content: space-between;

    .create-time {
      font-size: 10px;
    }

    .status-name {
      font-size: 8px;
      color: #797d82;
    }
  }

  .order-row-three {
    display: flex;
    height: 30px;
    align-items: flex-end;
    justify-content: space-between;

    .total-info {
      font-size: 12px;
    }
  }



}
</style>