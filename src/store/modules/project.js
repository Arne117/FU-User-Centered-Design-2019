import Moment from 'moment';

const state = [
  {
    name: 'Reader Writer Problem',
    lastModified: Moment('2019-05-29'),
    files: [
      'Main.java',
      'Test.java',
      'Reader.java',
      'Writer.java'
    ],
    isOpen: true
  }
];

const getters = {
  getAllProjects: projects => projects
};

const actions = {};

const mutations = {};




export default { namespaced: true, state, getters, actions, mutations }
