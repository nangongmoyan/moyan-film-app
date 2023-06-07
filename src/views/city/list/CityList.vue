<template>
  <div class="city-header">
    <navigation-bar title="当前城市-" />
    <van-search show-action v-model="searchValue" placeholder="请输入搜索关键词" @update:model-value="onSearch"
      @cancel="onCancel" />
  </div>
  <div class="city-recommend">
    <div class="city-title">GPS定位你所在城市</div>
    <van-row style="justify-content:flex-start ;">
      <van-col>深圳</van-col>
    </van-row>
    <div class="city-title">热门城市</div>
    <van-row v-if="city?.hotCitys?.length > 0">
      <van-col v-for="hotCity in city?.hotCitys" :key="hotCity.cityId" @click="onSelect(hotCity.cityId)">
        {{ hotCity.name }}
      </van-col>
    </van-row>
  </div>
  <div v-if="city?.citys?.length > 0">
    <van-index-bar :index-list="city.cityIndexs" :sticky-offset-top="100">
      <div v-for="item in city?.citys" :key="item.index">
        <van-index-anchor :index="item.index" />
        <van-cell v-for="subCity in item.subCitys" :key="subCity.cityId" :title="subCity.name"
          @click="onSelect(subCity.cityId)" />
      </div>
    </van-index-bar>
  </div>
</template>
<script setup lang="ts">
import { useStore } from '@/store';
import { convertCity } from '@/utils/city';
import { dataIsFailure } from '@/utils/store';
import { computed, ref } from 'vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';


const store = useStore()
const router = useRouter()
const searchValue = ref('')
const city = computed(() => {
  return store.state.city
})
onMounted(() => {
  loadCityList()
})

const loadCityList = () => {
  if (dataIsFailure('city', (value, subTimestamp) => {
    return !value?.citys || (value?.citys?.length > 0 && subTimestamp)
  })) {
    convertCity()
  }
}

const onSearch = () => {

}

const onCancel = () => {

}

const onSelect = (cityId: number) => {
  store.commit('setCurrentCity', cityId)
  router.replace('./films')
}
</script>
<style lang="scss" scoped>
.city-header {
  top: 0;
  z-index: 100;
  position: sticky;
}

.city-recommend {
  padding: 0 15px;

  .city-title {
    font-size: 13px;
    color: #797d82;
    margin-bottom: 10px;
    margin-top: 10px;
  }
}

.van-row {
  margin-left: 10px;
  width: calc(100vw - 50px);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .van-col {
    background: #f4f4f4;
    width: 6.25rem;
    height: 30px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    margin-bottom: 10px;
  }
}

.van-index-bar__sidebar {
  .van-index-anchor {
    background: #f4f4f4;
  }
}
</style>