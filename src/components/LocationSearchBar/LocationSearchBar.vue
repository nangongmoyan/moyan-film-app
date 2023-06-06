<template>
  <div class="location-search-bar">
    <city-entry />
    <slot />
    <search-icon class="search-icon" />
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.location-search-bar {
  z-index: 10;
  height: 44px;
  display: flex;
  padding: 0 15px;
  background: #fff;
  align-items: center;
  justify-content: space-between;

  .search-icon {
    width: 4.5rem;
    display: flex;
    justify-content: flex-end;
  }
}
</style>