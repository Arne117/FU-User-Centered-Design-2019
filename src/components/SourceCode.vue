<template lang='pug'>
  .SourceCode
    .SourceCode-wrapper Sourcecode
      table.SourceCode-content
        tbody
          tr(v-for="[index, line] in sourcecode.split('\\n').map((e, i) => [i + 1, e])" :key="index")
            td.LineNumber {{ index }}
            td.CodeLine(:class="{'CodeLine-comment': index === 19, 'CodeLine-highlight': index === 27}")
              pre(v-highlightjs='line' contenteditable autocorrect="off" autocapitalize="off" spellcheck="false")
                code.javascript
</template>

<script>
import Code from './code'

export default {
  name: 'SourceCode',
  data () {
    return {
      sourcecode: Code
    }
  }
}
</script>

<style lang='stylus' scoped>
  .SourceCode {
    height 100%
    flex 1
    display flex

    background-color $grey

    text-align left
    color $grey
    &-wrapper {
      width 100%
      overflow-y scroll
    }

    &-content {
      padding 0 .5em
      width 100%
    }
  }

  .LineNumber {
    color #FFF
    padding 0 5px
    font-size 14px
    text-align right
    user-select none
    transition background-color 250ms
    &:hover {
      background-color #111
    }
  }

  .CodeLine {
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
