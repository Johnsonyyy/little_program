var hxBehavior = require('../hx-behavior');
Component({
  behaviors: [hxBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
    group:{
      type: Array,
      value: [],
    },
    label:{
      type: String,
      value: ''
    },
    value:{
      type: String,
      value: ''
    },
    bindValue: {
      type: String,
      value: ''
    },
    checked: {
      type: Boolean,
      value: false
    },
    maxlength: {
      type: Number,
      value: -1
    },
    minlength: {
      type: Number,
      value: -1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    checkChangeGroup(e) {
      let that = this;
      let max = false;
      let min = false
      let arr = that.data.group.map(item => {
        if(e.detail.value.includes(item.value)) {
          if (that.data.maxlength > 0 && e.detail.value.length > that.data.maxlength){
            max = true;
          }else{
            item.checked = true;
          }
        }else{
          if (that.data.minlength > 0 && e.detail.value.length < that.data.minlength) {
            min = true;
          } else {
            item.checked = false;
          }
        }
        return item;
      })
      if (max||min) {
        wx.showModal({
          title: '提示',
          content: '最' + (max ? '多' : '少') + '选择' + (max ? that.data.maxlength : that.data.minlength) + "个选项哦",
          showCancel: false,
          confirmText: "我知道了"
        })
        that.setData({
          group: arr,
        })
      }
      that.adjectiveBindData(arr);
    }
  }
})
