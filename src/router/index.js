import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../components/HomePage'
import CatalogPage from '../components/CatalogPage'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: CatalogPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
