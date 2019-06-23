<template lang='pug'>
  .SourceCode
    .SourceCode-wrapper Sourcecode
      table
        tbody
          tr(v-for="[index, line] in sourcecode.split('\\n').map(function(e, i) {return [i+1, e];})" :key="index")
            td.LineNumber {{ index }}
            td.CodeLine
              pre(v-highlightjs='line' contenteditable)
                code.javascript

</template>

<script>
import Code from './code';

export default {
  name: 'SourceCode',
  data () {
    return {
      sourcecode: Code
    }
  },
  methods:{}
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
    }

    &-item {
      height 25px
      padding 5px
      margin-top 10px

      &:first-child {
        margin-left 0!important
      }

      &:hover {
        filter drop-shadow(0 0 .2rem $green)
      }

      &--content {
        width 100%
        height 100%
        border-radius 10px
        background-color #222
      }
    }

    &-comment {
      cursor pointer
      .SourceCode-item--content {
        background-color blue
      }

    }

    &-highlight {
      .SourceCode-item--content {
        background-color $orange
      }
    }
  }

  .LineNumber {
    color: #FFF;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-right: 5px;
    font-size: 14px;
    text-align: right;
  }

  .CodeLine {
    padding-top: 0px;
    padding-bottom: 0px;

    & > pre {
      margin-bottom: 0px;

      & > code {
        padding-top: 0px;
        padding-bottom: 0px;
      }
    }
  }

</style>
