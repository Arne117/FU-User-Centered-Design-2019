<template lang='pug'>
  .Bottombar
    .Bottombar-left
      span
        i.fa.fa-code-fork
        | master*
        i.fa.fa-refresh
        i.fa.fa-exclamation-circle
        | 0
        i.fa.fa-exclamation-triangle
        | 1
        i.fa.fa-info-circle
        | 7
    .Bottombar-right
      span Spaces: 2
        span UTF-8
        span LF
        span Vue
        i.fa.fa-bell
</template>

<script>
export default {
  name: 'Bottombar'
}
</script>

<style lang='stylus' scoped>
  .Bottombar {
    position fixed
    bottom 0
    display flex
    padding 0 .5em
    width 100%

    color white
    user-select none

    background-color rgb(0, 122, 204)

    &-left {
      margin-right auto
    }

    &-right {
      span {
        margin 0 .5em
      }
    }

    .fa {
      margin 0 .5em

      &-refresh {
        margin 0 1em  
      }
    }


  }
</style>