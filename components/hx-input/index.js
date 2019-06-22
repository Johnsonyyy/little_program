// components/hx-input/hx-input.js
var hxBehavior = require('../hx-behavior');
Component({
  behaviors: [hxBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
    value:{
      type: String,
      value: ''
    },
    bindValue: {
      type: String,
      value: ''
    },
    maxlength:{
      type: Number,
      value:-1
    },
    type:{
      type: String,
      value: 'input'
    },
    inputType: {
      type: String,
      value: 'text'
    },
    placeholder: {
      type: String,
      value: '输入内容...'
    },
    label: {
      type: String,
      value: ''
    },
    inputType: {
      type: String,
      value: 'text'
    },
    require:{
      type:String,
      value: ''
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    arr: []
  },
  attached(){
    let that = this;
    that.data.arr = (that.data.bindValue || '').split('.');
    if (that.data.require) {
      let obj = {};
      obj['_' + that.data.bindValue] = {
        prop: '_' + that.data.bindValue,
        name: that.data.label || that.data.require
      };
      that.data.page.data._require = Object.assign(that.data.page.data._require || {}, obj);
    }
  },
  detached() {
    let that = this;
    that.data.arr = (that.data.bindValue || '').split('.');
    if (that.data.require) {
      delete that.data.page.data._require['_' + that.data.bindValue];
    }
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    _bindInput(e) {
      let that = this;
      that.adjectiveBindData(e.detail.value);
    },
    _bindDateChange(e){
      let that = this;
      console.log(e);
      that.setData({
        value: e.detail.value
      })
      that.adjectiveBindData(e.detail.value);
    }
  }
})
