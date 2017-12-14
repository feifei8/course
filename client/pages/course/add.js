// 引入 QCloud 小程序增强 SDK
var qcloud = require('../../vendor/wafer2-client-sdk/index');

// 引入配置
var config = require('../../config');
var app = new getApp()
Page({
  data: {
    template: [
      { value: '6', name: '6课节' },
      { value: '7', name: '7课节', checked: 'true' },
      { value: '8', name: '8课节' },
      { value: '9', name: '9课节' },
      { value: '10', name: '10课节' },
      { value: '11', name: '11课节' }
    ],
    checkLessNumber: '7',
    courseTemplate11: {
      "pk_course": "",
      "course_title": "xxxx课程表",
      "school":'xxx学校',
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
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 2,
          "lesson_start": "09:00",
          "lesson_end": "09:45",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 3,
          "lesson_start": "10:00",
          "lesson_end": "10:45",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 4,
          "lesson_start": "11:00",
          "lesson_end": "11:45",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 5,
          "lesson_start": "13:30",
          "lesson_end": "14:15",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 6,
          "lesson_start": "14:30",
          "lesson_end": "15:15",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 7,
          "lesson_start": "15:30",
          "lesson_end": "16:15",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 8,
          "lesson_start": "16:30",
          "lesson_end": "17:15",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 9,
          "lesson_start": "17:20",
          "lesson_end": "18:00",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 10,
          "lesson_start": "19:30",
          "lesson_end": "20:15",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 11,
          "lesson_start": "20:30",
          "lesson_end": "21:30",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        }
      ],
      "subjects": [
        {
          pk: '',
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
      ]
    },
    courseTemplate10: {
      "pk_course": "",
      "course_title": "xxxx课程表",
      "school": 'xxx学校',
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
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 2,
          "lesson_start": "09:00",
          "lesson_end": "09:45",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 3,
          "lesson_start": "10:00",
          "lesson_end": "10:45",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 4,
          "lesson_start": "11:00",
          "lesson_end": "11:45",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 5,
          "lesson_start": "13:30",
          "lesson_end": "14:15",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 6,
          "lesson_start": "14:30",
          "lesson_end": "15:15",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 7,
          "lesson_start": "15:30",
          "lesson_end": "16:15",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 8,
          "lesson_start": "16:30",
          "lesson_end": "17:15",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 9,
          "lesson_start": "17:20",
          "lesson_end": "18:00",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 10,
          "lesson_start": "19:30",
          "lesson_end": "20:15",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        }
      ],
      "subjects": [
        {
          pk: '',
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
      ]
    },
    courseTemplate9: {
      "pk_course": "",
      "course_title": "xxxx课程表",
      "school": 'xxx学校',
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
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 2,
          "lesson_start": "09:00",
          "lesson_end": "09:45",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 3,
          "lesson_start": "10:00",
          "lesson_end": "10:45",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 4,
          "lesson_start": "11:00",
          "lesson_end": "11:45",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 5,
          "lesson_start": "13:30",
          "lesson_end": "14:15",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 6,
          "lesson_start": "14:30",
          "lesson_end": "15:15",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 7,
          "lesson_start": "15:30",
          "lesson_end": "16:15",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 8,
          "lesson_start": "16:30",
          "lesson_end": "17:15",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 9,
          "lesson_start": "17:20",
          "lesson_end": "18:00",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        }
      ],
      "subjects": [
        {
          pk: '',
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
      ]
    },
    courseTemplate8: {
      "pk_course": "",
      "course_title": "xxxx课程表",
      "school": 'xxx学校',
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
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 2,
          "lesson_start": "09:00",
          "lesson_end": "09:45",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 3,
          "lesson_start": "10:00",
          "lesson_end": "10:45",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 4,
          "lesson_start": "11:00",
          "lesson_end": "11:45",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 5,
          "lesson_start": "13:30",
          "lesson_end": "14:15",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 6,
          "lesson_start": "14:30",
          "lesson_end": "15:15",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 7,
          "lesson_start": "15:30",
          "lesson_end": "16:15",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 8,
          "lesson_start": "16:30",
          "lesson_end": "17:15",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        }
      ],
      "subjects": [
        {
          pk: '',
          subject_title: '语文',
          subject_desc: {
            color: '#20A0FF',
            teacher: '王老师',
            classroom: '301',
            bordercss: ''
          }

        },
        {
          pk: '',
          subject_title: '数学',
          subject_desc: {
            color: '#13CE66',
            teacher: '王老师',
            classroom: '301',
            bordercss: ''
          }
        },
        {
          pk: '',
          subject_title: '英语',
          subject_desc: {
            color: '#F7BA2A',
            teacher: '王老师',
            classroom: '301',
            bordercss: ''
          }
        },
        {
          pk: '',
          subject_title: '美术',
          subject_desc: {
            color: '#FF4949',
            teacher: '王老师',
            classroom: '301',
            bordercss: ''
          }
        }
      ]
    },
    courseTemplate7: {
      "pk_course": "",
      "course_title": "xxxx课程表",
      "school": 'xxx学校',
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
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 2,
          "lesson_start": "09:00",
          "lesson_end": "09:45",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 3,
          "lesson_start": "10:00",
          "lesson_end": "10:45",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 4,
          "lesson_start": "11:00",
          "lesson_end": "11:45",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 5,
          "lesson_start": "13:30",
          "lesson_end": "14:15",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 6,
          "lesson_start": "14:30",
          "lesson_end": "15:15",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 7,
          "lesson_start": "15:30",
          "lesson_end": "16:15",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        }
      ],
      "subjects": [
        {
          pk: '',
          subject_title: '语文',
          subject_desc: {
            color: '#20A0FF',
            teacher: '王老师',
            classroom: '301',
            bordercss: ''
          }

        },
        {
          pk: '',
          subject_title: '数学',
          subject_desc: {
            color: '#13CE66',
            teacher: '王老师',
            classroom: '301',
            bordercss: ''
          }
        },
        {
          pk: '',
          subject_title: '英语',
          subject_desc: {
            color: '#F7BA2A',
            teacher: '王老师',
            classroom: '301',
            bordercss: ''
          }
        },
        {
          pk: '',
          subject_title: '美术',
          subject_desc: {
            color: '#FF4949',
            teacher: '王老师',
            classroom: '301',
            bordercss: ''
          }
        }
      ]
    },
    courseTemplate6: {
      "pk_course": "",
      "course_title": "xxxx课程表",
      "school": 'xxx学校',
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
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 2,
          "lesson_start": "09:00",
          "lesson_end": "09:45",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 3,
          "lesson_start": "10:00",
          "lesson_end": "10:45",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 4,
          "lesson_start": "11:00",
          "lesson_end": "11:45",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 5,
          "lesson_start": "13:30",
          "lesson_end": "14:15",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        },
        {
          "lesson_id": 6,
          "lesson_start": "14:30",
          "lesson_end": "15:15",
          "monday": null,
          "tuesday": null,
          "wednesday": null,
          "thursday": null,
          "friday": null
        }
      ],
      "subjects": [
        {
          pk: '',
          subject_title: '语文',
          subject_desc: {
            color: '#20A0FF',
            teacher: '王老师',
            classroom: '301',
            bordercss: ''
          }

        },
        {
          pk: '',
          subject_title: '数学',
          subject_desc: {
            color: '#13CE66',
            teacher: '王老师',
            classroom: '301',
            bordercss: ''
          }
        },
        {
          pk: '',
          subject_title: '英语',
          subject_desc: {
            color: '#F7BA2A',
            teacher: '王老师',
            classroom: '301',
            bordercss: ''
          }
        },
        {
          pk: '',
          subject_title: '美术',
          subject_desc: {
            color: '#FF4949',
            teacher: '王老师',
            classroom: '301',
            bordercss: ''
          }
        }
      ]
    }
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)

    var items = this.data.template;
    for (var i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value == e.detail.value
    }

    this.setData({
      template: items,
      checkLessNumber: e.detail.value
    });
  },
  formSubmit: function (e) {
    var course_title = e.detail.value.course_title
    if (!course_title) {
      return
    }
    var that = this
    var courseTemplatea = ''
    switch (this.data.checkLessNumber) {
      case '6':
        courseTemplatea = this.data.courseTemplate6
        break;
      case '7':
        courseTemplatea = this.data.courseTemplate7
        break;
      case '8':
        courseTemplatea = this.data.courseTemplate8
        break;
      case '9':
        courseTemplatea = this.data.courseTemplate9
        break;
      case '10':
        courseTemplatea = this.data.courseTemplate10
        break;
      case '11':
        courseTemplatea = this.data.courseTemplate11
        break;
      default:
        courseTemplatea = this.data.courseTemplate8
    }
    courseTemplatea.pk_course=this.uuid()
    courseTemplatea.course_title = course_title
    qcloud.request({
      // 要请求的地址
      url: config.service.courseAdd,
      method: 'post',
      // 请求之前是否登陆，如果该项指定为 true，会在请求之前进行登录
      login: true,
      data: courseTemplatea,

      success(result) {
        console.log(result)
        if (result.data.code === 200) {
          console.log('request success', result.data.data);
          app.globalData.pk_course = courseTemplatea.pk_course
          wx.setStorageSync('course', courseTemplatea)
          wx.switchTab({
            url: '/pages/course/course'
          })

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
  formReset: function (e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    wx.switchTab({
      url: '/pages/my/my'
    })
  },
  uuid: function () {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
  }
})