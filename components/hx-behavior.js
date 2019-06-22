// my-behavior.js
module.exports = Behavior({
  behaviors: [],
  properties: {
  },
  data: {
    page: {}
  },
  attached() {
    let that = this;
    let pages = getCurrentPages();
    that.data.page = pages[pages.length - 1];
  },
  methods: {
    adjectiveBindData(data) {
      let that = this;
      for (let item in that.data.page.data) {
        if (Object.prototype.toString.call(that.data.page.data[item]) == '[object Object]') {
          for (let child in that.data.page.data[item]) {
            if (child === that.data.bindValue) {
              that.data.page.data[item][child] = data;
            }
          }
        } else if (item === that.data.bindValue) {
          console.log(item);
          that.data.page.data[item] = data;
        }
      }
    }
  }
})