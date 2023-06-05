import type { MoYanResponse } from './response'
import type { FilmList } from '@/types/film'
export interface FilmListResponse extends  MoYanResponse{
  data: FilmList;
}