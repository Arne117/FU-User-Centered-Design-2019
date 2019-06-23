<template lang='pug'>
  .Option Options
    ul.Option-list
      li.Option-item Session name: 
        input(type='text' v-model='_sessionName')
      li.Option-item.Button Add user
      li.Option-item.Button Remove User
      li.Option-item.Button Leave session
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'OptionView',
  computed: {
    ...mapState(['sessionName']),
    ...mapGetters({
      selectedProject: 'Wizard/getSelectedProject',
      selectedUsers: 'Wizard/getSelectedUsers',
      users: 'User/getAllUsers',
    }),
    _sessionName: {
      get () { return this.sessionName},
      set (value) { this.$store.commit('Wizard/setSessionName', value) }
    }
  }
}
</script>

<style lang='stylus' scoped>
  .Option {
    width 100%
    padding .5em

    &-list {
      display flex
      flex-direction column
      align-items flex-start
      justify-content center
      margin-top .5em
    }

    &-item {
      margin .25em 0 0
      cursor pointer
    }
  }
</style>
