<template lang='pug'>
  .SourceCode
    .SourceCode-wrapper Sourcecode
      pre(v-highlightjs='sourcecode' contenteditable)
        code.javascript
</template>

<script>
export default {
  name: 'SourceCode',
  data () {
    return {
      sourcecode: `
import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'
import vClickOutside from 'v-click-outside'
import VueHighlightJS from 'vue-highlightjs'

import App from './App'
import router from './router'
import { store } from './store/store'

Vue.use(VueSweetalert2)
Vue.use(vClickOutside)
Vue.use(VueHighlightJS)

Vue.mixin({
  methods: {
    $swalError (opt = {}, callback) {
      this.$swal({
        title: opt.title || 'Oh No!',
        text: 'Something went wrong.',
        type: 'error',
        confirmButtonText: opt.confirmButtonText || 'ok'
      }).then(callback)
    },
    $swalSuccess (opt = {}, callback) {
      this.$swal({
        title: opt.title || 'Great!',
        text: opt.text || 'Done',
        type: 'success',
        confirmButtonText: opt.confirmButtonText || 'ok'
      }).then(callback)
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})`
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
</style>
