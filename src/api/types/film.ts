import type { MoYanResponse } from './response'
import type { FilmItem, FilmList } from '@/types/film'
export interface FilmListResponse extends  MoYanResponse{
  data: FilmList;
}

export interface FilmDetailResponse extends MoYanResponse {
  data: {
    film:FilmItem
  };
}
