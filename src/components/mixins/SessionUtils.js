import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations({
      // two underscore to not pollute the namespace
      __setSarosOpenState: 'Saros/setOpenState',
      __setInSessionState: 'Saros/setInSessionState',
      __setSarosView: 'Saros/setActiveView',
      __resetWizard: 'Wizard/reset',
      __setWizardView: 'Wizard/setWizardView',
      __resetChat: 'Chat/reset'
    }),
    onSessionClose() {
      const confirmation = confirm('Are you sure you want to end the session?')
      if (!confirmation) return;

      this.__setSarosOpenState(false)
      this.__setInSessionState(false)
      this.__setSarosView('SessionView')
      this.__resetWizard()
      this.__resetChat()
      this.$nextTick(() => {
        window.updateCode() // see SourceCode.vue
      });

    },
    showSaros() {
      this.__setSarosOpenState(true)
    },
    hideSaros() {
      this.__setSarosOpenState(false)
    },
    createSession() {
      this.__setWizardView('createSession')
    }
  }
}
