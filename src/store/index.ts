import { SubCityItem } from '@/types/city'
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const state = {
  user: JSON.parse(window.localStorage.getItem('user') || 'null'),
  city: JSON.parse(window.localStorage.getItem('city') || 'null'),
  paramKey: JSON.parse(window.localStorage.getItem('paramKey') || 'null'),
  location: JSON.parse(window.localStorage.getItem('location') || 'null'),
  districts: JSON.parse(window.localStorage.getItem('districts') || 'null'),
  filmBanner: JSON.parse(window.localStorage.getItem('filmBanner') || 'null'),
  currentCity: JSON.parse(window.localStorage.getItem('currentCity') || 'null')
}

export type State = typeof state


/** 定义 injection key */
export const key: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
  plugins: [createPersistedState()],
  state,
  mutations:{
    setUser (state, payload) {
      state.user = payload

      // 为了防止页面刷新数据丢失，我们需要把 user 数据持久化
      // 注意：本地存储只能存字符串
      window.localStorage.setItem('user', JSON.stringify(payload))
    },
    setCity (state, payload) {
      state.city = payload
      window.localStorage.setItem('city', JSON.stringify(payload))
    },
    setLocation (state, payload) {
      state.location = payload
      window.localStorage.setItem('location', JSON.stringify(payload))
    },
    setDistricts (state, payload) {
      state.districts = payload
      window.localStorage.setItem('districts', JSON.stringify(payload))
    },
    setFilmBanner (state, payload) {
      state.filmBanner = payload
      window.localStorage.setItem('filmBanner', JSON.stringify(payload))
    },
    setParamKey (state, payload) {
      state.paramKey = payload
      window.localStorage.setItem('paramKey', JSON.stringify(payload))
    },
    setCurrentCity (state, payload) {
      const currentCity = (state.city.origiCitys as SubCityItem[]).find(item => item.cityId === payload)
      state.currentCity = currentCity
      window.localStorage.setItem('currentCity', JSON.stringify(currentCity))
    }
  }
})


/** 定义自己的 `useStore` 组合式函数 */
export function useStore () {
  return baseUseStore(key)
}