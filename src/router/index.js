import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vacante/nueva',
      name: 'vacant-new',
      component: () => import('@/views/VacantNewView.vue')
    },
    {
      path: '/vacante/:id',
      name: 'vacant',
      component: () => import('@/views/VacantView.vue')
    }
  ]
})

export default router
