import Vue from 'vue'
import Router from 'vue-router'

// components
import Main from '@/components/Main'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPos) {
    if (savedPos) return savedPos
    if (to.hash) return { selector: to.hash }
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: Main,
      name: 'Main'
    },
    { path: '*', redirect: { name: 'Main' } }
  ]
})

export default router
