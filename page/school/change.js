const app = getApp()
const util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    schooldata:[]
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    var name = e.detail.value;

    console.log(name)

    var that = this;
    /*
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
      }
    )
    api5.getJSON('/buy/user/search_school?from=zslive&name=' + name, function (res) {
      if (res.data.status == 1) {
        that.setData({
          schooldata:res.data.data
        });
      } else {
        wx.showLoading({
          title: '请求出错',
          iocn: 'none',
          duration: 1000
        })
      }
      
    });*/
    this.setData({
      inputVal: e.detail.value
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    var that = this;
    // api5.getJSON('/buy/user/search_school?from=zslive', function (res) {
    //   if (res.data.status == 1) {
    //     console.log(res.data.data)
    //     that.setData({
    //       schooldata: res.data.data
    //     });
    //   } else {
    //     wx.showLoading({
    //       title: '请求出错',
    //       iocn: 'none',
    //       duration: 1000
    //     })
    //   }
    // });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 切换学校
   */
  change:function(e){
    var id = e.currentTarget.dataset.id;
    console.log(id)
    var that = this;
    api5.getJSON('/buy/user/confirm_school?id=' + id + '&user_id=' + app.globalData.user_id, function (res) {
      if (res.data.status == 1) {
        wx.showLoading({
          title: '更改成功',
          iocn: 'success',
          duration: 1000
        })
        wx.navigateBack({
          
        })
      } else {
        wx.showLoading({
          title: '请求出错',
          iocn: 'none',
          duration: 1000
        })
      }
    });
  }

})