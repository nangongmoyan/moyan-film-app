<template>
  <cinema-header @update:filter="updateFilter" />
  <div class="cinema-content">
    <ul>
      <cinema-cell v-for="cinema in cinemas" :key="cinema.cinemaId" :cinema="cinema" />
    </ul>
  </div>
  <!-- <van-list v-model:loading="listLoading" :finished="finished" finished-text="没有更多了" :immediate-check="false">
    
  </van-list> -->
</template>
<script setup lang="ts">
import BetterScroll from 'better-scroll'
import { cinemaApi } from '@/api/cinema'
import CinemaCell from './CinemaCell.vue'
import CinemaHeader from './CinemaHeader.vue'
import { CINEMA_FILTER } from '@/const/cinema'
import { onMounted, ref, reactive, nextTick } from 'vue'
import { CinemaItem, CinemaFilter } from '@/types/cinema'
import { convertCinemas, filterCinemas } from '@/utils/cinema'

const cinemas = ref<CinemaItem[]>([])
let filter = reactive(CINEMA_FILTER)
let preFilter = reactive(CINEMA_FILTER)
const originCinemas = ref<CinemaItem[]>([])


onMounted(() => {
  loadCinemaList()
})
const loadCinemaList = async () => {
  try {
    if (!(filter.ticketFlag === preFilter.ticketFlag && originCinemas.value.length > 0)) {
      const { data } = await cinemaApi.cinemaList(filter.ticketFlag)

      originCinemas.value = convertCinemas(data.cinemas)
    }
    cinemas.value = filterCinemas(originCinemas.value, filter)

    preFilter = filter

    await nextTick(() => {
      new BetterScroll('.cinema-content', {
        scrollbar: { fade: true }
      })
    })
  } catch (error) {
    console.log('CinemaBar-loadCinemaList' + error)
  }
}

const updateFilter = (value: CinemaFilter) => {
  filter = value
  loadCinemaList()
}


</script>

<style lang="scss">
.cinema-content {
  overflow: hidden;
  position: relative;
  height: calc(100vh - 8.75rem);
}
</style>