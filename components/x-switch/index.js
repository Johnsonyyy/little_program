// components/x-switch/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    checked: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    color: {
      type: String,
      value: '#629bea'
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
    switchChange(e) {
      let that = this;
    
      that.triggerEvent('switchChange', e.detail.value);
    }
  }
})
