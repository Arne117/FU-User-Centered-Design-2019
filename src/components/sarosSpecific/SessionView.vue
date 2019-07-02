<template lang='pug'>
  .Session
    .Session-name Session: {{ sessionName }}
    .Session-content
      ul.User-list
        li.User-item(
          v-for='user in users'
          :key='user.fullName'
          v-if='selectedUsers.includes(user.fullName)'
          @click='startChat(user.fullName)'
          )
          .User-item--left
            .User-profile(
              :class='user.online ? "online" : "" '
              :style='{ backgroundColor: user.color }'
            )
              | {{ user.fullName.split(" ").map(p => p[0]).join('') }}
          .User-item--right
            .User-name {{ user.fullName }}
            .User-status(v-if='user.currentFile') In file: &nbsp;
              a.File-link {{ user.currentFile }}
            .User-status(v-else) Last seen: {{ user.lastSeen }}
        li.User-item(@click="changeUsers")
          .User-item--left
            .User-profile.light
              i.fa.fa-user
          .User-item--right
            .User-name Manage users
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'SessionView',
  computed: {
    ...mapGetters({
      selectedProject: 'Wizard/getSelectedProject',
      sessionName: 'Wizard/getSessionName',
      selectedUsers: 'Wizard/getSelectedUsers',
      users: 'User/getAllUsers'
    })
  },
  methods: {
    ...mapMutations({
      setSarosView: 'Saros/setActiveView',
      addChatTab: 'Chat/addTab',
      setActiveTab: 'Chat/setActiveTab',
      setWizardView: 'Wizard/setWizardView'
    }),
    startChat (user) {
      this.addChatTab(user)
      this.setActiveTab(user)
      this.setSarosView("ChatView")
    },
    changeUsers(){
      this.setWizardView('changeUsers')
    }
  }
}
</script>

<style lang='stylus' scoped>
  .Session {
    width 100%
    padding .5em

    &-name {
      padding-bottom .5em
    }
  }

  .User {
    &-list {
      display flex
      flex-direction column
      overflow-y scroll
    }

    &-item {
      display flex
      flex-direction row
      margin 0 0 .125em

      &--left,
      &--right {
        display flex
        flex-direction column
        justify-content center
        align-items flex-start
        padding .125em

        user-select none
        cursor pointer
      }
    }

    &-profile {
      display flex
      justify-content center
      align-items center
      width 35px
      height @width
      margin-right .25em
      font-size 14px

      border-radius 25px
      background-color $grey
      border 2px solid $grey
      color #fff

      &.online {
        border 2px solid $lightGreen
      }
    }

    &-status {
      font-size 10px

      .File-link {
        text-decoration underline
      }
    }
  }

  .light {
    background-color lighten($grey, 30%)
    border 2px solid lighten($grey, 30%)
  }
</style>
