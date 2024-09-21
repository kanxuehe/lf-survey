// import 'server-only';
import request from '@/utils/request';

export interface ICoupon {
  address: string;
  couponDailySales: null;
  couponDetailList: [];
  couponId: number;
  couponMonthlySales: null;
  couponName: string;
  couponPrice: number;
  couponSort: null;
  couponTotalSales: null;
  couponYearlySales: null;
  discountRate: number;
  imageList: [];
  logoImageURL: string;
  name: string;
  oriPrice: number;
  shopId: number;
  validPeriod: number;
}
export interface Response<T> {
  code: number;
  data: T;
  msg: string;
}
export const getCouponInfo = (params?: Record<string, any>) => {
  return request.get<Response<ICoupon>>('/go/coupon-info/getCouponInfo', {
    params,
    cacheTime: 0,
  });
};

export interface IShop {
  address: string;
  categoryList: [{ shopId: null; categoryId: number; categoryName: string }];
  environRating: number;
  favCount: null;
  imageUrlList: null;
  introduce: string;
  isFav: false;
  latitude: string;
  logoImageId: number;
  longitude: string;
  managerList: null;
  name: string;
  nearestStation: string;
  openTime: number;
  postalCode: string;
  rating: number;
  serviceRating: number;
  shopDailySales: null;
  shopId: number;
  shopMonthlySales: null;
  shopTotalSales: null;
  shopYearlySales: null;
  telephone: string;
  zipImageUrlList: null;
}

export const getShopInfo = (params?: Record<string, any>) => {
  return request.get<Response<IShop>>('/go/shop-info/getShopInfo', {
    params,
    cacheTime: 0,
  });
};
