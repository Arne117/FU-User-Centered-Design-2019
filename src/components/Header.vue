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
          li.flexx
            Dropdown(style="position: absolute")
</template>

<script>
import { mapMutations } from 'vuex';
import Dropdown from './Dropdown';

export default {
  name: 'Header',
  components: {
    Dropdown
  },
  data: () => ({
    items: [
      { title: 'Create Session' },
      { title: 'Join Session' }
    ]
  }),
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
  .flexx {
    flex-direction: column
  }
  .Header {
    user-select none
    position relative
    z-index 0
    background-color $uiGrey

    &-nav {
      margin auto
      width 100%

      &--left {
        margin-right auto
      }
    }

    &-list {
      display flex
      list-style none
      margin-bottom 0
      align-self: start
    }

    &-item {
      // padding top+bottom max. 15px damit Headline max 39px (inkl. 24px fontsize)
      padding 7.5px 10px 7.5px 10px
      color #fff
      margin 0px
      width 85px

      &:hover {
        background-color $darkGrey
      }
    }
  }
</style>
