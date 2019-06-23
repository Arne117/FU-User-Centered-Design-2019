const state = {
  view: 'hidden',
  selectedProject: '',
  selectedUsers: [],
  sessionName: ''

};

const getters = {
  getWizardView: state => state.view,
  getSelectedProject: state => state.selectedProject,
  getSelectedUsers: state => state.selectedUsers
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
  reset:(state) => Object.assign(state, {selectedProject: '', selectedUsers: []})

};


export default { namespaced: true, state, getters, mutations }
