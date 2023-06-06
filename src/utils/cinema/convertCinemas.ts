import { uniqBy } from 'lodash'
import { store } from "@/store";
import { CinemaItem } from "@/types/cinema";
import { calculateDistance } from "../distance";

export const convertCinemas = (cinemas:CinemaItem[])=>{
  let rlt = cinemas
  const { location } = store.state
  if (location) {
    rlt = cinemas.map(cinema => {
      const distance = calculateDistance(location?.latitude, location?.longitude, cinema.latitude, cinema.longitude)
      return { ...cinema, distance }
    })
  }

  const districts = [{ text: '全部地区', value: 0 }].concat(uniqBy(rlt.map(item => item.district), 'name').map(item => {
    return { text: item.name, value: item.districtId }
  }))

  store.commit('setDistricts', districts)
  return rlt.sort((a, b) => a.distance - b.distance)
}