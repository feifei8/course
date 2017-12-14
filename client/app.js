/**
 * @fileOverview 微信小程序的入口文件
 */

var qcloud = require('./vendor/wafer2-client-sdk/index');
var config = require('./config');
import Touches from './common/lib/js/touches.js'


App({
  /**
   * 小程序初始化时执行，我们初始化客户端的登录地址，以支持所有的会话操作
   */
  onLaunch(ops) {
    var that=this
    console.log("app onlaunch .....")
    console.log(ops)
    if (ops.query.pk_course) {
      that.globalData.pk_course = ops.query.pk_course
      wx.setStorageSync('course', '')
      console.log("that.globalData.pk_cours ...")
      console.log(that.globalData.pk_course)
    }

    qcloud.setLoginUrl(config.service.loginUrl);
    that.login()
   
    if (ops.scene == 1044) {
      // 当用户通过带 shareTicket 的分享卡片进入小程序时，小程序才开始读取群聊信息
      // console.log(ops.shareTicket)  你可以取消这段代码的注释，将 shareTicket 输出至控制台
      wx.setStorageSync('course', '')
      this.globalData.scene = ops.scene
      var sessionKey = qcloud.getSession()
      var iv = ''
      var encryptedData = ''
      wx.getShareInfo({
        shareTicket: ops.shareTicket,
        complete(res) {
          console.log(res) // 输出加密后的当前群聊的 openGId
          iv = res.iv
          encryptedData = res.encryptedData
          var data = {
            pk_course: that.globalData.pk_course,
            sessionKey: sessionKey,
            iv: iv,
            encryptedData: encryptedData
          }
          qcloud.request({
            // 要请求的地址
            url: config.service.courseInit,
            method: 'post',
            data: data,
            login: true,
            success(result) {
              console.log("init success")
              console.log(result)
              if (result.data.code === 200) {
  
                //console.log('request success', result.data.data);

              }

            },
            catch(e) {
              console.log("init error")
              console.log(e)
            }
          })
        }
      })
      /* 特别注意：
       * 如果希望在开发者工具中，调试用户通过 1044 场景值进入小程序的情况
       * 请在开发者工具中选择「自定义编译」，场景选择 1044
       * 再随意选择一个测试群即可。
       *
       */


    } else {
      console.log("app scense else ....")
      console.log(ops.query.pk_course)
      if (ops.query.pk_course){
        qcloud.request({
          // 要请求的地址
          url: config.service.addUserCourseOther,
          method: 'post',
          data: {
            pk_course: ops.query.pk_course
          },
          login: true,
          success(result) {
            if (result.data.code === 200) {
              console.log("ops.query.pk_course ok")
              //console.log('request success', result.data.data);

            }

          },
          catch(e) {
            console.log(e)
          }
        })
      }
      
    }
   
  },
  login:function(){
    var that=this
    qcloud.login({
      success:function(result) {
        console.log('登录成功', result);

      },

      fail: function(error) {
        that.openSetting()
        console.log('登录失败', error);
      }
    });

  },

  // 跳转到设置页面开启微信授权
  openSetting: function () {
    var that = this
    if (wx.openSetting) {
      wx.openSetting({
        success: function (res) {
          //尝试再次登录
          that.login()
        }
      })
    } else {
      wx.showModal({
        title: '授权提示',
        content: '小程序需要您的微信授权才能使用哦~ 错过授权页面的处理方法：删除小程序->重新搜索进入->点击授权按钮'
      })
    }
  },
  globalData: {
    pk_course: '',
    courseTemplate: '',
    scene:''

  },
  Touches: new Touches()
});