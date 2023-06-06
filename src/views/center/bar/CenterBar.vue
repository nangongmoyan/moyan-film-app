<template>
  <div class="center-header" v-if="userInfo">
    <img class='avatar' :src="userInfo.headIcon" alt="avatar">
    <span class="nick-name">{{ userInfo.nickName }}</span>
  </div>
  <van-cell title="余额" icon="balance-o" is-link />
  <van-cell title="订单" icon="orders-o" is-link />
  <van-cell title="优惠券" icon="coupon-o" is-link />
  <van-cell title="帮助与客服" icon="service-o" is-link />
  <van-cell title="设置" icon="setting-o" is-link to="/setting" />
</template>
<script setup lang="ts">
import { userApi } from '@/api/user';
import { User } from '@/types/user';
import { onMounted, ref } from 'vue';

const userInfo = ref<User | null>(null)

onMounted(() => {
  loadUserInfo()
})

const loadUserInfo = async () => {
  try {
    const { data } = await userApi.getUserInfo()
    userInfo.value = data
  } catch (error) {
    console.log('CenterBar-loadUserInfo' + error)
  }
}
</script>
<style lang="scss" scoped>
.center-header {
  text-align: center;
  margin-top: -2.75rem;
  height: 15rem;
  padding-left: 1.375rem;
  padding-top: 4rem;
  background: url(https://obj.pipi.cn/festatic/asgard/resources/images/dpmmweb/mycenter/bg.png);
  background-size: cover;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: #fff;
  box-sizing: border-box;

  .avatar {
    height: 3.9375rem;
    width: 3.9375rem;
    border-radius: 1.9688rem;
    margin-right: 20px;
    border: 2px solid #fff;
  }

  .nick-name {
    font-size: 16px;
  }
}
</style>