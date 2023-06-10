
import dayjs from "dayjs"
import { store } from "@/store"
import { filmApi } from "@/api/film"

export const convertFilmBanner = async() => {
  try {
    const cityId = store.state.currentCity?.cityId

    const { data:banner } = await filmApi.filmBanner()
    store.commit('setFilmBanner', { resTimestamp: dayjs().valueOf(), todayShow: false })
    return banner
  } catch (error) {
    console.log('App-loadFilmBanner' + error)
  }
}