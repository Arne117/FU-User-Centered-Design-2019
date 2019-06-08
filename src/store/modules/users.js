const state = {
  users: [
    'A.B', 'C.D.'
  ]
};

const getters = {
  allStuff: state => state.users
};

const actions = {};

const mutations = {};




export default { namespaced: true, state, getters, actions, mutations }
