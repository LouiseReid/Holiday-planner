import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import moment from 'vue-moment'
import {routes} from './routes.js'
import { store } from './store/store';


Vue.use(VueRouter)
Vue.use(moment);

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
