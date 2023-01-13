import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firstName: 'John',
    lastName: 'Doe'
  },
  getters: {
    fullName: function (state) {
      return `${state.firstName} ${state.lastName}`
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
