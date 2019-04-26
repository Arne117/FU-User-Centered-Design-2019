import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {},
  getters,
  // sync tasks
  mutations,
  // async tasks that call sync mutuations [commit]
  actions,
  // exported store logic goes here [dispatch]
  modules: {}
})
