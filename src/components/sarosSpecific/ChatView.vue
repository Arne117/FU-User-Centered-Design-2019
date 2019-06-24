<template lang='pug'>
  .Chat
    .Tab-list
      .Tab-item(
        v-for='tab in getTabs'
        :key='tab'
        :class='getActiveTab === tab ? "active" : ""'
        @click='setActiveTab(tab)'
      ) {{ tab }}
    .Chat-window
      | Chat with: {{ getActiveTab }}
</template>

<script>
import { mapGetters, mapMutations } from "vuex"

export default {
  name: 'ChatView',
  computed: {
    ...mapGetters({
      selectedUsers: 'Wizard/getSelectedUsers',
      getTabs: 'Chat/getTabs',
      getActiveTab: 'Chat/getActiveTab'
    })
  },
  methods: {
    ...mapMutations({
      setActiveTab: 'Chat/setActiveTab'
    })
  }
}
</script>

<style lang='stylus' scoped>
  .Chat {
    width 100%

    &-window {
      padding .5em
    }
  }

  .Tab {
    &-list {
      display flex
      flex-direction row
      height 38px
      max-width 75%
      overflow-x auto

      &::-webkit-scrollbar {
        display none
      }
    }

    &-item {
      display flex
      justify-content center
      position relative
      padding .5em
      min-width 50px
      flex-shrink 0

      background-color darken($lightGrey, 30%)
      border-left 1px solid transparent
      border-right 1px solid transparent
      font-size 14px

      &:hover {
        background-color darken($lightGrey, 20%)
      }

      &.active {
        background-color $lightGrey

        border-left 1px solid $uiGrey
        border-right 1px solid $uiGrey

        &:first-child {
          border-left 1px solid transparent
        }

        &:after {
          content ''
          position absolute
          bottom 0
          right -1px
          height 1px
          width 100%
          background-color $lightGrey
        }
      }
    }
  }
</style>
