const ApiRootUrl = 'https://waimai.c3w.cc/api/';
const WebRootUrl = 'https://waimai.c3w.cc/';

var version = '';

module.exports = {
  WebUrl: WebRootUrl,
  IndexUrl: ApiRootUrl + 'index/' + version, //首页数据接口 
  AuthLoginByWeixin: ApiRootUrl + 'login', //微信登录
  RoutineStyleUrl: ApiRootUrl + 'routinestyle', //顶部样式颜色
  DecryDataUrl: ApiRootUrl + 'decrydata',//解析加密数据
  GetPhoneCodeUrl: WebRootUrl + 'sendsmscode',//获取手机验证码
  UpdatePhoneUrl: ApiRootUrl + 'updatephone',//更新手机号
  GetUserUrl: ApiRootUrl + 'getuser',//获取当前用户
  GetCertifyUrl: ApiRootUrl + 'getcertify',//获取当前用户认证信息
  OcrCardUrl: WebRootUrl + 'ocrcard',//识别身份证
  SaveVerifyUrl: ApiRootUrl + 'saveverify',//保存认证信息
  WashDetailUrl: ApiRootUrl + 'washmachine/detail',
  GetCouponUrl: ApiRootUrl + 'coupon/washCardList',//优惠券接口
  AddWashOrderUrl: ApiRootUrl + 'washorder/add_order',//提交订单接口
  GetOrderListUrl: ApiRootUrl + 'washorder/order_list', //洗车订单列表
  ConponUrlList: ApiRootUrl + 'coupon/couponList',//优惠券列表接口
  NearMachineUrl: ApiRootUrl + 'washmachine/nearby', //附近网点
  MachineListUrl: ApiRootUrl + 'washmachine/machinelist', //设备列表
  RechargePayUrl: ApiRootUrl + 'recharge', //余额充值
  GetUserMoneyUrl: ApiRootUrl + 'usermoney', //用户余额
  GetUserIntergalUrl: ApiRootUrl + 'userintergal', //用户余额
  GetVipTypesUrl: ApiRootUrl + 'vip/types', //vip类型
  RechargeVipUrl: ApiRootUrl + 'vip/recharge', //vip充值
  GetNewUserCoupnsUrl: ApiRootUrl + 'user/newusercoupons', //送给新用户的优惠券
  SearchCityListUrl: ApiRootUrl + 'region/search',//搜索城市列表
  ChangeCityUrl: ApiRootUrl + 'region/change',//改变城市
  GetPromotionImg: ApiRootUrl + 'routine/get_code',//获取推广二维码
  GetRakeBackIndexUrl: ApiRootUrl + 'rakeback_page',//佣金页面
  BindShareScene: ApiRootUrl + 'routine/share',//用户分享
  ScanMacCodeScene: ApiRootUrl + 'routine/mac_scan',//扫机器码
}