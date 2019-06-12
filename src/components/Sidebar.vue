<template lang='pug'>
  .Sidebar
    .Sidebar-wrapper
      strong.Sidebar-Title Projects
      .TreeViewRoot(v-for='proj, index in getAllProjects' :key='proj.name')
        .TreeViewItem(@click="switchOpenState(index)")
          i.fa.fa-folder
          span {{ proj.name }}
        .TreeViewItem.TreeViewIndent(v-if="proj.isOpen" v-for="file in proj.files" :key="file")
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
  flex 15%
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
}

</style>
