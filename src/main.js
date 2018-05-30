import Vue from 'vue'
import App from './App'
import store from './store'
import api from './utils/api'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$api = api

const app = new Vue({
  store,
  ...App
})
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', '^pages/index/main', 'pages/counter/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },

    tabBar: {
      color: '#999999',
      selectedColor: '#42D1D9',
      backgroundColor: '#ffffff',
      borderStyle: 'white',
      /* eslint-disable */
      list: [
        {
          pagePath: 'pages/index/main',
          text: '首页',
          iconPath: 'static/images/tabBar/index_no1.png',
          selectedIconPath: 'static/images/tabBar/index_ok1.png'
        },
        {
          pagePath: 'pages/counter/main',
          text: '专属胶囊',
          iconPath: 'static/images/tabBar/capsule_no1.png',
          selectedIconPath: 'static/images/tabBar/capsule_ok1.png'
        },
        {
          pagePath: 'pages/logs/main',
          text: '我的',
          iconPath: 'static/images/tabBar/my_no1.png',
          selectedIconPath: 'static/images/tabBar/my_ok1.png'
        }
      ]
      /* eslint-enable */
    }
  }
}
