<template lang='pug'>
  header.Header
    nav.Header-nav.site-header.sticky-top.py-1
      .container.d-flex
        ul.Header-list.Header-nav--left
          li.Header-item(
            v-for='length in itemLength'
            tooltip='Not part of the task'
            :style='{ width: length + "px" }'
            )
            .Header-item--content
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
  data () {
    return {
      itemLength: [90, 70, 90, 100, 80],
      displaySaros: false
    }
  },
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
      }
    }

    &-list {
      display flex
      list-style none
      margin-bottom 0
    }

    &-item {
      width 80px
      height 35px
      padding 10px

      &:hover {
        cursor not-allowed
        filter drop-shadow(0 0 .2rem $green)

        &:after {
          // content attr(tooltip)
          // font-size 10px
        }
      }

      &--content {
        width 100%
        height 100%
        border-radius 10px
        background-color $lightBlue
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

  .SarosView {
    position absolute
    right 0
    top 43px
    width 400px
    height 300px
    background-color $lightGrey
  }
</style>
