<template lang='pug'>
  transition(name="appear")
    #wizardOverlay(v-show="wizardView !== 'hidden'" @click.self="cancel")
      #wizardWrapper
        i#closeButton.fa.fa-times(@click.self="cancel")
        form-wizard#wizard(
          title="Create Session" subtitle="" color="#2377ff" stepSize="xs" shape="circle"
          ref="wizard" @on-complete="onComplete"
        )
          tab-content(title="Choose Project" icon="fa fa-folder" :before-change="()=> !!selectedProject")
            | Choose project to share:
            ProjectSelector(@next="$refs.wizard.nextTab();")

          tab-content(title="Invite Users" icon="fa fa-users").
            Choose users to add to this session


</template>

<script>
import ProjectSelector from './wizardSpecific/ProjectSelector'
import { mapGetters, mapMutations } from "vuex";

export default {
  name: 'Wizard',
  computed:{
    ...mapGetters({
      wizardView: 'Wizard/getWizardView',
      selectedProject: 'Wizard/getSelectedProject'
    })
  },
  methods: {
    ...mapMutations({
      setWizardView: 'Wizard/setWizardView',
      selectProject: 'Wizard/selectProject'
    }),
    onComplete() {
      //TODO: implement the actual handling of session start
      this.cancel();
    },
    cancel(){
      this.selectProject('');
      this.setWizardView('hidden')
      //wait for the animation
      setTimeout(()=>this.$refs.wizard.reset(), 500);
    }
  },
  components: {ProjectSelector},
};
</script>
<style lang="stylus" scoped>
#wizardOverlay {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

#wizardWrapper {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 25%;
  width: 50%;
  max-height 90%
  overflow-y auto
  box-sizing:border-box;
  background-color: #fff;
  border-radius: 10px;
  filter: drop-shadow(0 0 0.2rem black);
  box-shadow: 2px 2px 5px black;
}
#wizard {
  user-select: none;
  box-sizing:border-box;
}

#closeButton {
  z-index: 1;
  position: absolute;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
  font-size: 30px;
  text-align: center;
  cursor: pointer;
}


.appear-enter-active {
  animation appear .2s;
}

.appear-leave-active {
  animation appear .2s reverse;
}
@keyframes appear {
  0% {
    opacity 0
  }
  100% {
    opacity 1
  }
}
</style>
