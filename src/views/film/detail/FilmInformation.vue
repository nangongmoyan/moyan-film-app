<template>
  <div class="information">
    <div class="film-name-grade">
      <div class="film-name">
        <span class="name">{{ film.name }}</span>
        <span class="film-type">{{ film.filmType.name }}</span>
      </div>
      <div v-if="film.grade" class="film-grade">
        <span class="grade">{{ film.grade }}</span>
        <span class="grade-text"> 分</span>
      </div>
    </div>
    <div class="detail-text">{{ category }}</div>
    <div class="detail-text">{{ premiereAt }}上映</div>
    <div class="detail-text">{{ film.nation }} | {{ film.runtime }}分钟</div>
    <van-text-ellipsis rows="2" :content="film.synopsis" class="film-synopsis" expand-text="展开" collapse-text="收起" />
  </div>
</template>
<script setup lang="ts">
import dayjs from 'dayjs'
import { FilmItem } from '@/types/film';
import { computed, PropType } from 'vue';


const props = defineProps({
  film: {
    type: Object as PropType<FilmItem>,
    required: true
  },
})

const category = computed(() => props.film?.category?.split('|')?.join(' | ') ?? '')
const premiereAt = computed(() => {
  return props.film?.premiereAt ? dayjs(props.film?.premiereAt * 1000).format('YYYY-MM-DD') : ''
})
</script>

<style scoped lang="scss">
:deep(.van-text-ellipsis__action) {
  color: #F03D37;
  font-size: 9px;
}

.information {
  background: #fff;
  padding: 15px;
  margin-top: -10px;

  .film-name-grade {
    display: flex;
    align-items: center;

    .film-name {
      flex: 1;
      display: flex;
      align-items: center;

      .name {
        font-size: 18px;
        color: #191a1b;
        line-height: 24px;
        margin-right: 7px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: calc(100vw - 6.25rem);

      }

      .film-type {
        font-size: 9px;
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
        color: #fff;
        display: inline-block;
      }
    }

    .film-grade {
      text-align: right;
      color: #ffb232;

      .grade {
        font-size: 18px;
        font-style: italic;
      }

      .grade-text {
        font-size: 10px;
      }
    }
  }


  .detail-text {
    color: #797d82;
    font-size: 13px;
    line-height: 18.5px;
    margin-top: 4px;
  }

  .film-synopsis {
    font-size: 13px;
    color: #797d82;
    margin-top: 5px;
  }
}
</style>