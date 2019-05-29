// pages/date/date.js

/**
 * 注意想看传参给子组件的demo，把下面和布局页面的注释代码放开，同时把对应的代码注释掉即可
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDatePick: false,
    //dateArr: new Array(3),
    date: '',
    currentIndex: 0
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
      // that.setData({
      //   'date[0]': now.getFullYear() + '年' + (now.getMonth() + 1) + '月' + now.getDate() + '日' + now.getHours() + '时' + now.getMinutes() + '分'
      // })
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

  getDate(e){
    let that = this;
    that.setData({
      showDatePick: true
    })
    // that.setData({
    //   showDatePick: true,
    //   currentIndex: e.currentTarget.dataset.index
    // })
  },
  getDateData(e){
    let that = this;
    console.log(e.detail);
    let date = e.detail[0];
    that.setData({
      date: date[0] + '年' + date[1] + '月' + date[2] + '日' + date[3] + '时' + date[4] + '分'
    })
    // let dataObj = e.detail[1]; // 根据项目需要来
    // that.data.dateArr[+dataObj] = date[0] + '年' + date[1] + '月' + date[2] + '日' + date[3] + '时' + date[4] + '分';
    // that.setData({
    //   dateArr: that.data.dateArr
    // })
  }
})