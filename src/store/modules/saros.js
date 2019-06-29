const state = {
  isOpen: true,
  isInSession: true,
  activeView: 'SessionView'
}

const getters = {
  isOpen: state => state.isOpen,
  isInSession: state => state.isInSession,
  getActiveView: state => state.activeView
}

const mutations = {
  setOpenState: (state, value) => state.isOpen = value,
  setInSessionState: (state, value) => state.isInSession = value,
  setActiveView: (state, value) => state.activeView = value
}

export default { namespaced: true, state, getters, mutations }
