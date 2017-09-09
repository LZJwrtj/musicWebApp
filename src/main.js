// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyLoad from 'vue-lazyload'
import MintUI from 'mint-ui'

import 'assets/css/index.css'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
Vue.use(MintUI)
Vue.use(VueLazyLoad, {
  loading: require('assets/img/default.gif')
})

fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
