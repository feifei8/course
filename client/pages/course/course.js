// 引入 QCloud 小程序增强 SDK
var qcloud = require('../../vendor/wafer2-client-sdk/index');

// 引入配置
var config = require('../../config');

Page({
  data: {
    pk_cource: '',
    hiddenmodalput: true, 
    courseDescValue:'',
    courseDescType:'',
    editArea: false,
    editVisible: true,
    confirmVisible: false,
    shareVisible: true,
    bordercss: '4rpx solid #fff',
    courseTemplate: {
      top_desc: '进校：7：40 晨检 预备：7：50',
      middle_desc: '开校门：1：40 预备：1：50',
      bottom_desc: '放学时间：4：35',
      listData: [
        {
          lesson_id: 1,
          lesson_start: '8:00',
          lesson_end: '8:45',
          monday: {
            subject_title: '语文',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          },
          tuesday: {
            subject_title: '语文',
            subject_desc: {
              color: '#F7BA2C',
              teacher: '王老师',
              classroom: '301'
            }
          },
          wednesday: {
            subject_title: '数学',
            subject_desc: {
              color: '#13CE66',
              teacher: '王老师',
              classroom: '301'
            }
          },
          thursday: {
            subject_title: '语文',
            subject_desc: {
              color: '#F7BA2A',
              teacher: '王老师',
              classroom: '301'
            }
          },
          friday: {
            subject_title: '英语',
            subject_desc: {
              color: '#FF4949',
              teacher: '王老师',
              classroom: '301'
            }
          }
        },
        {
          lesson_id: 2,
          lesson_start: '8:00',
          lesson_end: '8:45',
          monday: {
            subject_title: '语文',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          },
          tuesday: {
            subject_title: '语文',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          },
          wednesday: {
            subject_title: '数学',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          },
          thursday: {
            subject_title: '语文',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          },
          friday: {
            subject_title: '英语',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          }
        },
        {
          lesson_id: 3,
          lesson_start: '8:00',
          lesson_end: '8:45',
          monday: {
            subject_title: '语文',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          },
          tuesday: {
            subject_title: '语文',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          },
          wednesday: {
            subject_title: '数学',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          },
          thursday: {
            subject_title: '语文',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          },
          friday: {
            subject_title: '英语',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          }
        },
        {
          lesson_id: 4,
          lesson_start: '8:00',
          lesson_end: '8:45',
          monday: {
            subject_title: '语文',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          },
          tuesday: {
            subject_title: '语文',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          },
          wednesday: {
            subject_title: '数学',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          },
          thursday: {
            subject_title: '语文',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          },
          friday: {
            subject_title: '英语',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          }
        },
        {
          lesson_id: 5,
          lesson_start: '8:00',
          lesson_end: '8:45',
          monday: {
            subject_title: '语文',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          },
          tuesday: {
            subject_title: '语文',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          },
          wednesday: {
            subject_title: '数学',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          },
          thursday: {
            subject_title: '语文',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          },
          friday: {
            subject_title: '英语',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          }
        },
        {
          lesson_id: 6,
          lesson_start: '8:00',
          lesson_end: '8:45',
          monday: {
            subject_title: '语文',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          },
          tuesday: {
            subject_title: '语文',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          },
          wednesday: {
            subject_title: '数学',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          },
          thursday: {
            subject_title: '语文',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          },
          friday: {
            subject_title: '英语',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          }
        },
        {
          lesson_id: 7,
          lesson_start: '8:00',
          lesson_end: '8:45',
          monday: {
            subject_title: '语文',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          },
          tuesday: {
            subject_title: '语文',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          },
          wednesday: {
            subject_title: '数学',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          },
          thursday: {
            subject_title: '语文',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          },
          friday: {
            subject_title: '英语',
            subject_desc: {
              color: '#20A0FF',
              teacher: '王老师',
              classroom: '301'
            }
          }
        }]
    },
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
    hiddenTimemodalput:true,
    startTime:'8:00',
    endTime:'17:00'
  },
  onload: function () {

  },
  onShow: function () {
    var that = this
    qcloud.request({
      url: config.service.subjectList,
      login: true,
      success(result) {
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


    // qcloud.request({
    //   // 要请求的地址
    //   url: this.data.lessonList,

    //   // 请求之前是否登陆，如果该项指定为 true，会在请求之前进行登录
    //   login: true,

    //   success(result) {
    //     that.setData({
    //       listData: result.data.data
    //     })
    //     //showSuccess('请求成功完成');

    //     console.log('request success', result.data.data);
    //   },

    //   fail(error) {
    //     //showModel('请求失败', error);
    //     console.log('request fail', error);
    //   },

    //   complete() {
    //     console.log('request complete');
    //   }
    // });
  },
  //转发事件
  onShareAppMessage: function (res) {
    wx.showShareMenu({
      withShareTicket: true
    })
    return {
      title: '城关小学课程表',
      path: 'pages/course/course?pk_cource=111',
      success: function (res) {
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
  confirm: function () {
    var editArea = this.data.editArea;
    this.setData({
      editArea: !editArea,
      shareVisible: true,
      editVisible: true,
      confirmVisible: false

    })

  },
  share: function () {
    this.onShareAppMessage()
  },
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
          lessonData[i][week].subject_title = chooseSubject.subject_title
          lessonData[i][week].subject_desc = chooseSubject.subject_desc
        }

      }
      courseTemplate.ListData = lessonData
      this.setData({
        courseTemplate: courseTemplate
      })
    }
  },
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
        subjects1[i].subject_desc.bordercss = '4rpx solid #000'
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
  navigateToSubject: function () {
    wx.navigateTo({ url: '../subject/subject' })
  },
  //编辑课程描述信息弹出框  
  modalinput: function (event) {
    
    var desc=event.currentTarget.dataset
    var desctype = desc.desctype
    var descvalaue=desc.descvalue

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
      hiddenTimemodalput:true
    });
  },

  DescBlur: function (e) {
    this.data.courseDescValue = e.detail.value
  },  

  //确认  
  DescConfirm: function () {
    var courseTemplate = this.data.courseTemplate
    if (this.data.courseDescType === 'top_desc') {
      courseTemplate.top_desc = this.data.courseDescValue
    }
    if (this.data.courseDescType === 'middle_desc') {
      courseTemplate.middle_desc = this.data.courseDescValue
    }
    if (this.data.courseDescType === 'bottom_desc') {
      courseTemplate.bottom_desc = this.data.courseDescValue
    }
    this.setData({
      hiddenmodalput: true,
      courseTemplate: courseTemplate
    })
  },
  //起止时间选择
  timeChoose: function(event){
    var time = event.currentTarget.dataset
    var startTime = time.start
    var endTime = time.end
    this.setData({
      startTime: startTime,
      endTime: endTime,
      hiddenTimemodalput: !this.data.hiddenTimemodalput
    })
  },

  bindStartTimeChange:function(e){
    this.setData({
      startTime: e.detail.value
    })

  },

  bindEndTimeChange: function (e) {
    this.setData({
      endTime: e.detail.value
    })

  }

})