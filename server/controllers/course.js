const { mysql } = require('../qcloud')
const Chance = require('chance')
const chance = new Chance()
const WXBizDataCrypt = require('../middlewares/WXBizDataCrypt')
/*
*根据openid 获取对应的课程
*/
async function getCourseByOpenID(ctx, next) {
  if (ctx.state.$wxInfo.loginState === 1) {
    var userinfo = ctx.state.$wxInfo.userinfo
    var openId = userinfo.openId
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
async function getCourseByPK(ctx, next) {
  if (ctx.state.$wxInfo.loginState === 1) {
    var userinfo = ctx.state.$wxInfo.userinfo
    var openId = userinfo.openId
    req = ctx.query
    const courseTemplate = {
      pk_course: '',
      course_title: '',
      course_desc: '',
      listData: []
    }
    var pk_course = req.pk_course
    await mysql.select('*').from('course').where('pk', pk_course)
      .then(function (rows) {
        courseTemplate.pk_course = pk_course
        courseTemplate.course_title = rows[0].course_title
        courseTemplate.course_desc = JSON.parse(rows[0].course_desc)
        return mysql.select('lesson_id',
          mysql.raw('max(lesson_start) as lesson_start'),
          mysql.raw('max(lesson_end) as lesson_end'),
          mysql.raw('max(case when week="monday" then CONCAT(\'{"pk_subject": "\',subject.pk,\'", "subject_title": "\',subject.subject_title,\'", "subject_desc": \',subject.subject_desc,\' }\') end) as monday'),
          mysql.raw('max(case when week="tuesday" then CONCAT(\'{"pk_subject": "\',subject.pk,\'", "subject_title": "\',subject.subject_title,\'", "subject_desc": \',subject.subject_desc,\' }\') end) as tuesday'),
          mysql.raw('max(case when week="wednesday" then CONCAT(\'{"pk_subject": "\',subject.pk,\'", "subject_title": "\',subject.subject_title,\'", "subject_desc": \',subject.subject_desc,\' }\') end) as wednesday'),
          mysql.raw('max(case when week="thursday" then CONCAT(\'{"pk_subject": "\',subject.pk,\'", "subject_title": "\',subject.subject_title,\'", "subject_desc": \',subject.subject_desc,\' }\') end) as thursday'),
          mysql.raw('max(case when week="friday" then CONCAT(\'{"pk_subject": "\',subject.pk,\'", "subject_title": "\',subject.subject_title,\'", "subject_desc": \',subject.subject_desc,\' }\') end) as friday')
        )
          .from('lesson')
          .leftJoin('subject', 'lesson.pk_subject', 'subject.pk')
          .where('lesson.pk_course', '=', pk_course)
          .groupBy('lesson.lesson_id')
          .then(function (rows) {
            for (var i = 0; i < rows.length; i++) {
              var listData = {
                lesson_id: rows[i].lesson_id,
                lesson_start: rows[i].lesson_start,
                lesson_end: rows[i].lesson_end,
                monday: JSON.parse(rows[i].monday),
                tuesday: JSON.parse(rows[i].tuesday),
                wednesday: JSON.parse(rows[i].wednesday),
                thursday: JSON.parse(rows[i].thursday),
                friday: JSON.parse(rows[i].friday)
              }
              courseTemplate.listData.push(listData)
            }

          })
          .catch(function (e) {
            console.log(e)
            ctx.state.data = {
              code: 900,
              message: e
            }
          })

      })
    ctx.state.code = 200
    ctx.state.data = courseTemplate

  } else {
    ctx.state.code = -1
  }
}

/*
*保存课程
*/
async function saveCourse(ctx, next) {
  req = ctx.request.body
  console.log(req)
  if (ctx.state.$wxInfo.loginState === 1) {
    var userinfo = ctx.state.$wxInfo.userinfo
    var openId = userinfo.openId
    var req = ctx.request.body
    if (req) {
      var pk_course = req.pk_course
      var course_title = req.course_title
      var course_desc = JSON.stringify(req.course_desc)
      var listData = req.listData
      var insertArray = []

      for (var i = 0; i < listData.length; i++) {
        var monday = listData[i].monday
        if (monday) {
          var insertJson = {
            pk: chance.guid(),
            lesson_id: listData[i].lesson_id,
            pk_subject: monday.pk_subject,
            lesson_start: listData[i].lesson_start,
            lesson_end: listData[i].lesson_end,
            week: 'monday',
            pk_course: pk_course
          }
          insertArray.push(insertJson)

        }


        var tuesday = listData[i].tuesday
        if (tuesday) {
          var insertJson = {
            pk: chance.guid(),
            lesson_id: listData[i].lesson_id,
            pk_subject: tuesday.pk_subject,
            lesson_start: listData[i].lesson_start,
            lesson_end: listData[i].lesson_end,
            week: 'tuesday',
            pk_course: pk_course
          }
          insertArray.push(insertJson)

        }
        var wednesday = listData[i].wednesday
        if (wednesday) {
          var insertJson = {
            pk: chance.guid(),
            lesson_id: listData[i].lesson_id,
            pk_subject: wednesday.pk_subject,
            lesson_start: listData[i].lesson_start,
            lesson_end: listData[i].lesson_end,
            week: 'wednesday',
            pk_course: pk_course
          }
          insertArray.push(insertJson)

        }
        var thursday = listData[i].thursday
        if (thursday) {
          var insertJson = {
            pk: chance.guid(),
            lesson_id: listData[i].lesson_id,
            pk_subject: thursday.pk_subject,
            lesson_start: listData[i].lesson_start,
            lesson_end: listData[i].lesson_end,
            week: 'thursday',
            pk_course: pk_course
          }
          insertArray.push(insertJson)

        }
        var friday = listData[i].friday
        if (friday) {
          var insertJson = {
            pk: chance.guid(),
            lesson_id: listData[i].lesson_id,
            pk_subject: friday.pk_subject,
            lesson_start: listData[i].lesson_start,
            lesson_end: listData[i].lesson_end,
            week: 'friday',
            pk_course: pk_course
          }
          insertArray.push(insertJson)

        }

      }

      await mysql('course')
        .where('pk', '=', pk_course)
        .update({
          course_title: course_title,
          course_desc: course_desc
        })
        .then(function () {
          return mysql('lesson')
            .where('pk_course', pk_course)
            .del()
            .then(function () {
              return mysql('lesson')
                .insert(insertArray)
                .then(function () {
                  ctx.state.code = 200
                  ctx.state.data = {
                    code: 200,
                    message: '数据提交成功'
                  }
                })

            })

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
}
/*
*由群分享过来的插入人员课程表关系表
*/
async function addUserCourse(ctx, next) {
  if (ctx.state.$wxInfo.loginState === 1) {
    var userinfo = ctx.state.$wxInfo.userinfo
    var openId = userinfo.openId
    req = ctx.request.body
    if (req) {
      var appId = 'wxea530f85f5422977'
      var sKey = req.sessionKey
      var encryptedData = req.encryptedData
      var iv = req.iv

      await mysql("cSessionInfo").select("session_key").where("skey", "=", sKey)
        .then(function (res) {
          var session_key = res[0].session_key
          var pc = new WXBizDataCrypt(appId, session_key)
          var data = pc.decryptData(encryptedData, iv)
          var openGId = data.openGId
          return mysql("user_course").insert([{
            pk_course: req.pk_course,
            openId: openId,
            openGId: openGId
          }]
          )
            .then(function () {
              ctx.state.code = 200
              ctx.state.data = "插入成功"
            })
            .catch(function (err) {
              ctx.state.code = 900
              ctx.state.data = err.code
            })

        })
    }

  } else {
    ctx.state.code = -1
  }
}
/*
*由其他分享过来的插入人员课程表关系表
*/
async function addUserCourseOther(ctx, next) {
  if (ctx.state.$wxInfo.loginState === 1) {
    var userinfo = ctx.state.$wxInfo.userinfo
    var openId = userinfo.openId
    req = ctx.request.body
    if (req) {
          await mysql("user_course").insert([{
            pk_course: req.pk_course,
            openId: openId
          }]
          )
            .then(function () {
              ctx.state.code = 200
              ctx.state.data = "插入成功"
            })
            .catch(function (err) {
              ctx.state.code = 900
              ctx.state.data = err.code
            })

        }
    }
    else {
    ctx.state.code = -1
  }
}
// 复制为自己的课程表
async function copyCourse(ctx, next) {
  if (ctx.state.$wxInfo.loginState === 1) {
    var userinfo = ctx.state.$wxInfo.userinfo
    var openId = userinfo.openId
    req = ctx.request.body
    if (req) {
      var pk_course = req.pk_course
      var courseNewReturn=''
      await mysql.transaction(function (trx) {
        mysql("course").select("*").where("pk", pk_course)
          .then(function (res) {
            var course = res[0]
            var courseNew = {
              pk: chance.guid(),
              course_title: course.course_title,
              school: course.school,
              course_desc: course.course_desc,
              openId: openId

            }
            courseNewReturn = courseNew
            mysql.insert(courseNew)
              .into('course')
              .transacting(trx)
              .then(function (res) {
                var pk_course_new = courseNew.pk
                return mysql("subject").select("*").where("pk_course", pk_course)
                  .then(function (res) {
                    var subjects = []
                    var subjectTemps = []
                    for (var j = 0; j < res.length; j++) {
                      var subjectTemp = {
                        pk: chance.guid(),
                        pk_old: res[j].pk,
                        subject_title: res[j].subject_title,
                        pk_course: pk_course_new,
                        subject_desc: res[j].subject_desc
                      }
                      var subject = JSON.parse(JSON.stringify(subjectTemp))
                      delete subject.pk_old
                      subjects.push(subject)
                      subjectTemps.push(subjectTemp)

                    }
                    return mysql("subject").transacting(trx).insert(subjects)
                      .then(function () {
                        return mysql("lesson").select("*").where("pk_course", pk_course)
                          .then(function (res) {
                            var lessons = []
                            for (var i = 0; i < res.length; i++) {
                              // var subject_temp = subjectTemps.filter(function (v, i) {
                              //   if (v.pk_old == res[i].pk_subject) {
                              //     return v;
                              //   }
                              // })
                              var subject_temp = ''
                              for (var k = 0; k < subjectTemps.length; k++) {
                                if (subjectTemps[k].pk_old == res[i].pk_subject) {
                                  subject_temp = subjectTemps[k]
                                  break
                                }

                              }
                              var lesson = {
                                pk: chance.guid(),
                                lesson_id: res[i].lesson_id,
                                pk_subject: subject_temp.pk,
                                lesson_start: res[i].lesson_start,
                                lesson_end: res[i].lesson_end,
                                week: res[i].week,
                                pk_course: pk_course_new

                              }
                              lessons.push(lesson)
                            }
                            return mysql("lesson").transacting(trx).insert(lessons)
                              .then(trx.commit)
                              .catch(trx.rollback);

                          })
                          .then(trx.commit)
                          .catch(trx.rollback);
                      })

                  })
                  .then(trx.commit)
                  .catch(trx.rollback)
              })
          })
      })
        .then(function (resp) {
          ctx.state.code = 200
          ctx.state.data = courseNewReturn
          console.log('Transaction complete.')
        })
        .catch(function (err) {
          ctx.state.code = 900
          ctx.state.data = err
          console.error(err)
        })

    }
  }
}
// 我的课表
async function myCourse(ctx, next) {
  if (ctx.state.$wxInfo.loginState === 1) {
    var userinfo = ctx.state.$wxInfo.userinfo
    var openId = userinfo.openId
    await mysql("course").select("*").where({ "openId": openId, "scope": "private" })
      .then(function (res) {
        ctx.state.code = 200
        ctx.state.data = res
      })
      .catch(function (err) {
        ctx.state.code = 900
        ctx.state.data = err.code
      })
  }
}
// 共享课表
async function shareCourse(ctx, next) {
  if (ctx.state.$wxInfo.loginState === 1) {
    var userinfo = ctx.state.$wxInfo.userinfo
    var openId = userinfo.openId
    await mysql.select("*").from("course").leftJoin("user_course", "course.pk", "user_course.pk_course").where({ "user_course.openId": openId })
      .then(function (res) {
        ctx.state.code = 200
        ctx.state.data = res
      })
      .catch(function (err) {
        ctx.state.code = 900
        ctx.state.data = err.code
      })
  }
}

//判断当前课表是否共享课表 
async function isShareCourse(ctx, next) {
  if (ctx.state.$wxInfo.loginState === 1) {
    var userinfo = ctx.state.$wxInfo.userinfo
    var openId = userinfo.openId
    req = ctx.query
    if (req) {
      var pk_course = req.pk_course
      await mysql.select("*").from("course").where({ "pk": pk_course, "openId": openId })
        .then(function (res) {
          ctx.state.code = 200
          if (res.length > 0) {
            ctx.state.data = false
          } else {
            ctx.state.data = true
          }

        })
        .catch(function (err) {
          ctx.state.code = 900
          ctx.state.data = err.code
        })
    }
  }

}

//查找个人默认课表
async function courseDefault(ctx, next) {
  if (ctx.state.$wxInfo.loginState === 1) {
    var userinfo = ctx.state.$wxInfo.userinfo
    var openId = userinfo.openId
    await mysql.select("*").from("user_log").where({ "openId": openId }).limit(1).orderBy('create_date', 'desc')
      .then(function (res) {
        ctx.state.code = 200
        if (res.length > 0) {
          ctx.state.data = res
        } else {
          ctx.state.data = false
        }

      })
      .catch(function (err) {
        ctx.state.code = 900
        ctx.state.data = err.code
      })

  }

}
//插入访问日志
async function addUserLog(ctx, next) {
  if (ctx.state.$wxInfo.loginState === 1) {
    var userinfo = ctx.state.$wxInfo.userinfo
    var openId = userinfo.openId
    req = ctx.request.body
    if (req) {
      var pk_course = req.pk_course
      await mysql("user_log").insert({ "pk_course": pk_course, "openId": openId })
        .then(function (res) {
          ctx.state.code = 200
          ctx.state.data = '插入成功'

        })
        .catch(function (err) {
          ctx.state.code = 900
          ctx.state.data = err.code
        })
    }
  }

}
//删除我的课表
async function delCourse(ctx,next){
  if (ctx.state.$wxInfo.loginState === 1) {
    var userinfo = ctx.state.$wxInfo.userinfo
    var openId = userinfo.openId
    req = ctx.request.body
    if (req.pk_course) {
      var pk_course = req.pk_course
      await mysql("course").where('pk', pk_course).del()
        .then(function (res) {
          ctx.state.code = 200
          ctx.state.data = '删除成功'

        })
        .catch(function (err) {
          ctx.state.code = 900
          ctx.state.data = err.code
        })
    }
  }
}
//删除共享课表
async function delShareCourse(ctx, next) {
  if (ctx.state.$wxInfo.loginState === 1) {
    var userinfo = ctx.state.$wxInfo.userinfo
    var openId = userinfo.openId
    req = ctx.request.body
    if (req.pk_course) {
      var pk_course = req.pk_course
      await mysql("user_course").where({ 'pk_course': pk_course, 'openId': openId}).del()
        .then(function (res) {
          ctx.state.code = 200
          ctx.state.data = '删除成功'

        })
        .catch(function (err) {
          ctx.state.code = 900
          ctx.state.data = err.code
        })
    }
  }
}

module.exports = {
  getCourseByOpenID,
  saveCourse,
  getCourseByPK,
  addUserCourse,
  copyCourse,
  myCourse,
  shareCourse,
  isShareCourse,
  courseDefault,
  addUserLog,
  addUserCourseOther,
  delCourse,
  delShareCourse
}