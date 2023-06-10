export interface ExtraInfo {
  filmId:        number;
  watchTime:     number;
  finishTime:    number;
  orderCode:     string;
  thirdOrderId:  string;
  takeTicketMsg: string;
}




export interface CinemaInfo {
  cinemaId: number;
  name:     string;
  tel:      string;
  address:  string;
  gps:      string;
}

export interface SeatEXTInfo {
  ticketType:  number;
  getType:     number;
  filmId:      number;
  filmName:    string;
  filmLogo:    string;
  scheduleId:  number;
  watchTime:   number;
  seats:       string;
  hallName:    string;
  fee:         number;
  price:       number;
  sectionId:   string;
  sectionName: string;
}


export interface GoodsInfo {
  goodsId:          number;
  goodsType:        number;
  goodsCount:       number;
  goodsName:        string;
  price:            number;
  startDate:        number;
  endDate:          number;
  confirmCode:      string;
  thirdOrderId:     string;
  otherConfirmCode: string;
  orderCode:        string;
  takeTicketMsg:    string;
  takeTicketCode:   string;
  takeTicketType:   number;
  seatExtInfo:      SeatEXTInfo;
  eticketExtInfo:   null;
  codeInfo:         null;
}


export interface ThirdOrderEXTInfo {
  thirdOrderId: string;
  cinemaInfo:   CinemaInfo;
  goodsInfo:    GoodsInfo[];
}

export interface SkuListItem {
  skuId:        number;
  productId:    number;
  productName:  string;
  productType:  number;
  name:         string;
  imgUrl:       string;
  count:        number;
  price:        number;
  finalPrice:   number;
  marketPrice:  number;
  extraInfo:    ExtraInfo;
  purchaseType: number;

  /** detail */
  productSource?: number;
  sechangeCodes?: null;
  deliveryExtInfo?: any[];
  thirdOrderExtInfo?: ThirdOrderEXTInfo;
}


export enum OrderStatus {
  ToBePay = 0,
  Complete = 1,
  Cancel = 3,
}
export interface OrderListItem {
  payOrderId:        string;
  orderId:           string;
  endPayTime:        number;
  totalPrice:        number;
  externalPayAmount: number;
  expressAmount:     number;
  orderStatus:       OrderStatus;
  payStatus:         number;
  createdAt:         number;
  virtualProduct:    number;
  packageType:       number;
  skuList:           SkuListItem[];
  orderType:         number;
  activeInfo:        null;
  cardPostponeInfo:  null;
  supplierId:        number;
}

export interface Delivery {
  name:     string;
  address:  string;
  postCode: string;
  phone:    string;
}

export interface ExpectDelivery {
  minTime: number;
  maxTime: number;
}

export interface Express {
  expressCompanyId:   number;
  expressCompanyName: string;
  expressId:          string;
}

export interface OrderDetail {
  payOrderId:          string;
  orderId:             string;
  delivery:            Delivery;
  mobile:              string;
  expressAmount:       number;
  endPayTime:          number;
  endReceiptTime:      number;
  deliveryTime:        number;
  receiptTime:         number;
  payTime:             number;
  totalPrice:          number;
  totalDiscountAmount: number;
  epayAmount:          number;
  externalPayAmount:   number;
  nonCashAmount:       number;
  orderStatus:         number;
  payStatus:           number;
  payType:             number;
  payTypeName:         string;
  virtualProduct:      number;
  express:             Express;
  createdAt:           number;
  logisticsStatus:     number;
  packageType:         number;
  skuList:             SkuListItem[];
  epayDetailList:      any[];
  packageList:         null;
  orderType:           number;
  expectDelivery:      ExpectDelivery;
  activeInfo:          null;
  skuServiceList:      null;
  cardPostponeInfo:    null;
  supplierId:          number;
  canInvoice:          number;
  invoiceInfo:         null;
}