<template lang='pug'>
  .SourceCode
    .SourceCode-wrapper
      table.SourceCode-content(v-if='isOpen')
        tbody
          tr(v-for="[index, line] in sourcecode.split('\\n').map((e, i) => [i + 1, e])" :key="`${Math.random()}`")
            td.CommentLine.pointer(
              v-if="hasComment(index)"
              title="click to view discussion\ndouble click to close"
              @click="addComment(index)"
              @dblclick="removeComment(index)"
            )
              i.fa.fa-comment(:style="{color: getColorOfComment(index)}")
            td.CommentLine(v-else)
            td.LineNumber.pointer(title="open disussion on this line" @click="addComment(index)") {{ index }}
            td.CodeLine(:style="{backgroundColor: hasComment(index) ? getColor(index) : 'none'}")
              pre(v-highlightjs='line' contenteditable autocorrect="off" autocapitalize="off" spellcheck="false")
                code.javascript
</template>

<script>
import Code from './code'
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'SourceCode',
  data () {
    return {
      sourcecode: Code
    }
  },
  computed: {
    ...mapGetters({
      getUser: 'User/getUser',
      hasComment: 'Chat/hasComment',
      getCommentUser: 'Chat/getCommentUser'
    })
  },
  created(){
    window.updateCode = () => {
      this.$nextTick(() => this.$forceUpdate());
    }
  },
  methods: {
    addComment (line) {
      if(!this.hasComment(line))
        this.addLine({line, user:'You'});
      const index = '#' + line
      this.setSarosOpenState(true);
      this.setSarosView("ChatView");
      this.addChatTab(index);
      this.setActiveTab(index);
      //for what ever reason vue does not update on new lines
      this.$forceUpdate();
    },
    ...mapMutations({
      setSarosOpenState: 'Saros/setOpenState',
      setSarosView: 'Saros/setActiveView',
      addChatTab: 'Chat/addTab',
      setActiveTab: 'Chat/setActiveTab',
      addLine: 'Chat/addLine',
      removeLine: 'Chat/removeLine',
      isOpen: 'Saros/isOpen',
    }),
    getColor(index){
      const userName = this.getCommentUser(index)
      const user = this.getUser(userName);
      if(!user.color)
        return 'rgba(0,0,0,0.08)'
      const color = user.color.split(",")
      color[color.length - 1] = "0.08)";
      return color.join(',');
    },
    getColorOfComment(index){
      const userName = this.getCommentUser(index)
      const user = this.getUser(userName);
      return user.color || '#888';
    },
    removeComment(index){
      this.removeLine(index);
      this.$forceUpdate();
    }
  }
}
</script>

<style lang='stylus' scoped>
  .SourceCode {
    height 100%
    flex 1
    display flex
    padding-top 1.5em

    background-color #eee

    text-align left
    color #000
    &-wrapper {
      width 100%
      overflow-y scroll
    }

    &-content {
      padding 0 .5em
      width 100%
    }
  }

  .CommentLine {
    min-width: 20px
  }

  .LineNumber {
    color #000
    padding 0 5px
    font-size 14px
    text-align right
    user-select none
  }

  .pointer {
    cursor pointer
    transition background-color 250ms
    &:hover {
      background-color #ccc
    }
  }

  .CodeLine {
    background-color #fff
    width 100%
    padding-top 0px
    padding-bottom 0px

    background-color #f8f8f8

    &:hover {
      // filter drop-shadow(0 0 .2rem $green)
    }

    & > pre {
      margin-bottom 0px

      & > code {
        padding-top 0px
        padding-bottom 0px
      }
    }

    &-comment {
      cursor pointer
      background-color green
    }

    &-highlight {
      background-color $orange
    }

    .hljs {
      background-color transparent
    }
  }

</style>
