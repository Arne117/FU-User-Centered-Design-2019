const state = {
  tabs: ['All'],
  activeTab: 'All'
}

const getters = {
  getTabs: state => state.tabs,
  getActiveTab: state => state.activeTab,
}

const mutations = {
  addTab: (state, value) => {
    if (!state.tabs.includes(value))
    state.tabs.push(value)
  },
  setActiveTab: (state, value) => state.activeTab = value
}

export default { namespaced: true, state, getters, mutations }
