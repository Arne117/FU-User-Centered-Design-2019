<template lang='pug'>
  header.Header
    nav.Header-nav.site-header.sticky-top
      .container.d-flex
        ul.Header-list.Header-nav--left
          li.Header-item File
          li.Header-item Edit
          li.Header-item Selection
          li.Header-item View
          li.Header-item Go
        .Header-nav--right
          img.Saros-btn(
            src='@/assets/saros-logo.png'
            @click="showWizard"
            )
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Header',
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
  .Header {
    position relative
    background-color $uiGrey

    &-nav {
      margin auto
      width 100%

      &--left {
        margin-right auto
      }

      &--right {
        margin-right 40px
        padding-top .25em
      }
    }

    &-list {
      display flex
      list-style none
      margin-bottom 0
    }

    &-item {
      padding 10px
      color #fff
      user-select none
      margin 0px
      width 85px

      &:hover {
        background-color $darkGrey
      }
    }
  }

  .Saros-btn {
    max-width 55px
    padding 0 10px

    &:hover {
      filter drop-shadow(0 0 .2rem $green)
      cursor pointer
    }
  }
</style>
