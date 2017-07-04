// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import VueAwesomeSweper from 'vue-awesome-swiper'
// import $ from 'jquery'
// Vue.use($)
Vue.use(VueAwesomeSweper)

Vue.use(vueResource)
// import axios from 'axios'
// Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
