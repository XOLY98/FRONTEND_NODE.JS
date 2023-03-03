import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/ContactView.vue')
  },
  
  {
    path: '/products',
    name: 'products',
    component: () => import( '../views/ProductView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( '../views/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/LoginView.vue')
  }
  // {
  //   path: '/SingleProd',
  //   name: 'Single',
  //   component: () =>import('../views/SingleProdView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
