import Vue from 'vue';
import Vuex from 'vuex';
import EventService from '../services/EventService.js'

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
    },
    DELETE_ITEM (state, id){
      let index = state.basket.findIndex(item => item._id == id)
      state.basket.splice(index, 1)
    }
  },
  actions: {
    getData( { commit } ) {
      EventService.getBasket()
      .then(data => commit('SET_BASKET', data))
    },
    postData( { commit }, payload ) {
      EventService.addToBasket(payload)
      .then(res => commit('ADD_ITEM', res))
    },
    deleteData( { commit }, id ) {
      EventService.removeFromBasket(id)
      .then(res => commit('DELETE_ITEM', id))
    }
  }
})
