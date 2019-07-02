const state = {
  tabs: ['All'],
  activeTab: 'All',
  lines: {
    20: 'Abdullah Barhoum'
  },
  chats: {
    All: [
      {
        user: 'Abdullah Barhoum',
        text: 'this is a test message11111111111111111 message11111111111111111 message11111111111111111 message11111111111111111 message11111111111111111 message11111111111111111 message11111111111111111 message11111111111111111 message11111111111111111 message11111111111111111 message11111111111111111 message11111111111111111 message11111111111111111 message11111111111111111 message11111111111111111 message11111111111111111 message11111111111111111 message11111111111111111 message11111111111111111 message11111111111111111 message11111111111111111 message11111111111111111'
      }
    ]
  }
}

const getters = {
  getTabs: state => state.tabs,
  getActiveTab: state => state.activeTab,
  getChat: (state) => state.chats[state.activeTab],
  getLines: (state) => state.lines,
  hasComment: (state) => line => state.lines.hasOwnProperty(line),
  getCommentUser: (state) => line => state.lines[line]
}

const mutations = {

  addTab: (state, value) => {
    if (!state.tabs.includes(value))
      state.tabs.push(value)
    if (!state.chats[value])
      state.chats[value] = []
  },
  setActiveTab: (state, value) => state.activeTab = value,
  addMessage: (state, text) => state.chats[state.activeTab].push({ user: 'You', text }),
  generateAllChat: (state, users) => state.chats.All = DEFAULT_MESSAGES
    .map(text => ({ user: getRandomUser(users), text })),
  addLine: (state, { line, user }) => state.lines[line] = user,
  removeLine: (state, line) => delete state.lines[line],
  generateComments: (state, users) => state.lines = users
    .map(user => ({ [randInt(40) + 1]: user }))
    .reduce((prev, curr) => Object.assign(prev, curr), {}),
  reset: (state) => Object.assign(state, { tabs: ['All'], activeTab: 'All', lines: { }, chats: { All: [] } })

}

export default { namespaced: true, state, getters, mutations }


const DEFAULT_MESSAGES = [
  'Hi, so what should we do today?',
  'Maybe we should work on that bug from last week',
  'yeah I think so',
  'have you closed that one issue on the last thread',
  'not yet...',
  'okay lets get started on it',
  'agreed ?',
  'I guess...',
  'I will talk to someone else who might help us on this issue'
];

function getRandomUser(array) {
  const index = randInt(array.length);
  return array[index];
}

function randInt(max) {
  return Math.floor(Math.random() * max)
}
