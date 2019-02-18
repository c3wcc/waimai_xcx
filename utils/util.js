
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}


function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function toUrl(url, params) {
  let paramsArr = [];
  if (params) {
    Object.keys(params).forEach(item => {
      paramsArr.push(item + '=' + params[item]);
    })
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArr.join('&');
    } else {
      url += '&' + paramsArr.join('&');
    }
  }
  return url;
}
/**
 * 封封微信的的request
 */
function request(url, data = {}, method = "GET", redirecturl ='/pages/loading/loading') {
  return new Promise(function (resolve, reject) {
    var token = wx.getStorageSync('token');
    if(!token)
    {
      wx.navigateTo({
        url: '/pages/loading/loading',
      })
      return;
    }
    url = toUrl(url, {
      'token': token
    })
    wx.request({
      url: url,
      data: data,
      method: method,
      header: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + wx.getStorageSync('token')
      },
      success: function (res) {
        if (res.data.code == 200 || res.data.data.code==200) {
          resolve(res.data);
        } 
        if (res.code == 200)
        {
          resolve(res);
        }
        else if (res.data.status == 'error' && res.data.data =='用户未登录'){
          wx.navigateTo({
            url: '/pages/loading/loading',
          })
        }
        else {
          reject(res.message);
        }

      },
      fail: function (err) {
        reject(err)
        console.log("failed")
      }
    })
  });
}

function showErrorToast(msg) {
  wx.showToast({
    title: msg,
    image: '/images/icon_error.png',
    duration: 1500
  })
}

module.exports = {
  formatTime,
  request,
  showErrorToast,
}