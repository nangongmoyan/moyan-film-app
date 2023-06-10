import { store } from "@/store";
import { locationApi } from "@/api/location";
import { GetCurrentLocationParams } from "@/types/location";
import { showLoadingToast, showFailToast, closeToast, showConfirmDialog, closeDialog } from 'vant';
import router from "@/router";

export const getCurrentLocation = ({showToast = false, needReGet = false }:GetCurrentLocationParams)=>{

  const { city, location, currentCity } = store.state


  if(!location || needReGet){
    navigator.geolocation.getCurrentPosition(position => {

      if(showToast){
        showLoadingToast({
          duration: 0,
          forbidClick: true,
          message: '定位中...',
          icon: 'location-o'
        })
      }

      /** 获取经纬度 */
      const { longitude, latitude } = position.coords

      /** 根据经纬度逆地理编码获取定位城市数据 */
      locationApi.getAmpLocation(longitude, latitude).then(rlt => {
        const cityName = rlt?.regeocode?.addressComponent?.city
        const curCity = city.origiCitys.find(item=>cityName.includes(item.name))

        /** 当前定位匹配地址中的数据 */
        const location = {  latitude, longitude, city:curCity }

        store.commit('setLocation', location)


        if(showToast){
          currentCity.cityId!==curCity.cityId &&  showConfirmDialog({
            message:`您当前的定位在：${curCity.name},是否切换到定位城市？`,
            beforeClose:(action)=>{
              if(action === 'confirm'){
                store.commit('setCurrentCity', curCity.cityId)
                closeDialog()
                router.replace('./films')
              }else {
                closeDialog()
              }
            },
          })
        }else{
          store.commit('setCurrentCity', curCity.cityId)
        }
      })
      setTimeout(() => closeToast(), 1000)
    },_=>{
      const { city } = store.state
      store.commit('setCurrentCity', city?.hotCitys[0].cityId)
      closeToast()
      showFailToast('定位失败，暂时定位为随机热门城市')
    })
  }
}