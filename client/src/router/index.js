import Vue from 'vue'
import Router from 'vue-router'

// components
import Home from '@/components/Home'

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
      component: Home,
      name: 'Home'
    },
    { path: '*', redirect: { name: 'Home' } }
  ]
})

export default router
