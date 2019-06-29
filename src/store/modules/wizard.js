const state = {
  view: 'hidden',
  // selectedProject: '',
  // selectedUsers: [],
  // sessionName: '',

  // For Saros view development
  selectedProject: 'Vue',
  sessionName: 'Vue',
  selectedUsers: ["Linus Helfmann", "Arne Rolf", "Abdullah Barhoum", "Lukas Keul"],

};

const getters = {
  getWizardView: state => state.view,
  getSelectedProject: state => state.selectedProject,
  getSelectedUsers: state => state.selectedUsers,
  getSessionName: state => state.sessionName
};

const mutations = {
  setWizardView: (state, value) => state.view = value,
  selectProject: (state, projectName) => state.selectedProject = projectName,
  switchUserSelectionState: (state, fullName) => {
    const index = state.selectedUsers.indexOf(fullName);
    if (index === -1)
      state.selectedUsers.push(fullName);
    else
      state.selectedUsers.splice(index, 1);
  },
  reset:(state) => Object.assign(state, {selectedProject: '', selectedUsers: [], view: 'hidden'}),
  setSessionName: (state, value) => state.sessionName = value
};


export default { namespaced: true, state, getters, mutations }
