var app = getApp();
var server = require('../../utils/server');
const util = require('../../utils/util.js');
const api = require('../../config/api.js');
Page({
  data: {
    showModal: false,
    currentTime: 60,
    phone: '',
    time: '获取验证码',
    filterId: 1,
    address: '选择学校…',
    banners: [{
      id: 3,
      img: '/images/swipbackground.jpg',
      url: '',
      name: '百亿巨惠任你抢'
    },
    {
      id: 1,
      img: '/images/swipbackground.png',
      url: '',
      name: '告别午高峰'
    },
    {
      id: 2,
      img: '/images/swipbackground.png',
      url: '',
      name: '金牌好店'
    }
    ],
    icons: [
      [{
        id: 1,
        img: '/images/index/icon_1.jpg',
        name: '美食外卖',
        url: ''
      },
      {
        id: 2,
        img: '/images/index/icon_2.jpg',
        name: '校友自营',
        url: ''
      },
      {
        id: 3,
        img: '/images/index/icon_3.jpg',
        name: '鲜果购',
        url: ''
      },
      {
        id: 4,
        img: '/images/index/icon_4.jpg',
        name: '下午茶',
        url: ''
      },
      {
        id: 5,
        img: '/images/index/icon_5.jpg',
        name: '正餐优选',
        url: ''
      },
      {
        id: 6,
        img: '/images/index/icon_6.jpg',
        name: '外卖专送',
        url: ''
      },
      {
        id: 7,
        img: '/images/index/icon_7.jpg',
        name: '饮品站',
        url: ''
      },
      {
        id: 8,
        img: '/images/index/icon_8.jpg',
        name: '小吃馆',
        url: ''
      }
      ],
      // [{
      //   id: 9,
      //   img: '/images/index/icon_9.jpg',
      //   name: '新商家',
      //   url: ''
      // },
      // {
      //   id: 10,
      //   img: '/images/index/icon_10.jpg',
      //   name: '免配送费',
      //   url: ''
      // },
      // {
      //   id: 11,
      //   img: '/images/index/icon_11.jpg',
      //   name: '鲜花蛋糕',
      //   url: ''
      // },
      // {
      //   id: 12,
      //   img: '/images/index/icon_12.jpg',
      //   name: '名气餐厅',
      //   url: ''
      // },
      // {
      //   id: 13,
      //   img: '/images/index/icon_13.jpg',
      //   name: '异国料理',
      //   url: ''
      // },
      // {
      //   id: 14,
      //   img: '/images/index/icon_14.jpg',
      //   name: '家常菜',
      //   url: ''
      // },
      // {
      //   id: 15,
      //   img: '/images/index/icon_15.jpg',
      //   name: '能量西餐',
      //   url: ''
      // },
      // {
      //   id: 16,
      //   img: '/images/index/icon_16.jpg',
      //   name: '无辣不欢',
      //   url: ''
      // }
      // ]
    ],
    shop_list: [],
    leftpicture: "/images/index/leftpicture.png",
    righttoppicture: "/images/index/right-toppicture.png",
    rightbottomleft: "/images/index/right-bottom-left.png",
    rightbottomright: "/images/index/right-bottom-right.png"
  },
  onLoad: function () {
    //验证
    var that = this
    app.login(userInfo => {
      if (userInfo.phone == '' || userInfo.phone == null) {
        that.setData({
          showModal: true
        })
      }
    })
    // util.request(api.UpdatePhoneUrl).then(res => {
    //   if (res.code == 200) {

    //   }
    // })
  },
  onShow: function () { },
  onScroll: function (e) {
    if (e.detail.scrollTop > 100 && !this.data.scrollDown) {
      this.setData({
        scrollDown: true
      });
    } else if (e.detail.scrollTop < 100 && this.data.scrollDown) {
      this.setData({
        scrollDown: false
      });
    }
  },
  tapSearch: function () {
    wx.navigateTo({
      url: 'search'
    });
  },
  toNearby: function () {
    var self = this;
    self.setData({
      scrollIntoView: 'nearby'
    });
    setTimeout(function () {
      self.setData({
        scrollIntoView: ''
      });
    });
  },
  tapFilter: function (e) {
    switch (e.target.dataset.id) {
      case '1':
        this.data.shops.sort(function (a, b) {
          return a.id > b.id;
        });
        break;
      case '2':
        this.data.shops.sort(function (a, b) {
          return b.sales > a.sales;
        });
        break;
      case '3':
        this.data.shops.sort(function (a, b) {
          return a.distance > b.distance;
        });
        break;
    }
    this.setData({
      filterId: e.target.dataset.id,
      shops: this.data.shops
    });
  },
  tapBanner: function (e) {
    var name = this.data.banners[e.target.dataset.id].name;
    wx.showModal({
      title: '提示',
      content: '您点击了“' + name + '”活动链接，活动页面暂未完成！',
      showCancel: false
    });
  },
  //获取验证码按钮
  getCode: function () {
    var that = this;
    var currentTime = that.data.currentTime
    let interval = setInterval(function () {
      currentTime--;
      that.setData({
        time: currentTime + '秒后重发'
      })
      if (currentTime <= 0) {
        clearInterval(interval)
        that.setData({
          time: '重新发送',
          currentTime: 60,
          getingCode: false
        })
      }
    }, 1000)
    return interval;
  },
  //api获取验证码
  getVerificationCode() {
    var that = this
    if (that.data.phone == '') {
      util.showErrorToast('请输入手机号');
      return;
    } else {
      var interval = that.getCode();
      that.setData({
        getingCode: true
      })
      wx.request({
        url: api.GetPhoneCodeUrl,
        method: 'get',
        dataType  : 'json',
        data: {
          'phone': that.data.phone
        },
        success: function (res) {
          if (res.data != 'OK') {
            util.showErrorToast(res.data);
            clearInterval(interval)
            that.setData({
              getingCode: false,
              time: '获取验证码'
            })
          }
        }
      });
    }
  },
  bindKeyInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
    console.log(e.detail.value);
  },
  //表单提交验证
  phoneFormSubmit(e) {
    var that = this;
    if (e.detail.value.phone == '') {
      util.showErrorToast('请输入手机号');
      return false;
    }
    if (e.detail.value.code == '') {
      util.showErrorToast('请输入手机验证码');
      return false;
    }
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    that.savePhone(e.detail.value.phone, e.detail.value.code);
  },
  savePhone: function (phone, code = null) {
    var that = this;

    util.request(api.UpdatePhoneUrl, {
      phone: phone,
      code: code
    }, 'POST').then(res => {
      if (res.code == 200) {
        //存储用户信息
        wx.showToast({
          title: '登录成功',
          duration: 2000
        })
        that.setData({
          showModal: false
        })
        app.globalData.phone = phone
      } else {
        util.showErrorToast('登录失败，稍后重试');
      }
    });
  },
  //获取微信手机号码
  getPhoneNumber: function (e) {
    var that = this
    if (e.detail.errMsg == 'getPhoneNumber:ok') {
      util.request(api.DecryDataUrl, {
        'iv': e.detail.iv,
        'encryptData': e.detail.encryptedData
      }, 'POST').then(function (res) {
        if (res.status == 'success' && res.code == 200) {
          that.savePhone(res.data.phoneNumber);
        } else {
          util.showErrorToast(res);
        }
      });
    }
  },
  location:function(){
    wx.navigateTo({
      url: '../school/change',
    })
  }
});