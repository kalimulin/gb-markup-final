import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../components/HomePage'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
