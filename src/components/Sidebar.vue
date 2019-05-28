<template lang='pug'>
  .Sidebar
    .Sidebar-wrapper
      span Sidebar
      .TreeView
        .TreeView-item(
          v-for='item in 25'
          :style='{ width: (Math.floor(Math.random()*50) + 20) + "%", marginLeft: (Math.floor(Math.random()*10)) >=5 ? "30px" : "10px"  }'
          )
          .TreeView-item--content
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {}
  }
}
</script>

<style lang='stylus' scoped>
.Sidebar {
  flex 10%
  display flex
  max-height 100%

  text-align left
  overflow hidden
  
  &:hover {
    cursor not-allowed
  }

  &-wrapper {
    padding 15px
    width 100%
    max-height calc(100vh - 43px)
    overflow-y scroll
  }  
}

.TreeView {
  padding 0 .5em

  &-item {
      width 100px
      height 21px
      padding 5px
      margin-top 4px

      &:first-child {
        margin-left 0!important
      }

      &:hover {
        filter drop-shadow(0 0 .2rem $green)
      }

      &--content {
        width 100%
        height 100%
        border-radius 10px
        background-color $darkGrey
      }
    }
}
</style>
