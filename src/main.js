import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$ajax = axios

// 全局自定义指令
// Vue.directive('rainbow', {
//   bind(el, binding, vnode) {
//     el.style.color = '#' + Math.random().toString(16).slice(2, 8)
//   }
// })
// Vue.directive('theme', {
//   bind(el, binding, vnode) {
//     if (binding.value === 'wind') {
//       el.style.maxWidth = '100%';
//     } else if (binding.value !== 'wind') {
//       el.style.maxWidth = '100px'
//     }
//     if (binding.arg == 'column') {
//       el.style.background = 'green'
//     }
//   }
// })
// 全局自定义过滤器
// Vue.filter('to-uppercase', function (value) {
//   return value.toUpperCase()
// })
// Vue.filter('to-snippet', function (value) {
//   return value.slice(0, 100) + '...'
// })

new Vue({
  render: h => h(App),
  router
}).$mount('#app')