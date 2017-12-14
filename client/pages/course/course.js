// 引入 QCloud 小程序增强 SDK
var qcloud = require('../../vendor/wafer2-client-sdk/index');

// 引入配置
var config = require('../../config');
var app = new getApp()
var date = new Date();
// this.year = date.getFullYear();
// this.month = date.getMonth() + 1;
// this.date = date.getDate();
// this.day = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")[date.getDay()];
// this.hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
// this.minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
// this.second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

Page({
  data: {
    pk_cource: '',
    hiddenmodalput: true,
    hiddenTimemodalput: true,
    hiddenTitleModalput: true,
    courseTitleValue: '',
    courseDescValue: '',
    courseDescType: '',
    editArea: false,
    editVisible: true,
    isShareCourse: false,//是否共享课表
    confirmVisible: false,
    shareVisible: true,
    bordercss: '4rpx solid #fff',
    courseTemplate: {
      "pk_course": "3e2db990-9243-11e7-ad52-525400e4179c",
      "course_title": "城北中心小学下学期课程表",
      "course_desc": {
        "top_desc": "进校：7：40 晨检 预备：7：50",
        "middle_desc": "开校门：1：40 预备：1：50",
        "bottom_desc": "放学时间：17：35"
      },
      "listData": [
        {
          "lesson_id": 1,
          "lesson_start": "08:00",
          "lesson_end": "08:45",
          "monday": {
            "pk_subject": "5facf97f-0e26-5847-a70f-c4a2a834acdb",
            "subject_title": "语文",
            "subject_desc": {
              "color": "#009933",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "tuesday": {
            "pk_subject": "24398b6c-d47c-5afe-bf89-0da8360512bb",
            "subject_title": "英语",
            "subject_desc": {
              "color": "#3399CC",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "wednesday": {
            "pk_subject": "1bfb34c1-87f7-5b89-b10f-7da296d6d437",
            "subject_title": "高数",
            "subject_desc": {
              "color": "#EB9E05",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "thursday": {
            "pk_subject": "24398b6c-d47c-5afe-bf89-0da8360512bb",
            "subject_title": "英语",
            "subject_desc": {
              "color": "#3399CC",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "friday": {
            "pk_subject": "ffcf7471-1d0e-5aae-a8c3-4a651c0c6508",
            "subject_title": "语文",
            "subject_desc": {
              "color": "#FF6600",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          }
        },
        {
          "lesson_id": 2,
          "lesson_start": "09:00",
          "lesson_end": "09:45",
          "monday": {
            "pk_subject": "c10857cf-c246-5d9b-a3a8-46f937518773",
            "subject_title": "地理",
            "subject_desc": {
              "color": "#67C23A",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "tuesday": {
            "pk_subject": "1bfb34c1-87f7-5b89-b10f-7da296d6d437",
            "subject_title": "高数",
            "subject_desc": {
              "color": "#EB9E05",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "wednesday": {
            "pk_subject": "91821a8e-d761-5fd0-a688-66b3b5f3e2d4",
            "subject_title": "历史",
            "subject_desc": {
              "color": "#CC6600",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "thursday": {
            "pk_subject": "24398b6c-d47c-5afe-bf89-0da8360512bb",
            "subject_title": "英语",
            "subject_desc": {
              "color": "#3399CC",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "friday": {
            "pk_subject": "91821a8e-d761-5fd0-a688-66b3b5f3e2d4",
            "subject_title": "历史",
            "subject_desc": {
              "color": "#CC6600",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          }
        },
        {
          "lesson_id": 3,
          "lesson_start": "10:00",
          "lesson_end": "10:45",
          "monday": {
            "pk_subject": "91821a8e-d761-5fd0-a688-66b3b5f3e2d4",
            "subject_title": "历史",
            "subject_desc": {
              "color": "#CC6600",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "tuesday": {
            "pk_subject": "1bfb34c1-87f7-5b89-b10f-7da296d6d437",
            "subject_title": "高数",
            "subject_desc": {
              "color": "#EB9E05",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "wednesday": {
            "pk_subject": "1bfb34c1-87f7-5b89-b10f-7da296d6d437",
            "subject_title": "高数",
            "subject_desc": {
              "color": "#EB9E05",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "thursday": {
            "pk_subject": "ffcf7471-1d0e-5aae-a8c3-4a651c0c6508",
            "subject_title": "语文",
            "subject_desc": {
              "color": "#FF6600",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "friday": {
            "pk_subject": "91821a8e-d761-5fd0-a688-66b3b5f3e2d4",
            "subject_title": "历史",
            "subject_desc": {
              "color": "#CC6600",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          }
        },
        {
          "lesson_id": 4,
          "lesson_start": "11:00",
          "lesson_end": "11:45",
          "monday": {
            "pk_subject": "5facf97f-0e26-5847-a70f-c4a2a834acdb",
            "subject_title": "语文",
            "subject_desc": {
              "color": "#009933",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "tuesday": {
            "pk_subject": "ffcf7471-1d0e-5aae-a8c3-4a651c0c6508",
            "subject_title": "语文",
            "subject_desc": {
              "color": "#FF6600",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "wednesday": {
            "pk_subject": "5facf97f-0e26-5847-a70f-c4a2a834acdb",
            "subject_title": "语文",
            "subject_desc": {
              "color": "#009933",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "thursday": {
            "pk_subject": "91821a8e-d761-5fd0-a688-66b3b5f3e2d4",
            "subject_title": "历史",
            "subject_desc": {
              "color": "#CC6600",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "friday": {
            "pk_subject": "91821a8e-d761-5fd0-a688-66b3b5f3e2d4",
            "subject_title": "历史",
            "subject_desc": {
              "color": "#CC6600",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          }
        },
        {
          "lesson_id": 5,
          "lesson_start": "13:30",
          "lesson_end": "14:15",
          "monday": {
            "pk_subject": "1bfb34c1-87f7-5b89-b10f-7da296d6d437",
            "subject_title": "高数",
            "subject_desc": {
              "color": "#EB9E05",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "tuesday": {
            "pk_subject": "ffcf7471-1d0e-5aae-a8c3-4a651c0c6508",
            "subject_title": "语文",
            "subject_desc": {
              "color": "#FF6600",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "wednesday": {
            "pk_subject": "c10857cf-c246-5d9b-a3a8-46f937518773",
            "subject_title": "地理",
            "subject_desc": {
              "color": "#67C23A",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "thursday": {
            "pk_subject": "91821a8e-d761-5fd0-a688-66b3b5f3e2d4",
            "subject_title": "历史",
            "subject_desc": {
              "color": "#CC6600",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "friday": {
            "pk_subject": "e7f0d1bc-34b5-5e3d-a5b1-99a152b31aad",
            "subject_title": "美术",
            "subject_desc": {
              "color": "#FA5555",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          }
        },
        {
          "lesson_id": 6,
          "lesson_start": "14:30",
          "lesson_end": "15:15",
          "monday": {
            "pk_subject": "c10857cf-c246-5d9b-a3a8-46f937518773",
            "subject_title": "地理",
            "subject_desc": {
              "color": "#67C23A",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "tuesday": {
            "pk_subject": "ffcf7471-1d0e-5aae-a8c3-4a651c0c6508",
            "subject_title": "语文",
            "subject_desc": {
              "color": "#FF6600",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "wednesday": {
            "pk_subject": "1bfb34c1-87f7-5b89-b10f-7da296d6d437",
            "subject_title": "高数",
            "subject_desc": {
              "color": "#EB9E05",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "thursday": {
            "pk_subject": "1bfb34c1-87f7-5b89-b10f-7da296d6d437",
            "subject_title": "高数",
            "subject_desc": {
              "color": "#EB9E05",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "friday": {
            "pk_subject": "24398b6c-d47c-5afe-bf89-0da8360512bb",
            "subject_title": "英语",
            "subject_desc": {
              "color": "#3399CC",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          }
        },
        {
          "lesson_id": 7,
          "lesson_start": "15:30",
          "lesson_end": "16:15",
          "monday": {
            "pk_subject": "ffcf7471-1d0e-5aae-a8c3-4a651c0c6508",
            "subject_title": "语文",
            "subject_desc": {
              "color": "#FF6600",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "tuesday": {
            "pk_subject": "1bfb34c1-87f7-5b89-b10f-7da296d6d437",
            "subject_title": "高数",
            "subject_desc": {
              "color": "#EB9E05",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "wednesday": {
            "pk_subject": "5facf97f-0e26-5847-a70f-c4a2a834acdb",
            "subject_title": "语文",
            "subject_desc": {
              "color": "#009933",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "thursday": {
            "pk_subject": "1bfb34c1-87f7-5b89-b10f-7da296d6d437",
            "subject_title": "高数",
            "subject_desc": {
              "color": "#EB9E05",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "friday": {
            "pk_subject": "24398b6c-d47c-5afe-bf89-0da8360512bb",
            "subject_title": "英语",
            "subject_desc": {
              "color": "#3399CC",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          }
        },
        {
          "lesson_id": 8,
          "lesson_start": "16:30",
          "lesson_end": "17:15",
          "monday": {
            "pk_subject": "5facf97f-0e26-5847-a70f-c4a2a834acdb",
            "subject_title": "语文",
            "subject_desc": {
              "color": "#009933",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "tuesday": {
            "pk_subject": "5facf97f-0e26-5847-a70f-c4a2a834acdb",
            "subject_title": "语文",
            "subject_desc": {
              "color": "#009933",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "wednesday": {
            "pk_subject": "91821a8e-d761-5fd0-a688-66b3b5f3e2d4",
            "subject_title": "历史",
            "subject_desc": {
              "color": "#CC6600",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "thursday": {
            "pk_subject": "5facf97f-0e26-5847-a70f-c4a2a834acdb",
            "subject_title": "语文",
            "subject_desc": {
              "color": "#009933",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          },
          "friday": {
            "pk_subject": "5facf97f-0e26-5847-a70f-c4a2a834acdb",
            "subject_title": "语文",
            "subject_desc": {
              "color": "#009933",
              "teacher": "",
              "classroom": "",
              "bordercss": ""
            }
          }
        }
      ]
    },
    courseTemplate: '',
    subjects: [
      {
        pk: '3e2db990-9243-11e7-ad52-525400e4179c',
        subject_title: '语文',
        subject_desc: {
          color: '#20A0FF',
          teacher: '王老师',
          classroom: '301',
          bordercss: ''
        }

      },
      {
        pk: 'e1226aab-9241-11e7-ad52-525400e4179c',
        subject_title: '数学',
        subject_desc: {
          color: '#13CE66',
          teacher: '王老师',
          classroom: '301',
          bordercss: ''
        }
      },
      {
        pk: 'e1276d50-9241-11e7-ad52-525400e4179c',
        subject_title: '英语',
        subject_desc: {
          color: '#F7BA2A',
          teacher: '王老师',
          classroom: '301',
          bordercss: ''
        }
      },
      {
        pk: '62eeb105-9242-11e7-ad52-525400e4179c',
        subject_title: '美术',
        subject_desc: {
          color: '#FF4949',
          teacher: '王老师',
          classroom: '301',
          bordercss: ''
        }
      }
    ],
    chooseSubject: '',
    lessonList: config.service.lessonUrl,
    startTime: '8:00',
    endTime: '17:00',
    lesson_id: 0,
    currentDate: (date.getMonth() + 1) + "月" + date.getDate() + "日 ",
    currentweek: new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")[date.getDay()],
    w1: '',
    w2: '',
    w3: '',
    w4: '',
    w5: ''
  },
  onload:function(res){
    console.log("course onload ...")
    console.log(res)

  },
  onShow: function () {
    
    console.log("course onshow ...")
    console.log(app.globalData.pk_course)
    var that=this
    var currentweek = this.data.currentweek
    switch (currentweek) {
      case "星期一":
        this.setData({
          w1: "color:#3cc51f"
        })
        break;
      case "星期二":
        this.setData({
          w2: "color:#3cc51f"
        })
        break;
      case "星期三":
        this.setData({
          w3: "color:#3cc51f"
        })
        break;
      case "星期四":
        this.setData({
          w4: "color:#3cc51f"
        })
        break;
      case "星期五":
        this.setData({
          w5: "color:#3cc51f"
        })
        break;
      default:
        this.setData({
          w1: "color:#3cc51f"
        })

    }
    wx.showLoading({
      title: '加载中',
    })
    
    var courseTemplate = wx.getStorageSync('course')
    if (app.globalData.pk_course && courseTemplate == '') {
      console.log("11")
      that.courseGetBypk(app.globalData.pk_course)
      that.subjectLidtBypk(app.globalData.pk_course)
      that.isShareCourse(app.globalData.pk_course)
    }
    if (courseTemplate) {
      console.log("22")
      if (courseTemplate.listData && courseTemplate.listData.length > 0) {
        that.setData({
          courseTemplate: courseTemplate
        })
        app.globalData.pk_course = courseTemplate.pk_course
        that.subjectLidtBypk(app.globalData.pk_course)
        that.isShareCourse(app.globalData.pk_course)
      }
    }
    if (app.globalData.pk_course == "" && courseTemplate == "") {
      console.log("33")
      qcloud.request({
        url: config.service.courseDefault,
        method: 'get',
        success(result) {
          if (result.data.code === 200) {
            if (result.data.data === false) {
              qcloud.request({
                // 要请求的地址
                url: config.service.courseCopy,
                method: 'post',
                data: {
                  pk_course: 'c1aaa652-aa77-59e8-858d-735a4308b12a'
                },
                success(copyres) {
                  wx.hideLoading()
                  if (copyres.data.code === 200) {
                    that.courseGetBypk(copyres.data.data.pk)
                    that.subjectLidtBypk(copyres.data.data.pk)
                    that.isShareCourse(copyres.data.data.pk)
                  }
                },
                catch(e) {
                  console.log(e)
                }
              });
            }
            else {
              app.globalData.pk_course = result.data.data[0].pk_course
              that.courseGetBypk(app.globalData.pk_course)
              that.subjectLidtBypk(app.globalData.pk_course)
              that.isShareCourse(app.globalData.pk_course)
            }

          }
        },
        catch(e) {
          console.log(e)
        }
      })
    }
},
  //跳转设置页面授权
  openSetting: function () {
    var that = this
    if (wx.openSetting) {
      wx.openSetting({
        success: function (res) {
          //尝试再次登录
          //that.login()
        }
      })
    } else {
      wx.showModal({
        title: '授权提示',
        content: '小程序需要您的微信授权才能使用哦~ 错过授权页面的处理方法：删除小程序->重新搜索进入->点击授权按钮'
      })
    }
  },
  //根据pk获取课程
  courseGetBypk: function (pk_course) {
    var that = this
    qcloud.request({
      url: config.service.courseGetBypk,
      data: {
        pk_course: pk_course
      },
      login: true,
      success(result) {
        wx.hideLoading()
        console.log(result)
        if (result.data.code === 200) {
          if (result.data.data.listData.length > 0) {

            //记录日志
            qcloud.request({
              url: config.service.addUserLog,
              method: 'post',
              data: {
                pk_course: pk_course
              },
              login: true,
              success(res) {
                if (res.data.code === 200) {
                  that.setData({
                    courseTemplate: result.data.data
                  })
                  wx.setStorageSync('course', result.data.data)
                }
              }

            })
          }
        }
      }
    })

  },
  //获取科目列表
  subjectLidtBypk: function (pk_course) {
    var that = this
    qcloud.request({
      url: config.service.subjectList,
      login: true,
      data: {
        pk_course: pk_course
      },
      success(result) {
        wx.hideLoading()
        if (result.data.code === 200) {
          var subjectList = result.data.data
          for (var i = 0; i < subjectList.length; i++) {
            if (subjectList[i].subject_desc) {
              subjectList[i].subject_desc = JSON.parse(subjectList[i].subject_desc)
            }
          }
          that.setData({
            subjects: subjectList
          })
        }
      },
      fali(error) {
        console.log('request fail', error)
      }
    })
  },
  // 是否共享课表
  isShareCourse: function () {
    var that = this
    qcloud.request({
      url: config.service.isShareCourse,
      login: true,
      data: {
        pk_course: app.globalData.pk_course
      },
      success(result) {
        wx.hideLoading()
        if (result.data.code === 200) {
          var isShareCourse = result.data.data
          that.setData({
            isShareCourse: isShareCourse
          })
        }
      },
      fali(error) {
        console.log('request fail', error)
      }
    })
  },
  //转发事件
  onShareAppMessage: function (res) {
    wx.showShareMenu({
      withShareTicket: true
    })
    var course_title = this.data.courseTemplate.course_title
    var pk_course = this.data.courseTemplate.pk_course
    return {
      title: course_title,
      path: 'pages/course/course?pk_course=' + pk_course,
      success: function (res) {
        console.log("share sucess...")
        console.log(course_title)
        console.log(pk_course)
        console.log(res)
        wx.getShareInfo({
          shareTicket: res.shareTickets,
          success(res) {
            console.log(res)

          }

        })
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },

  edit: function () {
    var editArea = this.data.editArea;
    this.setData({
      editArea: !editArea,
      shareVisible: false,
      editVisible: false,
      confirmVisible: true

    })
  },
  editCancel: function () {
    var editArea = this.data.editArea;
    this.setData({
      editArea: !editArea,
      shareVisible: true,
      editVisible: true,
      confirmVisible: false

    })
  },
  // 保存课程
  courseSave: function () {
    var that = this
    var editArea = this.data.editArea;
    this.setData({
      editArea: !editArea,
      shareVisible: true,
      editVisible: true,
      confirmVisible: false

    })
    qcloud.request({
      // 要请求的地址
      url: config.service.courseSave,
      method: 'post',
      // 请求之前是否登陆，如果该项指定为 true，会在请求之前进行登录
      login: true,
      data: this.data.courseTemplate,

      success(result) {
        console.log(result)
        if (result.data.code === 200) {
          console.log('request success', result.data.data);
          wx.setStorageSync('course', that.data.courseTemplatea)

        }
      },
      catch(e) {
        console.log(e)
      },

      fail(error) {
        //showModel('请求失败', error);
        console.log('request fail', error);
      },

      complete() {
        console.log('request complete');
      }
    });


  },
  // 分享课程
  share: function () {
    this.onShareAppMessage()
  },
  //编辑课程
  editLesson: function (event) {
    if (!this.data.confirmVisible)
      return
    var para = event.currentTarget.dataset
    var lessonId = para.lessonId
    var week = para.week
    var courseTemplate = this.data.courseTemplate
    var lessonData = courseTemplate.listData
    var chooseSubject = this.data.chooseSubject
    if (lessonData && chooseSubject) {
      for (var i = 0; i < lessonData.length; i++) {
        if (lessonData[i].lesson_id == lessonId) {
          if (lessonData[i][week]) {
            lessonData[i][week].pk_subject = chooseSubject.pk
            lessonData[i][week].subject_title = chooseSubject.subject_title
            lessonData[i][week].subject_desc = chooseSubject.subject_desc
          } else {
            var weekjson = {
              pk_subject: chooseSubject.pk,
              subject_title: chooseSubject.subject_title,
              subject_desc: chooseSubject.subject_desc

            }
            lessonData[i][week] = weekjson
          }
        }

      }
      courseTemplate.ListData = lessonData
      this.setData({
        courseTemplate: courseTemplate
      })
    } else {
      for (var i = 0; i < lessonData.length; i++) {
        if (lessonData[i].lesson_id == lessonId) {
          if (lessonData[i][week]) {
            var weekjson = {
              pk_subject: '',
              subject_title: '',
              subject_desc: ''

            }
            lessonData[i][week] = weekjson
          }
          this.setData({
            courseTemplate: courseTemplate
          })
        }

      }

    }
    console.log(courseTemplate)
  },
  //选中课目
  chooseSubject: function (event) {

    var subject = event.currentTarget.dataset.item
    var pk = subject.pk
    var subject_title = subject.subject_title
    var subject_color = subject.subject_desc.color

    this.setData({
      chooseSubject: ''
    })


    var subjects1 = this.data.subjects
    for (var i = 0; i < subjects1.length; i++) {
      if (pk == subjects1[i].pk && subjects1[i].subject_desc.bordercss == '') {
        subjects1[i].subject_desc.bordercss = 'border-color: #333;opacity:0.6;'
        this.setData({
          chooseSubject: subject
        })
      }
      else {
        subjects1[i].subject_desc.bordercss = ''
      }

    }
    this.setData({
      subjects: subjects1
    })


  },
  navigateToSubject: function (event) {
    var subject = event.currentTarget.dataset.item
    if (subject) {
      var pk = subject.pk
      var subject_title = subject.subject_title
      var subject_color = subject.subject_desc.color

      wx.navigateTo({ url: '../subject/subject?pk=' + pk + '&subject_title=' + subject_title + '&subject_color=' + subject_color })
    } else {
      wx.navigateTo({
        url: '../subject/subject'
      })
    }
  },
  //编辑课程描述信息弹出框  
  modalinput: function (event) {
    if (!this.data.confirmVisible)
      return
    var desc = event.currentTarget.dataset
    var desctype = desc.desctype
    var descvalaue = desc.descvalue

    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput,
      courseDescType: desctype,
      courseDescValue: descvalaue
    })

  },
  //取消按钮  
  cancel: function () {
    this.setData({
      hiddenmodalput: true,
      hiddenTimemodalput: true,
      hiddenTitleModalput: true

    });
  },
  // 点击标题修改事件
  titleEdit: function (e) {
    if (!this.data.confirmVisible)
      return
    var courseTitleValue = e.currentTarget.dataset.titlevalue
    this.setData({
      hiddenTitleModalput: !this.data.hiddenTitleModalput,
      courseTitleValue: courseTitleValue
    });

  },
  // 课程标题修改
  titleBlur: function (e) {
    this.data.courseTitleValue = e.detail.value
  },

  DescBlur: function (e) {
    this.data.courseDescValue = e.detail.value
  },
  // 课程标题确认保存
  courseTitleConfirm: function () {
    if (!this.data.confirmVisible)
      return
    var courseTemplate = this.data.courseTemplate
    courseTemplate.course_title = this.data.courseTitleValue
    this.setData({
      hiddenTitleModalput: true,
      courseTemplate: courseTemplate
    })
  },
  //早、中、晚描述确认  
  DescConfirm: function () {
    if (!this.data.confirmVisible)
      return
    var courseTemplate = this.data.courseTemplate
    if (this.data.courseDescType === 'top_desc') {
      courseTemplate.course_desc.top_desc = this.data.courseDescValue
    }
    if (this.data.courseDescType === 'middle_desc') {
      courseTemplate.course_desc.middle_desc = this.data.courseDescValue
    }
    if (this.data.courseDescType === 'bottom_desc') {
      courseTemplate.course_desc.bottom_desc = this.data.courseDescValue
    }
    this.setData({
      hiddenmodalput: true,
      courseTemplate: courseTemplate
    })
  },
  //起止时间选择
  timeChoose: function (event) {
    if (!this.data.confirmVisible)
      return
    var time = event.currentTarget.dataset
    var startTime = time.start
    var endTime = time.end
    var lesson_id = time.lessonid
    this.setData({
      startTime: startTime,
      endTime: endTime,
      lesson_id: lesson_id,
      hiddenTimemodalput: !this.data.hiddenTimemodalput
    })
  },

  bindStartTimeChange: function (e) {
    this.setData({
      startTime: e.detail.value
    })

  },

  bindEndTimeChange: function (e) {
    this.setData({
      endTime: e.detail.value
    })

  },
  timeConfirm: function () {
    var that = this
    var courseTemplate = that.data.courseTemplate
    var lesson_id = that.data.lesson_id
    var listData = courseTemplate.listData
    for (var i = 0; i < listData.length; i++) {
      if (listData[i].lesson_id === lesson_id) {
        listData[i].lesson_start = that.data.startTime
        listData[i].lesson_end = that.data.endTime
        break
      }
    }
    courseTemplate.listData = listData
    this.setData({
      courseTemplate: courseTemplate,
      hiddenTimemodalput: !this.data.hiddenTimemodalput
    })
    console.log(courseTemplate)
  },
  // 增加课程表
  addCourse: function () {
    qcloud.request({
      // 要请求的地址
      url: config.service.courseCopy,
      method: 'post',
      // 请求之前是否登陆，如果该项指定为 true，会在请求之前进行登录
      login: true,
      data: {
        pk_course: app.globalData.pk_course
      },

      success(result) {
        console.log(result)
        if (result.data.code === 200) {
          console.log('request success', result.data.data);
          wx.setStorageSync('course', that.data.courseTemplatea)

        }
      },
      catch(e) {
        console.log(e)
      },

      fail(error) {
        //showModel('请求失败', error);
        console.log('request fail', error);
      },

      complete() {
        console.log('request complete');
      }
    });

  }

})