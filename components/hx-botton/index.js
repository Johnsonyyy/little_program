// components/hx-botton/hx-bottom.js
Component({
  externalClasses: ['circle'],
  /**
   * 组件的属性列表
   */
  properties: {
    btnType:{ // 按钮类型，‘primary’，‘circle’
      type: String,
      value: 'primary'
    },
    label: {
      type: String,
      value: '提交'
    },
    disable:{
      type: Boolean,
      value: false
    }
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的初始数据
   */
  data: {
    tempObj:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _submitEvent(e) {
      let that = this;
      if(that.diffForm()){
        that.triggerEvent('submit', e.detail.formId);
      }
    },
    _clickCircle(e){
      let that = this;
      that.triggerEvent('click', e);
    },
    diffForm(){
      let that = this;
      let pages = getCurrentPages();
      let page = pages[pages.length - 1];
      if(page.data._require){
        for(let item in page.data._require){
          let tempItem = item.split('_')[1];
          that.data.tempObj[tempItem] = '';
          that.checkNull(tempItem, page.data);
          if (!that.data.tempObj[tempItem]){
            wx.showToast({
              title: page.data._require[item].name+'必须要填哦',
              duration:1000,
              mask:true,
              icon: 'none'
            })
            return false;
          }
        }
        return true;
      }else{
        return true;
      }
    },
    checkNull(key,data){
      let that = this;
      for(let item  in data) {
        if (Object.prototype.toString.call(data[item]) === '[object Object]'){
          that.checkNull(key, data[item]);
        }else {
          if(item === key){
            that.data.tempObj[key] = data[key].trim();
            break;
          }
        }
      }
    }
  }
})
