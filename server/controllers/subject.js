const { mysql } = require('../qcloud')
const Chance = require('chance')
const chance = new Chance()
/*
*获取科目列表
*/
async function getSubjectList(ctx, next) {
  if (ctx.state.$wxInfo.loginState === 1) {
    const output = await mysql.select('*').from('subject')
    ctx.state.code=200
    ctx.state.data = output
  } else {
    ctx.state.code = -1
  }
}

/*
*插入一条数据
*/
async function insertSubject(ctx, next) {
  req = ctx.request.body
  if (req) {
    var subject_title = req.subject_title
    var subject_desc = JSON.stringify(req.subject_desc)
    var pk_course = req.pk_course
    await mysql('subject').insert({
        pK: chance.guid(),
        subject_title: subject_title,
        subject_desc: subject_desc,
        pk_course: pk_course
      })
      .then(function () {
        ctx.state.code = 200
      })
      .catch(function (e) {
        console.log(e)
        ctx.state.data = {
          code: 900,
          message: e
        }
      })
  }
}


module.exports = {
  getSubjectList,
  insertSubject
}