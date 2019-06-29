<template lang='pug'>
  .Iconbar
    .Iconbar-top
      i.fa.fa-2x.fa-files-o
      i.fa.fa-2x.fa-search
      i.fa.fa-2x.fa-code-fork
      i.fa.fa-2x.fa-github
      i(@click="showWizard")
        img.Saros-btn(src='@/assets/saros-logo.png')
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

    * > * {
      padding .5em 0
      transition background-color 150ms

      &:hover {
        background-color #555
        cursor pointer
      }
    }
    .Saros-btn {
       display: block;
       width: auto
       height: auto
       max-width 38px
       margin auto
    }
}
</style>
