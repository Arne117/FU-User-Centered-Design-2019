<template lang='pug'>
  .Chat
    .Tab-list
      .Tab-item(
        v-for='tab in getTabs'
        :key='tab'
        :class='getActiveTab === tab ? "active" : ""'
        :style="{ color: getUser(tab).color || 'black'}"
        @click='setActiveTab(tab)'
      ) {{ shortenName(tab) }}
    .Chat-window(ref="chatWindow")
      div(v-for="message of getChat")
        span.Chat-username(:style="{ color: getUser(message.user).color || 'black'}" @click="startChat(message.user)")
          | {{shortenName(message.user)}}:&nbsp;
        span {{message.text}}
    input.Chat-input(v-model="input" @keydown.enter="send")
</template>

<script>
import { mapGetters, mapMutations } from "vuex"

export default {
  name: 'ChatView',
  data(){
    return {
      input: ''
    }
  },
  computed: {
    ...mapGetters({
      selectedUsers: 'Wizard/getSelectedUsers',
      getTabs: 'Chat/getTabs',
      getActiveTab: 'Chat/getActiveTab',
      getChat: 'Chat/getChat',
      getUser: 'User/getUser'
    })
  },
  methods: {
    ...mapMutations({
      setActiveTab: 'Chat/setActiveTab',
      sendMessage: 'Chat/addMessage',
      addChatTab: 'Chat/addTab',
    }),
    shortenName(name){
      const parts = name.split(" ");
      if( parts.length == 1){
        return name;
      }
      return parts.map(part => part[0]).join(".");
    },
    send(){
      this.sendMessage(this.input);
      this.input = '';
    },
    scroll(){
      const el = this.$refs.chatWindow;
      el.scrollTop = el.scrollHeight;
    },
    startChat(user){
      this.addChatTab(user)
      this.setActiveTab(user)
    }
  },
  mounted(){
    this.scroll();
  },
  updated(){
    this.scroll();
  }
}
</script>

<style lang='stylus' scoped>

  $inputHeight = 25px;
  $tabHeight = 38px;

  .Chat {
    width 100%
    height 100%
    position relative

    &-window {
      height "calc(100% - %s - %s)" % ($tabHeight $inputHeight)
      background-color white
      padding .5em
      overflow auto
      overflow-wrap: break-word;
    }

    &-username {
      font-weight: bold
      cursor pointer
    }

    &-input {
      height $inputHeight
      width 100%;
    }
  }

  .Tab {
    &-list {
      display flex
      flex-direction row
      height $tabHeight
      max-width 75%
      overflow-x auto
      user-select none

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

      background-color darken($lightGrey, 10%)
      border-left 1px solid transparent
      border-right 1px solid transparent
      font-size 14px

      &:hover {
        background-color darken($lightGrey, 5%)
      }

      &.active {
        //background-color $lightGrey
        background-color white

        border-left 1px solid $uiGrey
        border-right 1px solid $uiGrey

        &:first-child {
          border-left 1px solid transparent
        }
      }
    }
  }
</style>
