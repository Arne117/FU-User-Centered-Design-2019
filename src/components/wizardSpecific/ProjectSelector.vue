<template lang='pug'>
  .table
    .row.header
      .column
        div(:class="{bold: sortBy === 'name' }" @click="sort('name')")
          | Name &nbsp;
          i.fa(v-if="sortBy === 'name'" :class="ascending ? 'fa-arrow-up': 'fa-arrow-down'")
      .column
        div(:class="{bold: sortBy === 'lastModified' }" @click="sort('lastModified')")
          | Last Modified &nbsp;
          i.fa(v-if="sortBy === 'lastModified'" :class="ascending ? 'fa-arrow-up': 'fa-arrow-down'")

    .row(
      v-for="(project, i) in sortedProjects" :key="project.name"
      :class="{'row-active': selected === project.name}"
      @click="selectProject(project.name)"
      @dblclick="selectAndNext(project.name)"
    )
      .column
        div {{ project.name }}
      .column
        div {{ project.lastModified.format('DD/MM/YYYY') }}

</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data(){
    return {
      sortBy: 'lastModified',
      ascending: false
    }
  },
  computed: {
    ...mapGetters({
      getAllProjects: 'Project/getAllProjects',
      selected: 'Wizard/getSelectedProject'
    }),
    sortedProjects(){
      return this.getAllProjects.slice(0).sort((a, b) => {
        const first = this.ascending ? a : b;
        const second = this.ascending ? b : a;
        if (this.sortBy === 'name'){
          return first.name.localeCompare(second.name);
        } else if (this.sortBy === 'lastModified') {
          return first.lastModified.unix() - second.lastModified.unix()
        }
      })
    }
  },
  methods: {
    ...mapMutations({
      selectProject: 'Wizard/selectProject'
    }),
    sort(columnName){
      if(this.sortBy === columnName)
        this.ascending = !this.ascending
      else {
        this.sortBy = columnName
        this.ascending = false;
      }
    },
    selectAndNext(name){
      this.selectProject(name);
      this.$emit('next');
    }
  }
}
</script>

<style lang='stylus' scoped>
.table {
  padding 5px
}

.row {
  display flex
  justify-content center
  cursor pointer
  transition: background-color 0.2s;
  &:hover {
    background-color rgba(35, 119, 255, 0.075)
  }
  &:first-of-type:hover {
    background-color initial
  }
  &-active {
    background-color rgba(35, 119, 255, 0.25)
    &:hover {
    background-color rgba(35, 119, 255, 0.25)
    }
  }
}

.column {
  flex 50%
}

.column > div {
  padding 5px
}

.header > .column > div {
  outline 1px solid rgba(0,0,0, 0.2)
  transition: background-color 0.3s;
  &:hover {
    background-color #eee
  }
}

.bold {
  font-weight bold
}
</style>
