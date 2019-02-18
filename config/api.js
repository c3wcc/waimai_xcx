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
  GetShopList: ApiRootUrl + 'waimai/store_list'
}