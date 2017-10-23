const { mysql } = require('../qcloud')

/*
*根据openid 获取对应的课程
*/
async function getCourceByOpenID(ctx, next) {
  if (ctx.state.$wxInfo.loginState === 1) {
    var userinfo = ctx.state.$wxInfo.userinfo
    var openId=userinfo.userinfo.openId
    const output = await mysql.select('*').from('cource').where('openId', openId)
    ctx.state.code = 200
    ctx.state.data = output
  } else {
    ctx.state.code = -1
  }
}

/*
*根据openid 获取对应的课程
*/
async function addCource(ctx, next) {
  // if (ctx.state.$wxInfo.loginState === 1) {
  //   var userinfo = ctx.state.$wxInfo.userinfo
  //   var openId=userinfo.userinfo.openId
  //   var req = ctx.request.body
  //   if (req) {
  //     var course_title = req.course_title
  //     var school = req.school
  //     var cource_desc = JSON.stringify(req.cource_desc)
  //     var pk_course = req.pk_course
  //     await mysql('cource').insert({
  //       pK: chance.guid(),
  //       course_title: course_title,
  //       school: school,
  //       cource_desc: cource_desc,
  //       openId: openId

  //     })
  //       .then(function () {
  //         ctx.state.code = 200
  //       })
  //       .catch(function (e) {
  //         console.log(e)
  //         ctx.state.data = {
  //           code: 900,
  //           message: e
  //         }
  //       })
  //   }
  // }
}

  module.exports = {
    getCourceByOpenID,
    addCource
  }