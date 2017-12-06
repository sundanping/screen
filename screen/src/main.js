// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import axios from 'axios'
import { DatePicker } from 'element-ui'
//import ElementUI from 'element-ui'
Vue.use(DatePicker)
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.httpApi = 'http://big-screen.com'//ajax 请求的URL
//Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
