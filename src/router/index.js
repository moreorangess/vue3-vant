import { createRouter, createWebHashHistory } from 'vue-router'

// free: 不需要登录，
// noRole: 不区分角色，
// role: 'adv' // 'meida' // 广告主和媒体主
const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: {
      name: 'VideoHome'
    }
  },
  {
    path: '/videoHome',
    name: 'VideoHome',
    meta: {
      free: true,
      noRole: true
    },
    component: () => import('../views/VideoHome.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
