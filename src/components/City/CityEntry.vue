<template>
  <div class="city-entry" @click="goToCity">
    <van-icon name="location" size="10" color="#F03D37" />
    <span class="city-name">{{ currentCityName }}</span>
  </div>
</template>
<script  lang="ts" setup>
import { store } from '@/store';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const currentCityName = computed(() => store.state.currentCity?.name)
const goToCity = () => {
  router.push('/city')
}
</script>

<style lang="scss" scoped>
.city-entry {
  width: 4.5rem;
  display: flex;
  align-items: center;

  .city-name {
    width: 3.5625rem;
    font-size: 13px;
    color: #F03D37;
    overflow: hidden;
    margin-left: 3px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>