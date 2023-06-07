// import { clientRequest } from "@/utils/request"

/** 定位相关接口 */
export const locationApi = {
  /**
   * 高德逆地理编码
   * @param longitude 经度
   * @param latitude 纬度
   * @returns 
   */
  getAmpLocation: function (longitude:number, latitude:number) {
    return fetch(`https://restapi.amap.com/v3/geocode/regeo?key=16f231d404ed98a36a8c4dc1653e40d8&location=${longitude + ',' + latitude}`).then(response => response.json())
    .then(data => data);
  }
}
