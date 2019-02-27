import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import 'vue-googlemaps/dist/vue-googlemaps.css'
import VueGoogleMaps from 'vue-googlemaps'
import App from './App'
import router from './router'
import store from './store/store'

sync(store,router)
Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    apiKey: 'AIzaSyBiq5XcFuuwbNet77mWhiM7oU7KK-yDU0Q',
    libraries: ['places'],
    useBetaRenderer: false,
  },
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
