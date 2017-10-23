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
        qcloud.setLoginUrl(config.service.loginUrl);
        console.log(ops)
        if (ops.scene == 1044) { // 当用户通过带 shareTicket 的分享卡片进入小程序时，小程序才开始读取群聊信息
          // console.log(ops.shareTicket)  你可以取消这段代码的注释，将 shareTicket 输出至控制台
          wx.getShareInfo({
            shareTicket: ops.shareTicket,
            complete(res) {
              console.log(res) // 输出加密后的当前群聊的 openGId
            }
          })
          /* 特别注意：
           * 如果希望在开发者工具中，调试用户通过 1044 场景值进入小程序的情况
           * 请在开发者工具中选择「自定义编译」，场景选择 1044
           * 再随意选择一个测试群即可。
           *
           */
        }
    },
    globalData: {
      pk_course:''
     
    }
});