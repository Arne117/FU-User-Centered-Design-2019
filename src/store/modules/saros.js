const state = {
  isOpen: true,
  activeView: 'SessionView'
}

const getters = {
  isOpen: state => state.isOpen,
  getActiveView: state => state.activeView
}

const mutations = {
  setOpenState: (state, value) => state.isOpen = value,
  setActiveView: (state, value) => state.activeView = value
}

export default { namespaced: true, state, getters, mutations }
