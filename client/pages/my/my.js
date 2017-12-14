// 引入 QCloud 小程序增强 SDK
var qcloud = require('../../vendor/wafer2-client-sdk/index');
import Time from '../../common/lib/js/time.min.js'

// 引入配置
var config = require('../../config');
var App = new getApp()
Page({
  data: {
    nickName: '',
    userInfoAvatar: '',
    sex: '',
    province: '',
    city: '',
    mycourse: [],
    sharecourse: [],
    buttonbar: true,
    colors: ['rgb(250, 79, 82)', 'rgb(243, 152, 1)', 'rgb(181, 135, 250)', 'rgb(41, 182, 246)', 'rgb(129, 198, 132)'],
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
  onShow: function () {
    wx.showLoading({
      title: '加载中',
    })
    var that = this
    qcloud.request({
      url: config.service.myCourse,
      method: 'get',
      login: true,
      success(result) {
        console.log(result)
        if (result.data.code === 200) {
          console.log(result.data.data)
          var mycourse = result.data.data
          for(var i=0;i<mycourse.length;i++){
            mycourse[i].create_date = Time.ago(Date.parse(mycourse[i].create_date))
            console.log(mycourse[i].create_date)
          }
          
          qcloud.request({
            url: config.service.shareCourse,
            method: 'get',
            success(result) {
              wx.hideLoading()
              if (result.data.code === 200) {
                var sharecourse = result.data.data
                for (var i = 0; i < sharecourse.length; i++) {
                  sharecourse[i].create_date = Time.ago(Date.parse(sharecourse[i].create_date))
                  //console.log(mycourse[i].create_date)
                }
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

  },
  switchTab: function (event) {
    var pk_course = event.currentTarget.dataset.pk
    console.log(pk_course)
    App.globalData.pk_course = pk_course
    // console.log(app.globalData.pk_course)
    wx.setStorageSync('course', '')
    wx.switchTab({
      url: '/pages/course/course',
    })
  },
  touchS: function (e) {  // touchstart
    let startX = App.Touches.getClientX(e)
    startX && this.setData({ startX })
  },
  touchM: function (e) {  // touchmove
    let mycourse = App.Touches.touchM(e, this.data.mycourse, this.data.startX)
    mycourse && this.setData({ mycourse })

  },
  touchE: function (e) {  // touchend
    const width = 150  // 定义操作列表宽度
    let mycourse = App.Touches.touchE(e, this.data.mycourse, this.data.startX, width)
    mycourse && this.setData({ mycourse })
  },
  itemDelete: function (e) {  // itemDelete
    let mycourse = App.Touches.deleteItem(e, this.data.mycourse)

    mycourse && this.setData({ mycourse })
    var para = e.currentTarget.dataset
    qcloud.request({
      url: config.service.courseDel,
      method: 'POST',
      login: true,
      data: {
        pk_course: para.pk
      },
      success(result) {
        if (result.data.code === 200) {
          wx.setStorageSync('course', '')
          App.globalData.pk_course = ''
         
        }
      }

    })

  },
  stouchS: function (e) {  // touchstart
    let startX = App.Touches.getClientX(e)
    startX && this.setData({ startX })
  },
  stouchM: function (e) {  // touchmove
    let sharecourse = App.Touches.touchM(e, this.data.sharecourse, this.data.startX)
    sharecourse && this.setData({ sharecourse })

  },
  stouchE: function (e) {  // touchend
    const width = 300  // 定义操作列表宽度
    let sharecourse = App.Touches.touchE(e, this.data.sharecourse, this.data.startX, width)
    sharecourse && this.setData({ sharecourse })
  },
  itemDeleteS: function (e) {  // itemDelete
    let sharecourse = App.Touches.deleteItem(e, this.data.sharecourse)
    sharecourse && this.setData({ sharecourse })
    var para = e.currentTarget.dataset
    qcloud.request({
      url: config.service.shareCourseDel,
      method: 'POST',
      login: true,
      data: {
        pk_course: para.pk
      },
      success(result) {
        if (result.data.code === 200) {
        }
      }

    })

  },
  copyShareCourse :function(e){
    var that=this
    var para = e.currentTarget.dataset
    qcloud.request({
      // 要请求的地址
      url: config.service.courseCopy,
      method: 'post',
      data: {
        pk_course: para.pk
      },
      success(copyres) {
        wx.hideLoading()
        if (copyres.data.code === 200) {
          that.onShow()
        }
      },
      catch(e) {
        console.log(e)
      }
    });

  },
  redirectAdd:function(){
    wx.redirectTo({
      url: '/pages/course/add'
    })
  }
})