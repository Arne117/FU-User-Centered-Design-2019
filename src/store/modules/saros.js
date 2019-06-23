const state = {
  isOpen: true,
  activeView: 'ChatView'
}

const getters = {
  isOpen: state => state.isOpen,
  getActiveView: state => state.activeView
}

const mutations = {
  setOpenState: (state, value) => value ? state.isOpen = value : state.isOpen = !state.isOpen,
  setActiveView: (state, value) => state.activeView = value
}

export default { namespaced: true, state, getters, mutations }
