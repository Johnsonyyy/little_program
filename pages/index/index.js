// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  _bindViewTap:function(){
    wx.navigateTo({
      url: '../richEditor/richEditor',
    })
  },
  goRichTextDemo(){
    wx.navigateTo({
      url: '../richtext_demo/richtext_demo',
    })
  },
  goAddImg() {
    wx.navigateTo({
      url: '../add-img/add-img',
    })
  },
  goDate() {
    wx.navigateTo({
      url: '../date/date',
    })
  }
})