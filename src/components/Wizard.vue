<template lang='pug'>
  transition(name="appear")
    #wizardOverlay(v-show="wizardView !== 'hidden'" @click.self="hide")
      #wizardWrapper
        i#closeButton.fa.fa-times(@click.self="hide")
        //- create session wizard
        form-wizard#wizard(
          v-show="wizardView === 'createSession'"
          title="Create Session" subtitle="" color="#2377ff" stepSize="xs" shape="circle"
          ref="sessionWizard" @on-complete="onComplete" @on-change="errorMsg = ''"
        )
          tab-content(title="Choose Project" icon="fa fa-folder" :before-change="checkProjectStep")
            | Choose project to share:
            ProjectSelector(@next="$refs.sessionWizard.nextTab();")

          tab-content(title="Invite Users" icon="fa fa-users" :before-change="checkUserStep")
            | Choose users to add to this session
            UserSelector
          .errorMessage(v-if="errorMsg") {{ errorMsg }}

        //- choose users wizard
        form-wizard#wizard(
          v-show="wizardView === 'changeUsers'"
          title="Add/remove Users" subtitle="" color="#2377ff" stepSize="xs" shape="circle"
          ref="userWizard" @on-complete="onComplete" @on-change="errorMsg = ''"
        )
          tab-content(title="" icon="fa fa-users" :before-change="checkUserStep")
            | Click to add / remove users from this session
            UserSelector
          .errorMessage(v-if="errorMsg") {{ errorMsg }}


</template>

<script>
import ProjectSelector from './wizardSpecific/ProjectSelector'
import UserSelector from './wizardSpecific/UserSelector';
import { mapGetters, mapMutations } from "vuex";

export default {
  name: 'Wizard',
  mounted(){
    // hack to fix the line on the left side of the wizard
    const bars = this.$el.querySelectorAll('div.wizard-progress-bar');
    const clone = bars[0].cloneNode();
    clone.style = `position: absolute; left: 0px; background-color: white; width: 25%; outline: 2px solid white; height: 6px; top: -1px`;
    bars[0].parentElement.appendChild(clone)
    const clone2 = clone.cloneNode()
    clone2.style.width="50%";
    bars[1].appendChild(clone2);
  },
  data(){
    return {
      errorMsg: ''
    };
  },
  computed:{
    ...mapGetters({
      wizardView: 'Wizard/getWizardView',
      selectedProject: 'Wizard/getSelectedProject',
      selectedUsers: 'Wizard/getSelectedUsers'
    })
  },
  methods: {
    ...mapMutations({
      setWizardView: 'Wizard/setWizardView',
      selectProject: 'Wizard/selectProject',
      setSarosOpenState: 'Saros/setOpenState',
      setInSessionState: 'Saros/setInSessionState',
      generateChat: 'Chat/generateAllChat',
      generateComments: 'Chat/generateComments'
    }),
    checkProjectStep(){
      this.errorMsg = '';
      const valid = (!!this.selectedProject);
      if (valid)
        return true;
      this.errorMsg = 'Please select one project to share';
      return false;
    },
    checkUserStep(){
      this.errorMsg = '';
      const valid = (this.selectedUsers.length > 0);
      if (valid)
        return true;
      this.errorMsg = 'Please select at least one user to share the project with';
      return false;
    },
    onComplete() {
      //TODO: implement the actual handling of session start
      this.hide();
      this.setSarosOpenState(true)
      this.setInSessionState(true)
      this.generateChat(this.selectedUsers)
      this.generateComments(this.selectedUsers)
    },
    hide(){
      this.setWizardView('hidden')
      //wait for the animation
      setTimeout(()=>{
        this.$refs.sessionWizard.reset();
        this.$refs.userWizard.reset();
      }, 500);
    }
  },
  components: {ProjectSelector, UserSelector},
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
.errorMessage {
  color #e74c3c;
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
