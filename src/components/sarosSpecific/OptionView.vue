<template lang='pug'>
  .Option Options
    ul.Option-list
      //-      li.Option-item Session name:
      //-    input(type='text' v-model='_sessionName')
      li.Option-item.OptionButton(@click="setWizardView('changeUsers')") Manage Users
      li.Option-item.OptionButton(@click="onSessionClose") Leave session
</template>

<script>
import SessionUtils from '../mixins/SessionUtils';
import { mapState, mapGetters, mapMutations } from 'vuex';
export default {
  name: 'OptionView',
  mixins: [SessionUtils],
  computed: {
    ...mapState('Wizard', ['sessionName']),
    ...mapGetters({
      selectedProject: 'Wizard/getSelectedProject',
      selectedUsers: 'Wizard/getSelectedUsers',
      users: 'User/getAllUsers',
    }),
    _sessionName: {
      get () { return this.sessionName},
      set (value) { this.$store.commit('Wizard/setSessionName', value) }
    }
  },
  methods: {
    ...mapMutations({
      setSarosOpenState: 'Saros/setOpenState',
      setSarosView: 'Saros/setActiveView',
      resetWizard: 'Wizard/reset',
      setWizardView: 'Wizard/setWizardView'
    }),
    endSession(){
      const confirmation = confirm('Are you sure you want to end the session?')
      if(!confirmation) return;

      this.setSarosOpenState(false)
      this.setSarosView('SessionView')
      this.resetWizard()

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
  .OptionButton {
    background-color darken($lightGrey, 10%)
    width 100%
    padding 5px
    text-align center

    &:hover {
      background-color darken($lightGrey, 5%)
    }
  }
</style>
