<template>
  <navigation-bar />
  <div class="login-main">
    <img class='logo' src="@/assets/logo.png" />
    <div class="logo-label">墨言电影</div>
    <van-form class="login-form">
      <van-cell-group inset>
        <van-field clearable type="tel" label="手机号" maxlength="11" v-model="formData.mobile" placeholder="请输入手机号" />
        <van-field center clearable type="tel" maxlength="6" label="短信验证码" v-model="formData.smsCode"
          placeholder="请输入短信验证码">
          <template #button>
            <van-button size="small" type="primary" color='#F03D37' @click="sendSms" :disabled="!smsAbled">
              {{ smsBtnText }}
            </van-button>
          </template>
        </van-field>
      </van-cell-group>
    </van-form>
    <van-button block type="primary" color='#F03D37' @click="onLogin" loading-text="登录中..." :loading="logining"
      :disabled='!loginAbled'>
      登录
    </van-button>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import { computed } from '@vue/reactivity';
import { authApi } from '@/api/auth';
import { store } from '@/store';
import router from '@/router';
import { useRoute } from 'vue-router';

const route = useRoute()
const waitTime = ref(60)
const logining = ref(false)
const smsBtnText = ref('发送验证码')
const getSmsBtnDisable = ref(false)
const smsAbled = computed(() => {
  return /^1[3456789]\d{9}$/.test(formData.mobile) && !getSmsBtnDisable.value
})
const loginAbled = computed(() => {
  return /^1[3456789]\d{9}$/.test(formData.mobile) && formData.smsCode !== '' && !logining.value
})
const formData = reactive({
  /** 电话号码 */
  mobile: '',
  /** 短信验证码 */
  smsCode: '',
})


const sendSms = () => {
  try {
    authApi.sendSmsCode({ mobile: formData.mobile, type: '1' })
    // this.waitTime--
    getSmsBtnDisable.value = true
    const timer = setInterval(() => {
      if (waitTime.value > 1) {
        waitTime.value--
        smsBtnText.value = `${waitTime.value}s 后重新发送`
      } else {
        clearInterval(timer)
        waitTime.value = 60
        smsBtnText.value = '发送验证码'
        getSmsBtnDisable.value = false
      }
    }, 1000)
  } catch (error) {
    console.log('LoginPage-sendSms' + error)
  }
}

const onLogin = async () => {
  try {
    logining.value = true
    const { data } = await authApi.loginBySms(formData)
    store.commit('setUser', data)
    router.push((route.query.redirect as string) ?? '/film')
  } catch (error) {
    console.log('LoginPage-onLogin' + error)
  }
  logining.value = false
}
</script>

<style lang="scss" scoped>
.login-main {
  display: flex;
  padding: 0 15px;
  padding-top: 5vh;
  align-items: center;
  flex-direction: column;

  .logo {
    width: 7.5rem;
    height: 7.5rem;
  }

  .logo-label {
    font-size: 30px;
  }

  .login-form {
    width: 100vw;
    margin-top: 45px;
    margin-bottom: 60px;
  }
}
</style>