/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
var host = 'https://tuimy0x9.qcloud.la';

var config = {

    // 下面的地址配合云端 Demo 工作
    service: {
        host,

        // 登录地址，用于建立会话
        loginUrl: `${host}/weapp/login`,

        // 测试的请求地址，用于测试会话
        requestUrl: `${host}/weapp/user`,

        // 测试的信道服务地址
        tunnelUrl: `${host}/weapp/tunnel`,

        // 上传图片接口
        uploadUrl: `${host}/weapp/upload`,

        lessonUrl: `${host}/weapp/lesson`,

        //科目接口
        subjectList: `${host}/weapp/subject/list`,
        subjectAdd: `${host}/weapp/subject/add`,
        subjectDel: `${host}/weapp/subject/del`,
        //课程保存
        courseSave: `${host}/weapp/course/save`,
        courseGetBypk: `${host}/weapp/course/pk`,
        //程序初始化
        courseInit: `${host}/weapp/course/init`,
        //复制课程
        courseCopy: `${host}/weapp/course/copy`,
        //我的课程
        myCourse: `${host}/weapp/course/my`,
        //共享课程
        shareCourse: `${host}/weapp/course/share`
    }
};

module.exports = config;