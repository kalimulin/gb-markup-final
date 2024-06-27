import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../components/HomePage'
import CatalogPage from '@/components/CatalogPage'
import ProductPage from '@/components/ProductPage'
import CartPage from '@/components/CartPage'
import RegistrationPage from '@/components/RegistrationPage'

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
  },
  {
    path: '/product',
    name: 'product',
    component: ProductPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
