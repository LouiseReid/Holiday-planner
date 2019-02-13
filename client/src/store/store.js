import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    basket: []
  },
  mutations: {
    setBasket(state, data){
      state.basket = data
    }
  },
  actions: {
    getData( { commit } ){
      fetch('http://localhost:3000/api/basket')
      .then(res => res.json())
      .then(data => commit('setBasket', data))
    }
  }
})
