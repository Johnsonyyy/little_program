// pages/base/modal/modal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal1: false,
    showModal2: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  showModal1() {
    let that = this;
    that.setData({
      showModal1: true
    })
  },
  showModal2() {
    let that = this;
    that.setData({
      showModal2: true
    })
  },
  showModal3() {
    let that = this;
    that.setData({
      showModal3: true
    })
  },
  showModal4() {
    let that = this;
    that.setData({
      showModal4: true
    })
  },
  showModal5() {
    let that = this;
    that.setData({
      showModal5: true
    })
  },
  showModal6() {
    let that = this;
    that.setData({
      showModal6: true
    })
  }
})