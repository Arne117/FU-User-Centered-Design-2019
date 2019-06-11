<template lang='pug'>
  .Iconbar
    .Iconbar-top
      i.fa.fa-2x.fa-files-o
      i.fa.fa-2x.fa-search
      i.fa.fa-2x.fa-code-fork
      i.fa.fa-2x.fa-github
    .Iconbar-bottom
      i.fa.fa-2x.fa-cog
</template>

<script>
export default {
  name: 'Iconbar'
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
  }
</style>