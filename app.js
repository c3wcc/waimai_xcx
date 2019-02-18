var server = require('./utils/server');
App({
  onLaunch: function () {

    var self = this;
    var rd_session = wx.getStorageSync('rd_session');
    if (!rd_session) {
      self.login();
    } else {
      wx.checkSession({
        success: function () {
          // 登录态未过期
          self.rd_session = rd_session;
          self.getUserInfo();
        },
        fail: function () {
          //登录态过期
          self.login();
        }
      })
    }
  },
  rd_session: null,
  login: function () {
    var self = this;
    wx.login({
      success: function (res) {
        server.getJSON('/api/user/login_by_code', { code: res.code }, function (res) {
          console.log(res.data);

          // self.rd_session = res.data.data.rd_session;
          // self.globalData.hasLogin = true;
          // wx.setStorageSync('rd_session', self.rd_session);
          // self.getUserInfo();
          
        });
      }
    });
  },
  getUserInfo: function () {
    var self = this;
    wx.getUserInfo({
      success: function (res) {
        self.globalData.userInfo = res.userInfo;
        server.getJSON('/WxAppApi/checkSignature', {
          rd_session: self.rd_session,
          result: res
        }, function (res) {
          if (res.data.errorcode) {
            // TODO:验证有误处理
          }
        });
      }
    });
  },
  globalData: {
    hasLogin: false,
    shops: [
      {
        id: 1,
        img: 'http://p0.meituan.net/0.120.100/xianfu/cee03686ce4a833e7a61fabbc59da0ab6144.jpg',
        distance: 1.8,
        sales: 1475,
        logo: 'http://p1.meituan.net/xianfu/32200c3060be7903f62c9076308619ee734.png',
        name: '杨国福麻辣烫(东四店)',
        desc: '满25减8；满35减10；满60减15（在线支付专享）'
      },
      {
        id: 2,
        img: 'http://p0.meituan.net/0.120.100/xianfu/fd3a8462080c71f60f2581c2e7c1d3f43010.jpeg',
        distance: 2.4,
        sales: 1284,
        logo: 'http://p0.meituan.net/0.120.100/xianfu/d19a01f08e2f241ae5b1151d3def25427985.jpeg',
        name: '忠友麻辣烫(东四店)',
        desc: '满25减8；满35减10；满60减15（在线支付专享）'
      },
      {
        id: 3,
        img: 'http://p0.meituan.net/0.120.100/xianfu/fd3a8462080c71f60f2581c2e7c1d3f43010.jpeg',
        distance: 2.3,
        sales: 2039,
        logo: 'http://p0.meituan.net/0.120.100/xianfu/fd3a8462080c71f60f2581c2e7c1d3f43010.jpeg',
        name: '粥面故事(东大桥店)',
        desc: '满25减8；满35减10；满60减15（在线支付专享）'
      }
    ]
  },
  onShow: function () {

  },
  onHide: function () {

  }
})
