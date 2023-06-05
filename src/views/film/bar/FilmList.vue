<template>
  <div style="padding-bottom: 50px;">
    <van-list v-model:loading="listLoading" :finished="finished" finished-text="没有更多了" @load="onLoadMore"
      :immediate-check="false">
      <film-cell v-for="film in films" :key="film.filmId" :film="film" :filmType="type" />
    </van-list>
  </div>
</template>
<script setup lang="ts">
import { filmApi } from '@/api/film'
import FilmCell from './FilmCell.vue'
import { useRoute } from 'vue-router'
import type { FilmItem } from '@/types/film'
import { onMounted, ref, reactive } from 'vue'

const route = useRoute()
const totalCount = ref(0)
const finished = ref(false)
const listLoading = ref(false)
const films = ref<FilmItem[]>([])
const type = ref<string>(route.params.type as string)
/** 列表数据查询参数 */
const listParams = reactive({
  type,
  /** 当前页面 */
  pageNum: 1,
  /** 每页多少条数据 */
  pageSize: 8,
})

onMounted(() => {
  loadFilmList()
})


const loadFilmList = async () => {
  try {
    const { data } = await filmApi.filmList(listParams)
    films.value = [...films.value, ...data.films]
    listParams.pageNum === 1 && (totalCount.value = data.total)
  } catch (error) {
    console.log('FilmList-loadFilmList' + error)
  }
}
const onLoadMore = () => {

  setTimeout(() => {
    if (totalCount.value !== 0 && films.value.length >= totalCount.value) {
      finished.value = true
    } else {
      setTimeout(() => {
        listParams.pageNum++
        loadFilmList().then(() => {
          listLoading.value = false
        })
      }, listParams.pageSize === 1 ? 1000 : 400)
    }
  }, 400)
};

</script>
<style scoped lang="scss"></style>