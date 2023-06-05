import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'


const state = {}

export type State = typeof state


/** 定义 injection key */
export const key: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
  state,
  mutations:{

  }
})


/** 定义自己的 `useStore` 组合式函数 */
export function useStore () {
  return baseUseStore(key)
}