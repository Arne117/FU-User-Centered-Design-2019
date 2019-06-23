import Vue from 'vue'
import Vuex from 'vuex'

import Project from './modules/project';
import User from './modules/users'
import Saros from './modules/saros'
import Wizard from './modules/wizard'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    Project,
    User,
    Saros,
    Wizard
  }
})
