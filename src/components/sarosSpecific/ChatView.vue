<template lang='pug'>
  .Chat Chat View
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: 'ChatView',
  ...mapGetters({
    selectedUsers: 'Wizard/getSelectedUsers'
  })
}
</script>

<style lang='stylus' scoped>
  .Chat {
    width 100%
    padding .5em
  }
</style>
