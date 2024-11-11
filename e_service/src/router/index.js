import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import Login from '@/views/Auth/Login.vue'
import Register from '@/views/Auth/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingpage',
      component: LandingPage,
    },
    {
      path: '/auth/register',
      name: 'register',
      component: Register 
    },
     {
      path: '/auth/login',
      name: 'login',
      component: Login 
    },
  ],
})

export default router
