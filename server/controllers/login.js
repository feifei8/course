const { mysql } = require('../qcloud')
// 登录授权接口
module.exports = async (ctx, next) => {
    // 通过 Koa 中间件进行登录之后
    // 登录信息会被存储到 ctx.state.$wxInfo
    // 具体查看：
    if (ctx.state.$wxInfo.loginState) {
       var userinfo= ctx.state.$wxInfo.userinfo
       mysql('users').insert({ 
            openId: userinfo.userinfo.openId ,
            nickName: userinfo.userinfo.nickName,
            gender: userinfo.userinfo.gender,
            language: userinfo.userinfo.language,
            city: userinfo.userinfo.city,
            province: userinfo.userinfo.province,
            country: userinfo.userinfo.country,
            avatarUrl: userinfo.userinfo.avatarUrl
            
         })
         .catch(function (e) {
           mysql('users')
             .where('openId', '=', userinfo.userinfo.openId)
            .update({

              nickName: userinfo.userinfo.nickName,
              gender: userinfo.userinfo.gender,
              language: userinfo.userinfo.language,
              city: userinfo.userinfo.city,
              province: userinfo.userinfo.province,
              country: userinfo.userinfo.country,
              avatarUrl: userinfo.userinfo.avatarUrl

            })
             .catch(function (e) {
               console.log(e)
             })
         })
       
       ctx.state.data = userinfo
       
       
    }
}
