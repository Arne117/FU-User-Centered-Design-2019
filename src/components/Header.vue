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
            @click='toggleSaros()'
          )
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      itemLength: [90, 70, 90, 100, 80],
      displaySaros: false
    }
  },
  methods: {
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
      padding 10px
      color #fff
      user-select none

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

  .SarosView {
    position absolute
    right 0
    top 43px
    width 400px
    height 300px
    background-color $lightGrey
  }
</style>
