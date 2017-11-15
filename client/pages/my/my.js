// 引入 QCloud 小程序增强 SDK
var qcloud = require('../../vendor/wafer2-client-sdk/index');

// 引入配置
var config = require('../../config');
var app = new getApp()
Page({
  data: {
    nickName: '',
    userInfoAvatar: '',
    sex: '',
    province: '',
    city: '',
    mycourse:[],
    sharecourse:[]
  },
  onLoad: function () {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        // success
        that.setData({
          nickName: res.userInfo.nickName,
          userInfoAvatar: res.userInfo.avatarUrl,
          province: res.userInfo.province,
          city: res.userInfo.city
        })
        switch (res.userInfo.gender) {
          case 0:
            that.setData({
              sex: '未知'
            })
            break;
          case 1:
            that.setData({
              sex: '男'
            })
            break;
          case 2:
            that.setData({
              sex: '女'
            })
            break;
        }
      },
      fail: function () {
        // fail
        console.log("获取失败！")
      },
      complete: function () {
        // complete
        console.log("获取用户信息完成！")
      }
    })
  },
  onShow: function(){
    var that=this
    qcloud.request({
      url: config.service.myCourse,
      method: 'get',
      login: true,
      success(result) {
        console.log(result)
        if (result.data.code === 200) {
          console.log(result.data.data)
          var mycourse = result.data.data
          qcloud.request({
            url: config.service.shareCourse,
            method: 'get',
            success(result) {
              console.log(result)
              if (result.data.code === 200) {
                var sharecourse = result.data.data
                that.setData({
                  mycourse: mycourse,
                  sharecourse: sharecourse
                })

              }
            }

          })


        }
      }

    })
    
  }
})