import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firstName: 'John',
    lastName: 'Doe',
    favorites: []
  },
  getters: {
    fullName: function (state) {
      return `${state.firstName} ${state.lastName}`
    }
  },
  mutations: {
    UPDATE_FAVORITES: function (state, payload){
      state.favorites = payload
    }
  },
  actions: {
    addToFavorites: function (context, payload) {
      const favorites = context.state.favorites
      favorites.push(payload)
      context.commit('UPDATE_FAVORITES', favorites)
    }
  },
  modules: {
  }
})
