<template lang='pug'>
  .Sidebar
    .Sidebar-wrapper
      strong.Sidebar-Title Projects
      .TreeView(v-for='proj in getAllProjects' :key='proj.name')
        .TreeView-item {{ proj.name }}
        div(v-if="proj.isOpen")
          .TreeView-item(v-for="file in proj.files" :key="file") {{ file }}
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'Sidebar',
  data() {
    return {}
  },
  computed:{
    ...mapGetters({
      'getAllProjects': 'Project/getAllProjects'
    })
  }

}
</script>

<style lang='stylus' scoped>
.Sidebar {
  display flex
  flex 10%
  max-height 100%

  text-align left
  overflow hidden
  cursor default

  &-wrapper {
    padding 5px
    width 100%
    max-height calc(100vh - 43px)
    overflow-y scroll
  }
}

.TreeView {
  padding 0 .5em
  & * {
    margin-left 15px

    // Correct way to to make use of already defined values and it works fine in dev. Sadly there is a bug within the current setup when building for production with the cssnano plugin which requires the postcss-calc plugin where an error occurs. Somehow the associated value doesn't get resolved to its actual value but instead to just the variable name "margin-left". So until there is a solution to this, we have to use the old syntax.
    // width calc(100vw - @margin-left)
    width calc(100vw - 15px)
  }

  &-item {
    padding 1px 5px
    overflow: hidden;
    white-space: nowrap;
    &:hover {
      //filter drop-shadow(0 0 .2rem $green)
      background-color rgba(111, 185, 143, 0.1)
    }
  }

}

</style>
