<template lang='pug'>
  transition(name='fade' mode='out-in')
    #Saros.Saros(v-show='isInSession && isOpen')
      .SarosTopBar
        .SarosTopBar-item.SarosTopBar-item--minimize(@click="setSarosOpenState(false)")
          i.fa.fa-window-minimize
        .SarosTopBar-item.SarosTopBar-item--close(@click='onSessionClose')
          i.fa.fa-window-close-o

      .Saros-content
        .SarosSideBar
          .SarosSideBar-top
            .SarosSideBar-item.SarosSideBar-item--icon
              img.SarosIcon(src='@/assets/saros-logo.png')
            .SarosSideBar-item.SarosSideBar-item--session(
              @click='setSarosView("SessionView")'
              :class='sarosView === "SessionView" ? "active" : "" '
            )
              i.fa.fa-users
            .SarosSideBar-item.SarosSideBar-item--chat(
              @click='setSarosView("ChatView")'
              :class='sarosView === "ChatView" ? "active" : "" '
            )
              i.fa.fa-comment-o
          .SarosSideBar-bottom
            .SarosSideBar-item.SarosSideBar-item--option(
              @click='setSarosView("OptionView")'
              :class='sarosView === "OptionView" ? "active" : "" '
            )
              i.fa.fa-bars
        .SarosView
          keep-alive
            component(:is='sarosView')

      .ErrorMessage(v-show="errorMsg") {{ errorMsg }}
</template>

<script>
import ChatView from './sarosSpecific/ChatView'
import OptionView from './sarosSpecific/OptionView'
import SessionView from './sarosSpecific/SessionView'
import SessionUtils from './mixins/SessionUtils';
import { mapGetters, mapMutations } from "vuex";

export default {
  mixins: [SessionUtils],
  name: 'Saros',
  data () {
    return {
      errorMsg: ''
    }
  },
  components: { ChatView, OptionView, SessionView },
  computed:{
    ...mapGetters({
      wizardView: 'Wizard/getWizardView',
      isOpen: 'Saros/isOpen',
      isInSession: 'Saros/isInSession',
      sarosView: 'Saros/getActiveView'
    })
  },
  methods: {
    ...mapMutations({
      setSarosOpenState: 'Saros/setOpenState',
      setSarosView: 'Saros/setActiveView'
    }),
  }
}
</script>

<style lang='stylus' scoped>
  .Saros {
    position absolute
    top 100px
    right 50px
    width 400px
    height 300px

    background-color $lightGrey
    border 2px solid $uiGrey

    &-content {
      display flex
      flex-direction row
      align-items stretch
      height 100%
    }
  }

  .SarosTopBar {
    position absolute
    top 0
    right 0
    display flex
    margin .25em
    z-index 100

    &-item {
      padding 0 .25em
    }
  }

  .SarosSideBar {
    display flex
    width 35px
    flex-direction column
    align-items stretch

    border-right 1px solid $uiGrey

    &-top {
      margin-bottom auto
    }

    &-top,
    &-bottom {
      display flex
      flex-direction column
    }

    &-item {
      position relative
      display flex
      justify-content center
      padding .5em

      background-color darken($lightGrey, 10%)
      border-top 1px solid transparent
      border-bottom 1px solid transparent

      &:hover {
        background-color darken($lightGrey, 5%)
      }

      &.active {
        background-color $lightGrey

        border-top 1px solid $uiGrey
        border-bottom 1px solid $uiGrey

        &:after {
          content ''
          position absolute
          top 0
          right -1px
          height 100%
          width 1px
          background-color $lightGrey
        }
      }

      &--icon {
        background-color transparent
        border-bottom 1px solid $uiGrey

        &:hover {
          background-color transparent
        }

        .SarosIcon {
          width 20px
          height 20px
        }
      }

      &--session {
        &.active {
          border-top 1px solid transparent
        }
      }
    }
  }

  .SarosView {
    width 100%
  }
</style>
