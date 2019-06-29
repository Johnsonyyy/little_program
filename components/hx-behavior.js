// my-behavior.js
module.exports = Behavior({
  behaviors: [],
  properties: {
  },
  data: {
    tempArr: [],
    value: '',
    page: {}
  },
  attached() {
    let that = this;
    let pages = getCurrentPages();
    that.data.page = pages[pages.length - 1];
    that.data.tempArr = that.data.modal.split('.');
    let tempData = '';
    that.data.tempArr.forEach((item,index) => {
      if(index == 0) {
        console.log(that.data.page.data[item]);
        tempData = that.data.page.data[item];
      } else {
        console.log(item, index);
        tempData = tempData[item];
      }
    })
    that.setData({
      value: tempData
    })
  },
  methods: {
    adjectiveBindData(data) {
      let that = this;
      that.data.page.setData({
        [that.data.modal]: data
      })
    }
  }
})