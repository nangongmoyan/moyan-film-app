<template>
  <navigation-bar title="设置" />
  <div v-if="user">
    <van-cell title="账号ID" :value="user.userId" style="margin-top: 10px;" />
    <van-cell title="登录密码" value="修改" is-link style="margin-top: 10px;" />
    <van-cell title="安全密码" value="未设置" is-link />
    <van-cell title="手机号码" :value="user.nickName" is-link style="margin-top: 10px;" />
    <van-cell title="软件版本" is-link />
    <van-cell title="隐私协议" is-link to="https://m.maizuo.com/mz-auth/#/user/privacy-policy" />
    <van-cell title="用户协议" is-link />
    <van-cell title="意见反馈" is-link />
    <van-cell title="清除缓存" value="修改" style="margin-top: 10px;" />
    <van-cell title="注销账号" is-link style="margin-top: 10px;" />
    <van-button type="primary" block color="#F03D37" class="logout" @click="show = true">退出登录</van-button>
  </div>
  <van-action-sheet v-model:show="show" :actions="actions" cancel-text="取消" @select="onSelect" description="是否退出墨言电影"
    close-on-click-action />
</template>
<script setup lang="ts">
import { ref } from 'vue';

import { store } from '@/store';
import { computed } from '@vue/reactivity';
import { ActionSheetAction } from 'vant/lib/action-sheet';
import { useRouter } from 'vue-router';

interface ActionItem extends ActionSheetAction {
  key: string
}

const router = useRouter()
const show = ref(false)


const actions = ref<ActionItem[]>([{ key: 'logout', name: '退出', color: '#F03D37' }])

const user = computed(() => store.state.user)

const onSelect = (item: ActionItem) => {
  if (item.key === 'logout') {
    /** 清除登录状态 */
    store.commit('setUser', null)
    router.push({ path: '/films' })
  }
}
</script>
<style lang="scss" scoped>
.logout {
  width: calc(100vw - 1.875rem);
  position: fixed;
  bottom: 30px;
  margin-left: .9375rem;
}
</style>