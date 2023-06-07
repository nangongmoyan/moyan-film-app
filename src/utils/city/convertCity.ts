import { cityApi } from "@/api/city"
import { store } from "@/store"
import { CityItem, SubCityItem } from "@/types/city"
import dayjs from "dayjs"

export const convertCity = async()=>{
  const rlt = await cityApi.cityList()
  /** 接口返回的城市列表数据 */
  const origiCitys = rlt?.data?.cities ?? []
  /** 按字母归类后的城市列表 */
  const citys = convertCityList(origiCitys)
  /** 城市列表索引，在选择城市的右侧展示 */
  const cityIndexs = citys.map(city => city.index)
  /** 热门城市 */
  const hotCitys = origiCitys.filter(city => city.isHot)

  store.commit('setCity', {
    citys,
    hotCitys,
    origiCitys,
    cityIndexs,
    resTimestamp: dayjs().valueOf()
  })
  return { citys, hotCitys, cityIndexs, origiCitys }
}

const convertCityList = (list:SubCityItem[]) => {
  const citys:CityItem[] = []
  const letters:string[] = []

  for (let i = 65; i < 91; i++) {
    /** 生成26个字母的字符串数组 */
    letters.push(String.fromCharCode(i))
  }

  for (let m = 0, len = letters.length; m < len; m++) {
    const subCitys = list.filter(item => item.pinyin.substring(0, 1).toUpperCase() === letters[m])
    if (subCitys.length > 0) {
      citys.push({ index: letters[m], subCitys })
    }
  }

  return citys
}
