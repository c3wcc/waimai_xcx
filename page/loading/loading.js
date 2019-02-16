Page({
  data:{
    picture:"/images/1.jpg",
    logo:"/images/logo.png",
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){

  },
  onShow:function(){
    var that = this;
   
    // 页面显示
  //  setTimeout(function(){
  //   wx.redirectTo({
  //     url: '/page/ad/ad'
  //   })
  //  },1000)
     
  },
  //获取微信手机号码
  getPhoneNumber: function (e) {
    console.log(e.detail.errMsg)
    if (e.detail.errMsg == 'getPhoneNumber:ok') {
      wx.switchTab({
        url: '/page/index/index',
      })
    }
    else{
      wx.showToast({
        title: '请先登录！',
      })
    }
    
  },
})