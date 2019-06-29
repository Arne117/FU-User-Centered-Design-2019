<template lang='pug'>
  .Iconbar
    .Iconbar-top
      i.fa.fa-2x.fa-files-o(title="File Explorer")
      i.fa.fa-2x.fa-search(title="Search")
      i.fa.fa-2x.fa-code-fork(title="Source Control")
      i.fa.fa-2x.fa-github(title="Github")
      i(@click="openSaros" :title="title")
        img.Saros-btn(src='@/assets/saros-logo.png' :class="{SarosOnline: isInSession}")
    .Iconbar-bottom
      i.fa.fa-2x.fa-cog
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'Iconbar',
  computed: {
    ...mapGetters({
      isInSession: 'Saros/isInSession',
      SarosIsOpen: 'Saros/isOpen',
      sessionName: 'Wizard/getSessionName'
    }),
    title(){
      return `Saros${this.isInSession ? '\nIn Session: ' + this.sessionName : ''}`
    }
  },
  methods: {
    ...mapMutations({
      setWizardView: 'Wizard/setWizardView',
      setSarosOpenState: 'Saros/setOpenState'
    }),
    openSaros(){
      if (this.isInSession) {
        const isOpen = this.SarosIsOpen;
        this.setSarosOpenState(!isOpen)
      } else {
        this.setWizardView('visible');
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
  .Iconbar {
    display flex
    width 60px
    flex-direction column

    color white
    user-select none

    background-color $uiGrey
    border-top 1px solid #444

    &-top {
      display flex
      flex-direction column
      margin-bottom auto
    }

    &-bottom {
      display flex
      flex-direction column

      span {
        margin .5em 0
      }
    }

    & > * > * {
      padding .5em 0
      transition background-color 150ms
      cursor pointer

      &:hover {
        background-color #555
      }
    }
    .Saros-btn {
      max-width 38px
      margin auto
    }
    .SarosOnline {
      filter: drop-shadow(2px 2px 3px $green);
    }
}
</style>
