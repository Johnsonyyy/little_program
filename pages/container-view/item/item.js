// pages/container-view/item/item.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    for(let i = 0;i<20;i++){
      that.data.dataList.push({
        title: '这是item',
        display: that.getDisplay(i)
      })
    }
    that.setData({
      dataList:that.data.dataList
    })
  },
  getDisplay(i){
    let that = this;
    let dis = '';
    switch(i%4){
      case 0:
        dis = 'row';
        break;
      case 1:
        dis = 'col';
        break
      case 2:
        dis = 'center';
        break
      case 3:
        dis = 'between';
        break
    }
    return dis;
  },
  clickItem(e){
    wx.showToast({
      title: '点击了'+e.detail,
    })
  },
  longClickItem(e) {
    wx.showToast({
      title: '长按了' + e.detail,
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})