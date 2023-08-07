import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/LoginView.vue'
import SignUp from '@/views/SignUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp
    },
  ]
})

export default router