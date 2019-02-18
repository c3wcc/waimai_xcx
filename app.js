var server = require('./utils/server');
App({
  onLaunch: function () {
  },

  login: function (cb) {
    var self = this;
    wx.login({
      success: function (res) {
        server.getJSON('/api/user/login_by_code', { code: res.code }, function (res) {

          wx.setStorageSync('token', res.data.data.token);
          self.globalData.userInfo = res.data.data;

          cb && cb(res.data.data)

        });
      }
    });
  },

  globalData: {
    openid: null,
    userInfo: [],
    hasLogin: false
  },
  onShow: function () {

  },
  onHide: function () {

  }
})
