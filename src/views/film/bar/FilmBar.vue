<template>
  <film-header class="sticky" />
  <router-view :key="$route.fullPath" />
</template>
<script lang="ts" setup>
import FilmHeader from './FilmHeader.vue'
</script>

<style lang="scss" scoped>
.sticky {
  position: sticky;
  top: 0px
}
</style>