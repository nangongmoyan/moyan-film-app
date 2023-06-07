export interface SubCityItem {
  cityId: number;
  name: string;
  pinyin: string;
  isHot: number;
}

export interface CityItem {
  index:string
  subCitys: SubCityItem[]
}