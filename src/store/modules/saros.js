const state = {
  isOpen: true,
  inState: 'Chat'
}

const getters = {
  isOpen: state => state.isOpen

}

const mutations = {
  switchOpenState: (state, param) => {
    state.isOpen = !state.isOpen
  }
}

export default { namespaced: true, state, getters, mutations }
