// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import VueAwesomeSweper from 'vue-awesome-swiper'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store'

Vue.use(VueAwesomeSweper)
Vue.use(MintUI)
Vue.use(vueResource)
// import axios from 'axios'
// Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
