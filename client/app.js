/**
 * @fileOverview 微信小程序的入口文件
 */

var qcloud = require('./vendor/wafer2-client-sdk/index');
var config = require('./config');


App({
  /**
   * 小程序初始化时执行，我们初始化客户端的登录地址，以支持所有的会话操作
   */
  onLaunch(ops) {
    var that=this
    qcloud.setLoginUrl(config.service.loginUrl);
    qcloud.login({
      success(result) {
        //showSuccess('登录成功');
        console.log('登录成功', result);
      },

      fail(error) {
        //showModel('登录失败', error);
        console.log('登录失败', error);
      }
    });
    if (ops.scene == 1044) { // 当用户通过带 shareTicket 的分享卡片进入小程序时，小程序才开始读取群聊信息
      // console.log(ops.shareTicket)  你可以取消这段代码的注释，将 shareTicket 输出至控制台
      var pk_course = ops.query.pk_course
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
            pk_course: pk_course,
            sessionKey: sessionKey,
            iv: iv,
            encryptedData: encryptedData
          }

          qcloud.request({
            // 要请求的地址
            url: config.service.courseInit,
            method: 'post',
            // 请求之前是否登陆，如果该项指定为 true，会在请求之前进行登录
            login: true,
            data: data,

            success(result) {
              if (result.data.code === 200) {
                console.log('request success', result.data.data);

              }
              that.globalData.pk_course = pk_course
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
      
    }
  },
  globalData: {
    pk_course: '3c5be2a5-7434-5112-8512-cd3f5f64a5a6',
    courseTemplate: ''

  }
});