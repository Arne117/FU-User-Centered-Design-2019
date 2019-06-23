export default `import Vue from 'vue'
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
})`;
