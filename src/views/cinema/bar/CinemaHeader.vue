<template>
  <div class="cinema-header">
    <location-search-bar>
      <span class="title">影院</span>
    </location-search-bar>
    <van-dropdown-menu v-if="showDropDown" active-color="#ee0a24">
      <van-dropdown-item v-model="filter.districtId" :options="districts" @change="sendFilter" />
      <van-dropdown-item v-model="filter.ticketFlag" :options="ticketFlags" @change="sendFilter" />
      <van-dropdown-item v-model="filter.sort" :options="sorts" @change="sendFilter" />
    </van-dropdown-menu>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { TicketFlag, CinemaSort, CinemaEmitsType } from '@/types/cinema'
import { DropdownItemOption } from 'vant/lib/dropdown-item';
import { store } from '@/store';
import { CINEMA_FILTER } from '@/const/cinema';
const filter = reactive(CINEMA_FILTER)
const districts = computed(() => store.state.districts)

const showDropDown = computed(() => districts.value?.length)
const ticketFlags = ref<DropdownItemOption[]>([
  { text: 'APP订票', value: TicketFlag.APP },
  { text: '前台兑换', value: TicketFlag.FRONT }
])
const sorts = ref<DropdownItemOption[]>([
  { text: '暂不排序', value: CinemaSort.NotSorted },
  { text: '价格最低', value: CinemaSort.PriceAsc },
  { text: '价格最高', value: CinemaSort.PriceDesc },
  { text: '距离最近', value: CinemaSort.DistanceAsc },
  { text: '距离最远', value: CinemaSort.DistanceDesc }
])

const emit = defineEmits<CinemaEmitsType>()

const sendFilter = () => {
  emit('update:filter', filter)
}
</script>
<style lang="scss" scoped>
.cinema-header {
  position: sticky;
  top: 0px;
  z-index: 100;
}

.title {
  flex: 1;
  font-size: 16px;
  color: #323233;
  font-weight: 500;
  text-align: center;
}

:deep(.van-dropdown-menu__bar) {
  box-shadow: none;
  border: 0.1px solid #d2d6dc;
}

:deep(.van-dropdown-menu__title) {
  font-size: 12px;
}
</style>