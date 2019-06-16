const state = {
  view: 'hidden',
  createSessionData: {
    projectName: '',
    users: [],
    sessionName: ''
  }
};

const getters = {
  getWizardView: state => state.view,
  getSelectedProject: state => state.createSessionData.projectName
};

const mutations = {
  setWizardView: (state, value) => state.view = value,
  selectProject: (state, projectName) => state.createSessionData.projectName = projectName
};


export default { namespaced: true, state, getters, mutations }
