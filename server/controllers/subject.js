const { mysql } = require('../qcloud')
const Chance = require('chance')
const chance = new Chance()
/*
*获取科目列表
*/
async function getSubjectList(ctx, next) {
  if (ctx.state.$wxInfo.loginState === 1) {
    req = ctx.query
    var pk_course = req.pk_course
    await mysql.select('*').from('subject').where("pk_course", "=", pk_course)
    .then(function(resp){
      ctx.state.code = 200
      ctx.state.data = resp
    })
    .catch(function (e) {
        console.log(e)
        ctx.state.code = 900
    })
   
  } else {
    ctx.state.code = -1
  }
}

/*
*插入/更新一条数据
*/
async function insertSubject(ctx, next) {
  req = ctx.request.body
  if (req) {
    var pk = req.pk
    var subject_title = req.subject_title
    var subject_desc = JSON.stringify(req.subject_desc)
    var pk_course = req.pk_course
    if (!pk) {
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
    else {
      await mysql("subject")
        .where("pk", "=", pk)
        .update({
          subject_title: subject_title,
          subject_desc: subject_desc,
          pk_course: pk_course
        })
        .then(function () {
          ctx.state.code = 200
        })
        .catch(function (e) {
          console.log(e)
          ctx.state.code = 900
        })
    }

  }
}
/*
*删除一条数据
*/
async function deleteSubject(ctx,next){
  req = ctx.request.body
  if (req) {
    var pk = req.pk
    if(pk){
      await mysql("subject")
        .where("pk", "=", pk)
        .del()
        .then(function () {
          ctx.state.code = 200
        })
        .catch(function (e) {
          console.log(e)
          ctx.state.code = 900
        })
    }

  }
}
module.exports = {
  getSubjectList,
  insertSubject,
  deleteSubject
}