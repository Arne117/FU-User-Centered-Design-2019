import Moment from 'moment';

const state = [
  {
    fullName: 'Abdullah Barhoum',
    lastSeen: Moment().subtract(2, 'hour'),
    currentFile: 'test.txt',
    online: false
  }, {
    fullName: 'Lukas Keul',
    lastSeen: Moment().subtract(10, 'minute'),
    currentFile: 'Reader.js',
    online: true
  }, {
    fullName: 'Arne Rolf',
    lastSeen: Moment().subtract(1, 'hour'),
    currentFile: '',
    online: false
  }, {
    fullName: 'Linus Helfmann',
    lastSeen: Moment().subtract(2, 'day'),
    currentFile: '',
    online: false
  }
];

const getters = {
  getAllUsers: state => state
};

const actions = {};

const mutations = {};




export default { namespaced: true, state, getters, actions, mutations }
