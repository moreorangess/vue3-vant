import { createApp } from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import router from './router'
import store from './store'
import './rem.js'
import './assets/css/reset.css'

router.beforeEach((to, from, next) => {
  next()
})
createApp(App).use(store).use(router).mount('#app')
