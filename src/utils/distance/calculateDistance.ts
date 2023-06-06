export const calculateDistance = (latitude1:number, longitude1:number, latitude2:number, longitude2:number) => {
  const La1 = latitude1 * Math.PI / 180.0
  const La2 = latitude2 * Math.PI / 180.0
  const La3 = La1 - La2
  const Lb3 = longitude1 * Math.PI / 180.0 - longitude2 * Math.PI / 180.0
  let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(La3 / 2), 2) + Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(Lb3 / 2), 2)))
  s = s * 6378.137 // 地球半径
  s = Math.round(s * 10000) / 10000
  return s
}
