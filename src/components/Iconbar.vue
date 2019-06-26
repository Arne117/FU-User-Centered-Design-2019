<template lang='pug'>
  .Iconbar
    .Iconbar-top
      i.fa.fa-2x.fa-files-o
      i.fa.fa-2x.fa-search
      i.fa.fa-2x.fa-code-fork
      i.fa.fa-2x.fa-github
      img.Saros-btn(
        src='@/assets/saros-logo.png'
        @click="showWizard"
        )
    .Iconbar-bottom
      i.fa.fa-2x.fa-cog
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Iconbar',
  methods: {
    ...mapMutations({setWizardView: 'Wizard/setWizardView'}),
    showWizard(){
      this.setWizardView('visible');
    },
    toggleSaros: function () {
      this.displaySaros = !this.displaySaros
    }
  }
}
</script>

<style lang='stylus' scoped>
  .Iconbar {
    display flex
    width 50px
    flex-direction column
    padding 0 0 1em

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

    .fa {
      margin .5em 0
    }
    .Saros-btn {
      max-width 55px
      padding 0 10px
      margin 1em 0

      &:hover {
        filter drop-shadow(0 0 .2rem $green)
        cursor pointer
      }
    }
}
</style>
