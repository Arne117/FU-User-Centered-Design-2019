// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'
import vClickOutside from 'v-click-outside'
import VueHighlightJS from 'vue-highlightjs'
import VueFormWizard from 'vue-form-wizard'

import 'vue-form-wizard/dist/vue-form-wizard.min.css'

import App from './App'
import router from './router'
import { store } from './store/store'

// Vue plugins
Vue.use(VueSweetalert2)
Vue.use(vClickOutside)
Vue.use(VueHighlightJS)
Vue.use(VueFormWizard)

// Vue components

// Vue Mixins
Vue.mixin({
  methods: {
    $swalError (opt = {}, callback) {
      this.$swal({
        title: opt.title || 'Oh No!',
        text: `Something went wrong. ${opt.text}`,
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

// Vue config
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
