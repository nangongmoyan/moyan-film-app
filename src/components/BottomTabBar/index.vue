<template>
  <van-tabbar v-if="$route.meta?.showTab" route active-color="#F03D37">
    <van-tabbar-item replace to="/films" icon="fire-o">电影</van-tabbar-item>
    <van-tabbar-item replace to="/cinemas" icon="home-o">影院</van-tabbar-item>
    <van-tabbar-item replace to="/center" icon="contact">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped></style>
