<template>
  <van-cell @click="toFilmDetail()">
    <van-image :src="film.poster" />
    <div class="film-info">
      <div class="film-info-name">
        <span class="film-name">{{ film.name }}</span>
        <span class="film-type">{{ film.filmType.name }}</span>
      </div>
      <div class="film-grade" v-if="film.grade">
        <span class="grade-label">观众评分：</span>
        <span class="grade">{{ film.grade }}</span>
      </div>
      <van-text-ellipsis :content="`主演：${actors}`" />
      <div class="film-nation-runtime">{{ film.nation }} | {{ film.runtime }}分钟</div>
    </div>
    <div class="film-buy-tickets">
      <van-button type="primary" @click.stop="toBuyTickets"
        :style="canBuyNow ? { background: '#F03D37' } : { background: '#ffb232' }">
        {{ canBuyNow ? '购票' : '预购' }}
      </van-button>
    </div>
  </van-cell>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import type { FilmItem } from '@/types/film'
import { computed } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const props = defineProps({
  film: {
    type: Object as PropType<FilmItem>,
    required: true
  },
  filmType: {
    type: String,
    default: '1'
  }
})

const canBuyNow = computed(() => props.filmType === '1')
const actors = computed(() => {
  if (!props.film.actors) return '暂无主演'
  return props.film.actors.map(actor => actor.name).join(' ')
})

const toFilmDetail = () => {
  router.push({ name: 'FilmDetail', params: { filmId: props.film.filmId } })
}
const toBuyTickets = () => {
  console.log('toBuyTickets')
}
</script>

<style lang="scss" scoped>
:deep(.van-cell__value) {
  display: flex;
}

:deep(.van-image__img) {
  width: 4.125rem;
  height: 5.875rem
}

:deep(.van-text-ellipsis) {
  font-size: 13px;
  color: #797d82;
  margin-top: 1px;
}

.film-info {
  flex: 1;
  padding: 0 10px;
  text-align: left;
  height: 5.875rem;

  .film-info-name {
    display: flex;
    align-items: center;

    .film-name {
      max-width: calc(100vw - 12.5rem);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #191a1b;
      font-size: 16px;
      height: 22px;
      line-height: 22px;
    }

    .film-type {
      font-size: 9px;
      color: #fff;
      background-color: #d2d6dc;
      height: 14px;
      line-height: 14px;
      padding: 0 2px;
      border-radius: 2px;
      margin-left: 3px;
    }
  }

  .film-grade {
    display: flex;
    margin-top: 2.5px;
    align-items: center;

    .grade-label {
      font-size: 13px;
      color: #797d82;
    }

    .grade {
      color: #ffb232;
      font-size: 14px;
    }
  }

  .film-nation-runtime {
    font-size: 13px;
    margin-top: 2.5px;
    color: #797d82;
  }

}

.film-buy-tickets {
  display: flex;
  height: 5.875rem;
  align-items: center;
  justify-content: center;

  .van-button {
    border: 0;
    height: 25px;
    font-size: 12px;
    padding: 0 8.5px;
    border-radius: 12.5px;
  }
}
</style>