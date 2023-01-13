import Vue from 'vue'
import Vuex from 'vuex'
import UserModule from './user.module.js'
import AirportsModule from './airports.module.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: UserModule,
    airports: AirportsModule
  }
})
