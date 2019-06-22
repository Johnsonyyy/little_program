// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    testData: '',
    images: [
      {
        'image': '/pages/image/bg.png',
        'data': ''
      },
      {
        'image': '/pages/image/bg2.png',
        'data': ''
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  test(e) {
    let num = e.detail.value;
    let that = this;
    that.setData({
      testData: ((+num).toFixed(2))
    })
  },
  input() {
    let that = this;
    
    that.setData({
      testData: +that.data.testData
    })
  }
})