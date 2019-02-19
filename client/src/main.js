import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import moment from 'vue-moment'
import {routes} from './routes.js'
import { store } from './store/store';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)

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
