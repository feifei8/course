/**
 * ajax 服务路由集合
 */
const router = require('koa-router')({
    prefix: '/weapp'   // 定义所有路由的前缀都已 /weapp 开头
})
const controllers = require('../controllers')

// 从 sdk 中取出中间件
// 这里展示如何使用 Koa 中间件完成登录态的颁发与验证
const { auth: { authorizationMiddleware, validationMiddleware } } = require('../qcloud')

// --- 登录与授权 Demo --- //
// 登录接口 /weapp/login
router.get('/login', authorizationMiddleware, controllers.login)
// 用户信息接口（可以用来验证登录态） /weapp/user
router.get('/user', validationMiddleware, controllers.user)

// --- 图片上传 Demo --- //
// 图片上传接口，小程序端可以直接将 url 填入 wx.uploadFile 中 /weapp/upload
router.post('/upload', controllers.upload)

// --- 信道服务接口 Demo --- //
// GET  用来响应请求信道地址的 /weapp/tunnel
router.get('/tunnel', controllers.tunnel.get)
// POST 用来处理信道传递过来的消息
router.post('/tunnel', controllers.tunnel.post)

// --- 客服消息接口 Demo --- //
// GET  用来响应小程序后台配置时发送的验证请求 /weapp/message
router.get('/message', controllers.message.get)
// POST 用来处理微信转发过来的客服消息
router.post('/message', controllers.message.post)

router.get('/test', controllers.test.get)

router.get('/lesson', validationMiddleware, controllers.lesson.getLessonList)
//增加科目
router.post('/subject/add', controllers.subject.insertSubject)
//查询科目列表
router.get('/subject/list', validationMiddleware, controllers.subject.getSubjectList)
//删除科目
router.post('/subject/del', validationMiddleware, controllers.subject.deleteSubject)

/*
课程相关
*/
//保存课程
router.post('/course/add', validationMiddleware, controllers.course.addCourse)
//保存课程
router.post('/course/save', validationMiddleware, controllers.course.saveCourse)
//根据openid查询
router.get('/course/openid', validationMiddleware, controllers.course.getCourseByOpenID)
//根据pk_course查询
router.get('/course/pk', validationMiddleware, controllers.course.getCourseByPK)
//从群组过来的分享插入分享课程
router.post('/course/init', validationMiddleware, controllers.course.addUserCourse)
//从其他分享插入分享课程
router.post('/course/addUserCourseOther', validationMiddleware, controllers.course.addUserCourseOther)
//复制课程
router.post('/course/copy', validationMiddleware, controllers.course.copyCourse)
//我的课表
router.get('/course/my', validationMiddleware, controllers.course.myCourse)
//共享课表
router.get('/course/share', validationMiddleware, controllers.course.shareCourse)
//是否共享课表
router.get('/course/isShare', validationMiddleware, controllers.course.isShareCourse)
//查找默认课表
router.get('/course/default', validationMiddleware, controllers.course.courseDefault)
//记录访问日志
router.post('/course/adduserlog', validationMiddleware, controllers.course.addUserLog)
//删除我的课表
router.post('/course/del', validationMiddleware, controllers.course.delCourse)
//删除我的共享课表
router.post('/course/share/del', validationMiddleware, controllers.course.delShareCourse)


module.exports = router
