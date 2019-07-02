import Moment from 'moment';

const state = [
  {
    fullName: 'Abdullah Barhoum',
    lastSeen: Moment().subtract(2, 'hour').startOf('hour').fromNow(),
    currentFile: 'test.txt',
    online: true,
    color: '#b27300'
  }, {
    fullName: 'Lukas Keul',
    lastSeen: Moment().subtract(10, 'minute').startOf('hour').fromNow(),
    currentFile: 'Reader.js',
    online: true,
    color: '#cc99a2'
  }, {
    fullName: 'Arne Rolf',
    lastSeen: Moment().subtract(1, 'hour').startOf('hour').fromNow(),
    currentFile: '',
    online: false,
    color: '#e60000'
  }, {
    fullName: 'Linus Helfmann',
    lastSeen: Moment().subtract(2, 'day').startOf('day').fromNow(),
    currentFile: '',
    online: false,
    color: 'brown'
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
