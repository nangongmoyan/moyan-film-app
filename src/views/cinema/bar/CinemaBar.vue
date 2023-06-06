<template>
  <cinema-header @update:filter="updateFilter" />
  <van-list v-model:loading="listLoading" :finished="finished" finished-text="没有更多了" :immediate-check="false">
    <cinema-cell v-for="cinema in cinemas" :key="cinema.cinemaId" :cinema="cinema" />
  </van-list>
</template>
<script setup lang="ts">
import { defaultFilter } from '../const'
import { cinemaApi } from '@/api/cinema'
import CinemaCell from './CinemaCell.vue'
import CinemaHeader from './CinemaHeader.vue'
import { CinemaItem, CinemaFilter } from '@/types/cinema'
import { onMounted, ref, reactive } from 'vue'
import { convertCinemas, filterCinemas } from '@/utils/cinema'
const finished = ref(false)
const listLoading = ref(false)
const cinemas = ref<CinemaItem[]>([])
let filter = reactive(defaultFilter)
let preFilter = reactive(defaultFilter)
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

  } catch (error) {
    console.log('CinemaBar-loadCinemaList' + error)
  }
}

const updateFilter = (value: CinemaFilter) => {
  filter = value
  loadCinemaList()
}


</script>

<style lang="scss"></style>