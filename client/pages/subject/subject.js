// 引入 QCloud 小程序增强 SDK
var qcloud = require('../../vendor/wafer2-client-sdk/index');

// 引入配置
var config = require('../../config');

Page({
  data: {
    colors: [
      {
        groupNo: 1,
        colors: [
          {
            id: 1,
            color: "#666699"
          },
          {
            id: 2,
            color: "#0099CC"
          },
          {
            id: 3,
            color: "#CC3399"
          },
          {
            id: 4,
            color: "#FF6666"
          }
        ]
      },
      {
        groupNo: 2,
        colors: [
          {
            id: 5,
            color: "#3399CC"
          },
          {
            id: 6,
            color: "#CC6600"
          },
          {
            id: 7,
            color: "#999999"
          },
          {
            id: 8,
            color: "#FF9933"
          }

        ]

      },
      {
        groupNo: 3,
        colors: [
          {
            id: 9,
            color: "#009933"
          },
          {
            id: 10,
            color: "#999999"
          },
          {
            id: 11,
            color: "#0099CC"
          },
          {
            id: 12,
            color: "#CCCCCC"
          }
        ]
      },
      {
        groupNo: 4,
        colors: [
          {
            id: 9,
            color: "#FF6666"
          },
          {
            id: 10,
            color: "#FF6600"
          },
          {
            id: 11,
            color: "#009966"
          },
          {
            id: 12,
            color: "#CC6633"
          }
        ]
      },
      {
        groupNo: 5,
        colors: [
          {
            id: 9,
            color: "#FFCC99"
          },
          {
            id: 10,
            color: "#CC6600"
          },
          {
            id: 11,
            color: "#CC0066"
          },
          {
            id: 12,
            color: "#009999"
          }
        ]
      }
    ],
    chooseColor:''

  },
  onLoad:function(){
    var that = this
    qcloud.request({
      url: config.service.subjectList,
      login:true,
      dataType:'json',
      sucess(result){
        console.log('request success', result.data.data);

      }
    })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var subject = {
      subject_title: e.detail.value.subject_title,
      subject_desc: {
        color: this.data.chooseColor,
        teacher: '',
        classroom: '',
        bordercss: ''
      },
      pk_course:'98ac7b76-923f-11e7-ad52-525400e4179c'
    }
    console.log(subject)
    var subjects=[]
    var subjectsTemp = wx.getStorageSync('subjects')
    if (subjectsTemp)
      subjects = subjectsTemp
    subjects.push(subject)
    wx.setStorageSync('subjects', subjects)
    qcloud.request({
      url: config.service.subjectAdd,
      method:'post',
      login:true,
      data: subject,
      success(result){
        console.log(result)
        if(result.data.code===200){
          wx.switchTab({
            url: '/pages/course/course'
          })

        }
      }

    })
    
  },
  formReset: function (e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  },
  chooseColor: function (event){
    var para = event.currentTarget.dataset
    this.setData({
      chooseColor: para.item
    })
    console.log(para)

  }
})