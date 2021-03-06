import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import router from './router'

// Vue imports
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
