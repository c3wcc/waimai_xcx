Page({
  data:{
    picture:"/images/1.jpg"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){

  },
  onShow:function(){
    var that = this;
   
    // 页面显示
   setTimeout(function(){
    wx.redirectTo({
      url: '/page/ad/ad'
    })
   },1000)
     
  },
})