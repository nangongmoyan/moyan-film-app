export interface District {
  districtId: number;
  name: string;
}

export interface CinemaItem {
  cinemaId: number;
  name: string;
  address: string;
  longitude: number;
  latitude: number;
  gpsAddress: string;
  cityId: number;
  cityName: string;
  districtId: number;
  districtName: string;
  district: District;
  phone?: string;
  telephones: string[];
  logoUrl: string;
  businessTime: string;
  notice: string;
  isVisited: number;
  lowPrice: number;
  Distance: number;
  eTicketFlag: number;
  seatFlag: number;
  ticketTypes: null;
  distance: number
}

export enum TicketFlag {
  /** APP订票 */
  APP = '1',
  /** 前台兑换 */
  FRONT='2'
}

export enum CinemaSort {
  /** 其他/不排序 */
 NotSorted= 'noSorted',
  /** 按价格升序 */
 PriceAsc = 'priceAsc',
 /** 按价格降序 */
 PriceDesc = 'priceDesc',
 /** 按距离升序 */
 DistanceAsc = 'distanceAsc',
 /** 按距离降序 */
 DistanceDesc = 'distanceDesc'
}

export interface CinemaFilter {
  districtId: number;
  ticketFlag: TicketFlag
  sort: CinemaSort
}


export interface CinemaEmitsType {
  (e: 'update:filter', filter: CinemaFilter): void
}
