import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Edit from '@/views/Edit.vue'

const routes = [
  {
    path: '/events7/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/events7//edit/:id',
    name: 'Edit',
    component: Edit,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
