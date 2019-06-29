import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations({
      // two underscore to not pollute the namespace
      __setSarosOpenState: 'Saros/setOpenState',
      __setInSessionState: 'Saros/setInSessionState',
      __setSarosView: 'Saros/setActiveView',
      __resetWizard: 'Wizard/reset',
    }),
    onSessionClose() {
      const confirmation = confirm('Are you sure you want to end the session?')
      if (!confirmation) return;

      this.__setSarosOpenState(false)
      this.__setInSessionState(false)
      this.__setSarosView('SessionView')
      this.__resetWizard()

    }
  }
}
