

<template>
  <router-view />
  <bottom-tab-bar />
  <van-dialog v-model:show="show" width="18.875rem" :showConfirmButton="false" style="background: transparent;">
    <template #default>
      <img :src="banner?.imgUrl" class="dialog-img" @click="toBannerDetail" />
    </template>
    <template #footer>
      <div class='dialog-footer'>
        <van-icon name="close" size="30" color="#fff" @click="show = false" />
      </div>
    </template>
  </van-dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { FilmBanner } from './types/film';
import { onMounted } from 'vue';
import { dataIsFailure } from '@/utils/store/dataIsFailure'
import { convertFilmBanner } from '@/utils/dialog/convertFilmBanner'
import { useRouter } from 'vue-router';
const show = ref(false);
const router = useRouter()
let banner = ref<FilmBanner | null>(null)



onMounted(() => {
  loadFilmBanner()
})
const loadFilmBanner = () => {
  if (dataIsFailure('filmBanner', (_, subTimestamp) => subTimestamp)) {
    convertFilmBanner().then(rlt => {
      rlt && (banner.value = rlt)
      show.value = true
    })
  }

}

const toBannerDetail = () => {
  if (banner.value?.actionData) {
    const businessId = JSON.parse(banner.value.actionData)?.businessId
    businessId && router.push({ name: 'FilmDetail', params: { filmId: businessId } })
    show.value = false
  }
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.dialog-img {
  width: 18.875rem;
  height: 10.625rem;
  border-radius: 16px;
}

.dialog-footer {
  height: 42px;
  display: flex;
  background: transparent;
  align-items: center;
  justify-content: center;
}


ul {
  list-style: none;
}
</style>
