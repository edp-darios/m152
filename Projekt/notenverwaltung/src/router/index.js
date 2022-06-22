import { createRouter, createWebHistory } from 'vue-router'
import GradesView from '../views/GradesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: GradesView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
