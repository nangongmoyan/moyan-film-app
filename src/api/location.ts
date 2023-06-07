// import { clientRequest } from "@/utils/request"

/** 定位相关接口 */
export const locationApi = {
  /** 高德逆地理编码 */
  getAmpLocation: function (latitude:number, longitude:number) {
    return fetch(`https://restapi.amap.com/v3/geocode/regeo?key=16f231d404ed98a36a8c4dc1653e40d8&location=${latitude + ',' + longitude}&extensions=all`).then(response => response.json())
    .then(data => alert(JSON.stringify(data)));
    // return axios.get(`https://restapi.amap.com/v3/geocode/regeo?key=29401357c7731ddb6a302fd65238ce18&location=${latitude + ',' + longitude}&extensions=all`,{
    //   withCredentials:true
    // })
  }
}