<template lang='pug'>
  .table
    .row.header
      .column
        div.bold(@click="ascending = !ascending")
          | Name &nbsp;
          i.fa(:class="ascending ? 'fa-arrow-up': 'fa-arrow-down'")

    .row(
      v-for="(user, i) in sortedUsers" :key="user.fullName"
      :class="{'row-active': selectedUsers.includes(user.fullName)}"
      @click="selectOrDeselectUser(user.fullName)"
    )
      .column
        div {{ user.fullName }}
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data(){
    return {
      ascending: true
    }
  },
  methods:{
    ...mapMutations({
      selectOrDeselectUser: 'Wizard/switchUserSelectionState'
    })
  },
  computed:{
    ...mapGetters({
      users: 'User/getAllUsers',
      selectedUsers: 'Wizard/getSelectedUsers'
    }),
    sortedUsers(){
      return this.users.slice(0).sort((a, b)=>{
        const first = this.ascending ? a : b;
        const second = this.ascending ? b : a;
        return first.fullName.localeCompare(second.fullName);
      })
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
    background-color rgba(35, 119, 255, 0.4)
    }
  }
}

.column {
  flex 100%
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
