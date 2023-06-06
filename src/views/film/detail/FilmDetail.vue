<template>
  <div v-if="film">
    <img :src="film.poster" class="poster" />
    <film-information :film="film" />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { filmApi } from '@/api/film';
import { FilmItem } from '@/types/film';
import { useRoute } from 'vue-router';
import FilmInformation from './FilmInformation.vue'
const route = useRoute()
const film = ref<FilmItem | null>(null)
const filmId = ref(route.params.filmId as string)


onMounted(() => {
  loadFilmDetail()
})

const loadFilmDetail = async () => {
  try {
    const { data } = await filmApi.filmInfo(filmId.value)
    film.value = data.film
  } catch (error) {
    console.log('FilmDetail-loadFilmDetail' + error)
  }
}
</script>
<style lang="scss" scoped>
.poster {
  width: 100%;
}
</style>