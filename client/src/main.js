import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import moment from 'vue-moment'
import {routes} from './routes.js'

Vue.use(VueRouter)
Vue.use(moment);

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
