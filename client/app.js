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
    if (ops.query.pk_course) {
      that.globalData.pk_course = ops.query.pk_course
    }
    qcloud.setLoginUrl(config.service.loginUrl);
    qcloud.login({
      success(result) {
        console.log('登录成功', result);
       
      },

      fail(error) {
        //showModel('登录失败', error);
        console.log('登录失败', error);
      }
    });
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

            success(result) {
              if (result.data.code === 200) {
                //console.log('request success', result.data.data);

              }

            },
            catch(e) {
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
      if (ops.query.pk_course){
        qcloud.request({
          // 要请求的地址
          url: config.service.addUserCourseOther,
          method: 'post',
          data: {
            pk_course: ops.query.pk_course
          },

          success(result) {
            if (result.data.code === 200) {
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
  globalData: {
    pk_course: '3e2db990-9243-11e7-ad52-525400e4179c',
    courseTemplate: '',
    scene:''

  },
  Touches: new Touches()
});