<template lang='pug'>
  .Sidebar
    .Sidebar-wrapper
      strong.Sidebar-Title Projects
      .TreeViewRoot(v-for='proj, index in getAllProjects' :key='proj.name' :class='proj.name === selectedProject ? "activeSarosProject" : "" ')
        .TreeViewItem(@click="switchOpenState(index)")
          i.fa.fa-folder
          span {{ proj.name }}
          span.small(v-show='proj.name === selectedProject') Active Saros Session
        .TreeViewItem.TreeViewIndent(v-if="proj.isOpen || proj.name === selectedProject" v-for="file in proj.files" :key="file")
          i.fa.fa-file
          span {{ file }}
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: 'Sidebar',
  data() {
    return {}
  },
  computed:{
    ...mapGetters({
      selectedProject: 'Wizard/getSelectedProject',
      'getAllProjects': 'Project/getAllProjects'
    })
  },
  methods: {
    ...mapMutations({
      'switchOpenState': 'Project/switchOpenState'
    })
  }

}
</script>

<style lang='stylus' scoped>

.Sidebar {
  display flex
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

.TreeViewRoot {
  user-select none
  i {
    margin-right 4px
  }

  &.activeSarosProject {
    background-color rgba(195, 210, 235, .75)
  }
}

.TreeViewIndent {
  margin-left 15px
}

.TreeViewItem {
  padding 1px 5px
  overflow hidden
  white-space nowrap
  &:hover {
   //filter drop-shadow(0 0 .2rem $green)
    background-color rgba(111, 185, 143, 0.5)
  }

  .small {
    margin-left 4.5em
    font-size 10px
    color $grey
  }
}

</style>
