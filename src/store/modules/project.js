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
  },
  {
    name: 'Test',
    lastModified: Moment('2019-05-28'),
    files: [
      'test.js',
    ],
    isOpen: false
  },
  {
    name: 'Vue',
    lastModified: Moment('2019-03-11'),
    files: [
      'webpack-config.js',
      'package.json',
      '.eslintrc.js'
    ],
    isOpen: false
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
