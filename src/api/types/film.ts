import type { MoYanResponse } from './response'
import type { FilmBanner, FilmItem, FilmList } from '@/types/film'
export interface FilmListResponse extends  MoYanResponse{
  data: FilmList;
}

export interface FilmDetailResponse extends MoYanResponse {
  data: {
    film:FilmItem
  };
}

export interface FilmBannerResponse extends MoYanResponse {
  data: FilmBanner
}

