import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    basket: []
  },
  getters: {
    basket: state => state.basket
  },
  mutations: {
    SET_BASKET (state, data){
      state.basket = data
    },
    ADD_ITEM (state, data){
      state.basket.push(data)
    }
  },
  actions: {
    getData( { commit } ){
      fetch('http://localhost:3000/api/basket')
      .then(res => res.json())
      .then(data => commit('SET_BASKET', data))
    },
    postData( { commit }, payload ){
      fetch('http://localhost:3000/api/basket', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
      })
      .then(res => commit('ADD_ITEM', payload))
    }
  }
})
