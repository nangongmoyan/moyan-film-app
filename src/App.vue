

<template>
  <div v-if="currentCity">
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
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import { FilmBanner } from './types/film';
import { onMounted } from 'vue';
import { dataIsFailure } from '@/utils/store/dataIsFailure'
import { convertFilmBanner } from '@/utils/dialog/convertFilmBanner'
import { useRouter } from 'vue-router';
import { convertCity } from './utils/city';
import { getCurrentLocation } from './utils/location';
import { store } from './store';
// import { getCurrentLocation } from './utils/location';
const show = ref(false);
const router = useRouter()
let banner = ref<FilmBanner | null>(null)

const currentCity = computed(() => store.state.currentCity)

onMounted(() => {
  loadCity()

})


const loadCity = () => {
  /** 1.前提：地址数据要有 */
  /** 1.1 地址数据如果缓存有责不请求 */
  /** 2.进行定位处理 */
  /** 2.1在第一次打开的时候进行定位，定位成功缓存起来，缓存有数据则不请求，缓存没数据则请求 */
  if (dataIsFailure('city', (value, subTimestamp) => {
    return !value?.citys || (value?.citys?.length > 0 && subTimestamp)
  })) {
    convertCity().then(_ => {
      getCurrentLocation({})
    })
  }

  console.log({ currentCity0: currentCity.value })

  setTimeout(() => {
    if (currentCity.value?.cityId && dataIsFailure('filmBanner', (_, subTimestamp) => subTimestamp)) {
      console.log({ currentCity })
      convertFilmBanner().then(rlt => {
        if (rlt) {
          banner.value = rlt
          show.value = true
        }
      })
    }
  }, 2200)


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
