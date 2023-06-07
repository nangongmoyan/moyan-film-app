<template>
  <div v-if="film" class="film-main">
    <film-detail-header :title="film.name" />
    <img :src="film.poster" class="poster" />
    <film-information :film="film" />
    <film-actor :actors="film.actors" />
    <film-photo :photos="film.photos" />
    <van-button type="primary" block color="#F03D37" class="toBuyTicket">选票购座</van-button>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { filmApi } from '@/api/film';
import { useRoute } from 'vue-router';
import { FilmItem } from '@/types/film';
import FilmActor from './FilmActor.vue';
import FilmPhoto from './FilmPhoto.vue';
import FilmInformation from './FilmInformation.vue'
import FilmDetailHeader from './FilmDetailHeader.vue'
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
.film-main {
  background: #f4f4f4;

  padding-bottom: 3.0625rem;

  .poster {
    width: 100%;
  }

  .toBuyTicket {
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 16px;
    position: fixed;
    border-radius: 0;
    height: 3.0625rem;
    line-height: 49px;
    z-index: 100;

  }
}
</style>