<template>
  <location-search-bar>
    <van-tabs v-model="active" animated title-active-color="#F03D37" color="#F03D37">
      <van-tab v-for="tab in tabs" :key="tab.path" :title="tab.title" :to="tab.path" />
    </van-tabs>
  </location-search-bar>
</template>
<script setup lang="ts">
import { NormalTab } from '@/types/common';
import { ref } from 'vue'
/** 活跃状态 */
const active = ref(0)
const tabs = ref<NormalTab[]>([{
  title: '正在热映',
  path: '/films/filmList/1'
},
{
  title: '即将上映',
  path: '/films/filmList/2'
}])

</script>

<style lang="scss" scoped>
:deep(.van-tabs) {
  width: calc(100vw - 9rem);
}
</style>