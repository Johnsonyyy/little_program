// components/aydk_image_view/aydk_image_view.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src:{
      type: String,
      value: ''
    },
    imageList:{
      type: Array,
      value: []
    },
    size:{ // 图片默认占屏幕宽度的比例，默认是屏幕的四分之一（除去padding的宽度1/4）
      type: Number,
      value: 4
    },
    add: {
      type: Boolean,
      value: false
    },
    add_limit:{ // 上传图片上限，默认1
      type: Number,
      value: 1
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
    addImg() {
      let that = this;
      wx.chooseImage({
        count: that.data.add_limit,
        success: function(res) {
          that.triggerEvent('addImg', res.tempFilePaths);// 
        },
      })
    },
    deleteImg(){
      let that = this;
      that.triggerEvent('deleteImg', that.data.src);
    },
    // 图片预览
    showImg(){
      let that =this;
      wx.previewImage({
        urls: that.data.imageList.length > 0 ? that.data.imageList : [that.data.src],
        current: that.data.src
      })
    }
  }
})
