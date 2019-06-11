<template lang='pug'>
  .Bottombar
    .Bottombar-left
      span master*
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
        i.fa.fa-bell 1
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
    padding 0 1em
    width 100%

    color white

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