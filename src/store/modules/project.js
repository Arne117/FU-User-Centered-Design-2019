import Moment from 'moment';

const state = [
  {
    name: 'Reader Writer Problem',
    lastModified: Moment('2019-05-29'),
    files: [
      'Main.vue',
      'Test.js',
      'Reader.js',
      'Writer.js'
    ],
    isOpen: true
  }
];

const getters = {
  getAllProjects: projects => projects

};

const actions = {

};

const mutations = {
  switchOpenState: (projects, index) => {
    projects[index].isOpen = !projects[index].isOpen
  }
};




export default { namespaced: true, state, getters, actions, mutations }
