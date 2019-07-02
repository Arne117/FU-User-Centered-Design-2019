import Moment from 'moment';

const state = [
  {
    fullName: 'Abdullah Barhoum',
    lastSeen: Moment().subtract(2, 'hour').startOf('hour').fromNow(),
    currentFile: 'test.txt',
    online: true,
    color: 'rgba(178, 115, 0, 1)'
  }, {
    fullName: 'Lukas Keul',
    lastSeen: Moment().subtract(10, 'minute').startOf('hour').fromNow(),
    currentFile: 'Reader.js',
    online: true,
    color: 'rgba(204, 153, 162, 1)'
  }, {
    fullName: 'Arne Rolf',
    lastSeen: Moment().subtract(1, 'hour').startOf('hour').fromNow(),
    currentFile: '',
    online: false,
    color: 'rgba(230, 0, 0, 1)'
  }, {
    fullName: 'Linus Helfmann',
    lastSeen: Moment().subtract(2, 'day').startOf('day').fromNow(),
    currentFile: '',
    online: false,
    color: 'rgba(39, 204, 50, 1)'
  }
];

const getters = {
  getAllUsers: state => state,
  getUser: state => userName => state.filter(user => user.fullName == userName)[0] || {}
};

const actions = {};

const mutations = {

};




export default { namespaced: true, state, getters, actions, mutations }
