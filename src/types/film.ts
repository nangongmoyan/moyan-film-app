export interface Actor {
  name: string;
  role: string;
  avatarAddress: string;
}

export enum Name {
  The2D = '2D',
  The3D = '3D',
  The4D = '4D',
}

export interface FilmType {
  name: Name;
  value: number;
}

export interface Item {
  name: Name;
  type: number;
}

export enum Nation {
  中国大陆 = '中国大陆',
  日本 = '日本',
  美国 = '美国',
}

export interface FilmItem {
  filmId: number;
  name: string;
  poster: string;
  actors: Actor[];
  director: string;
  category: string;
  synopsis: string;
  filmType: FilmType;
  nation: Nation;
  language: string;
  videoId: string;
  premiereAt: number;
  timeType: number;
  runtime: number;
  grade?: string;
  item: Item;
  isPresale: boolean;
  isSale: boolean;
  photos: string[]
}

export interface FilmList {
  films: FilmItem[]
  total:number
}

export interface FilmBanner {
  bannerId: number;
  actionType: number;
  actionData: string;
  imgUrl: string;
  masterTitle: string;
  slaveTitle: string;
  displayOrder: number;
  bindBusinessId: string;
  cityIds: string;
  name: string;
  displayTimes: number;
  slaveImgUrl: string;
  startTime: string;
  endTime: string;
  businessId: string;
}