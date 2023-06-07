import { locationApi } from "@/api/location";
import { store } from "@/store";
import { GetCurrentLocationParams } from "@/types/location";
import { showLoadingToast, showFailToast, closeToast } from 'vant';
export const getCurrentLocation = ({showToast = false, needReGet = false }:GetCurrentLocationParams)=>{

  const { location } = store.state


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
      // const { latitude, longitude } = position.coords


          /** 根据经纬度逆地理编码获取定位城市数据 */
      locationApi.getAmpLocation(position.coords.latitude, position.coords.longitude).then(rlt => {
        console.log({ rlt })
        alert(JSON.stringify(rlt))
      })

    },_=>{
      const { city } = store.state
      store.commit('setCurrentCity', city?.hotCitys[0].cityId)
      closeToast()
      showFailToast('定位失败，暂时定位为随机热门城市')
    })
  }
}