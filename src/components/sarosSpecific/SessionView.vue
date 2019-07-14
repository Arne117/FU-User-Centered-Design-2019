<template lang='pug'>
  .Session
    .Session-name Session: {{ sessionName }}
    .Session-content
      ul.User-list
        li.User-item(
          v-for='user, i in users'
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
              .User-profile--host(v-if="i === 0")
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="crown" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class=""><path fill="#111" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z" class=""></path></svg>
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

      &:first-child {
        margin-top .5em
      }

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
      position relative
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

      &--host {
        position absolute
        left 3.5px
        top -15px
        width 24px
        height @width
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
