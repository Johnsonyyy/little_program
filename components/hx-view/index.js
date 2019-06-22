// components/hx-row/hx-row.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    height: {
      type: String,
      value: '',
      optionalTypes: [Number]
    },
    width: {
      type: String,
      value: '100%',
      optionalTypes: [Number]
    },
    row:{
      type:String,
      value: 'left'
    },
    col: { // 垂直方向的
      type: String,
      value: 'center'
    },
    bg:{ // 默认是无色
      type: String,
      value: ''
    },
    bgStyle: { // 背景颜色 style
      type: String,
      value: ''
    },
    color: { // 字体颜色 class
      type: String,
      value: ''
    },
    colorStyle: { // 字体颜色 style
      type: String,
      value: ''
    },
    size:{ // 字体大小，默认是14，单位是像素
      type: Number,
      value: 14
    }
  },
  attached() {
    // 处理传入的数据
    let that = this;
    if (Object.prototype.toString.call(that.data.height) == '[object Number]') {
      that.setData({
        height: that.data.height + 'px'
      })
    }
    if (Object.prototype.toString.call(that.data.width) == '[object Number]') {
      that.setData({
        width: that.data.width + 'px'
      })
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
    _bindTap(e){
      let that = this;
      that.triggerEvent('clickEvent');
    }
  }
})
