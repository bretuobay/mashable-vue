import Vue from 'vue'
import App from './App'
import router from './router'
import SiteHeader from '@/components/Header'
import SiteFooter from '@/components/Footer'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
