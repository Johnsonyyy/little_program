// pages/date/date.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDatePick: false,
    date: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let that = this;
      let now = new Date();
      that.setData({
        date: now.getFullYear() + '年' + (now.getMonth() + 1) + '月' + now.getDate() + '日' + now.getHours() + '时' + now.getMinutes() + '分'
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  getDate(){
    let that = this;
    that.setData({
      showDatePick: true
    })
  },
  getDateData(e){
    let that = this;
    console.log(e.detail);
    that.setData({
      date: e.detail[0] + '年' + e.detail[1] + '月' + e.detail[2] + '日' + e.detail[3] + '时' + e.detail[4] + '分'
    })
  }
})