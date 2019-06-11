import Vue from 'vue'
import Vuex from 'vuex'

import Project from './modules/project';
import User from './modules/users'
import Saros from './modules/saros'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    Project,
    User,
    Saros
  }
})
