<template lang='pug'>
  .SourceCode
    .SourceCode-wrapper Sourcecode
      table.SourceCode-content
        tbody
          tr(
            v-for="[index, line] in sourcecode.split('\\n').map((e, i) => [i + 1, e])"
            :key="index"
          )
            td.LineNumber {{ index }}
            td.CodeLine(
              :class=`[
                index === 19 ? 'CodeLine-comment' : '',
                index === 27 ? 'CodeLine-highlight' : '',
              ]`
            )
              pre(v-highlightjs='line' contenteditable)
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

    flex 80%
    display flex

    background-color $grey

    text-align left
    color $grey
    &-wrapper {
      padding 15px
      width 100%
      max-height calc(100vh - 43px)
      overflow-y scroll
    }

    &-content {
      padding 0 .5em
      width 100%
    }
  }

  .LineNumber {
    color #FFF
    padding-top 0px
    padding-bottom 0px
    padding-right 5px
    font-size 14px
    text-align right
  }

  .CodeLine {
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
