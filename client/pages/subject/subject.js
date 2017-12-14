// 引入 QCloud 小程序增强 SDK
var qcloud = require('../../vendor/wafer2-client-sdk/index');

// 引入配置
var config = require('../../config');
var app = new getApp()
Page({
  data: {
    colors: [
      {
        groupNo: 1,
        colors: [
          {
            id: 1,
            text: '1',
            color: "#666699",
            choosedcss: ''
          },
          {
            id: 2,
            text: '2',
            color: "#20A0FF",
            choosedcss: ''
          },
          {
            id: 3,
            text: '3',
            color: "#CC3399",
            choosedcss: ''
          },
          {
            id: 4,
            text: '4',
            color: "#FF6666",
            choosedcss: ''
          }
        ]
      },
      {
        groupNo: 2,
        colors: [
          {
            id: 5,
            text: '5',
            color: "#3399CC",
            choosedcss: ''
          },
          {
            id: 6,
            text: '6',
            color: "#CC6600",
            choosedcss: ''
          },
          {
            id: 7,
            text: '7',
            color: "#FA5555",
            choosedcss: ''
          },
          {
            id: 8,
            text: '8',
            color: "#FF9933",
            choosedcss: ''
          }

        ]

      },
      {
        groupNo: 3,
        colors: [
          {
            id: 9,
            text: '9',
            color: "#009933",
            choosedcss: ''
          },
          {
            id: 10,
            text: '10',
            color: "#EB9E05",
            choosedcss: ''
          },
          {
            id: 11,
            text: '11',
            color: "#0099CC",
            choosedcss: ''
          },
          {
            id: 12,
            text: '12',
            color: "#409EFF",
            choosedcss: ''
          }
        ]
      },
      {
        groupNo: 4,
        colors: [
          {
            id: 13,
            text: '13',
            color: "#FF6666",
            choosedcss: ''
          },
          {
            id: 14,
            text: '14',
            color: "#FF6600",
            choosedcss: ''
          },
          {
            id: 15,
            text: '15',
            color: "#009966",
            choosedcss: ''
          },
          {
            id: 16,
            text: '16',
            color: "#CC6633",
            choosedcss: ''
          }
        ]
      },
      {
        groupNo: 5,
        colors: [
          {
            id: 17,
            text: '17',
            color: "#67C23A",
            choosedcss: ''
          },
          {
            id: 18,
            text: '18',
            color: "#CC6600",
            choosedcss: ''
          },
          {
            id: 19,
            text: '19',
            color: "#CC0066",
            choosedcss: ''
          },
          {
            id: 20,
            text: '20',
            color: "#009999",
            choosedcss: ''
          }
        ]
      }
    ],
    chooseColor: '',
    subject_title: '新课程',
    pk: "",
    delVisible:false //删除按钮是否可见

  },
  onLoad: function (option) {
    if (option.pk) {
      this.setData({
        subject_title: option.subject_title,
        pk: option.pk,
        chooseColor: option.subject_color,
        delVisible:true

      })
      var colors = this.data.colors
      for (var i = 0; i < colors.length; i++) {
        var colorItem = colors[i].colors
        for (var j = 0; j < colorItem.length; j++) {
          if (option.subject_color == colorItem[j].color) {
            colors[i].colors[j].choosedcss = 'border:1rpx solid #000;opacity:1;box-shadow: 5px 5px 3px #888888;'
            colors[i].colors[j].text = this.data.subject_title

          }
        }
      }
      this.setData({
        colors: colors
      })
    }
  },
  inputChange: function (e) {
    this.setData({
      subject_title: e.detail.value
    })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var subject = {
      pk: this.data.pk,
      subject_title: e.detail.value.subject_title,
      subject_desc: {
        color: this.data.chooseColor,
        teacher: '',
        classroom: '',
        bordercss: ''
      },
      pk_course: app.globalData.pk_course
    }
    console.log(subject)
    var subjects = []
    var subjectsTemp = wx.getStorageSync('subjects')
    if (subjectsTemp)
      subjects = subjectsTemp
    subjects.push(subject)
    wx.setStorageSync('subjects', subjects)
    qcloud.request({
      url: config.service.subjectAdd,
      method: 'post',
      login: true,
      data: subject,
      success(result) {
        console.log(result)
        if (result.data.code === 200) {
          wx.switchTab({
            url: '/pages/course/course'
          })

        }
      }

    })

  },
  formReset: function (e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    wx.switchTab({
      url: '/pages/course/course'
    })
  },
  //删除
  delete:function(){
    var that=this
    wx.showModal({
      title: '提示',
      content: '确认删除吗？',
      success: function (res) {
        if (res.confirm) {
          var subject = {
            pk: that.data.pk
          }
          qcloud.request({
            url: config.service.subjectDel,
            method: 'post',
            login: true,
            data: subject,
            success(result) {
              if (result.data.code === 200) {
                wx.switchTab({
                  url: '/pages/course/course'
                })

              }
            }

          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  chooseColor: function (event) {

    var para = event.currentTarget.dataset
    var id = para.item.id
    var groupNo = para.groupno
    var colors = this.data.colors
    for (var i = 0; i < colors.length; i++) {
      var colorItem = colors[i].colors
      if (groupNo == colors[i].groupNo) {
        for (var j = 0; j < colorItem.length; j++) {
          if (id == colorItem[j].id && colorItem[j].choosedcss == '') {
            colors[i].colors[j].choosedcss = 'border:1rpx solid #000;opacity:1;box-shadow: 5px 5px 3px #888888;'
            if (this.data.subject_title != "") {
              colors[i].colors[j].text = this.data.subject_title
            } else {
              colors[i].colors[j].text = "^_^"
            }

          }
          else {
            colors[i].colors[j].choosedcss = ''
            colors[i].colors[j].text = colors[i].colors[j].id
          }

        }
      }
      else {
        for (var j = 0; j < colorItem.length; j++) {
          colors[i].colors[j].choosedcss = ''
          colors[i].colors[j].text = colors[i].colors[j].id
        }
      }
    }
    this.setData({
      chooseColor: para.item.color,
      colors: colors
    })
    console.log(para)

  }
})