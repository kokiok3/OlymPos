import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/LoginView.vue'
import SignUpUserNameView from '@/views/SignUpUserNameView.vue'
import SignUpUserInfo from '@/views/SignUpUserInfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/sign-up/user-name',
      name: 'sign-up/user-name',
      component: SignUpUserNameView
    },
    {
      path: '/sign-up/user-info',
      name: 'sign-up/user-info',
      component: SignUpUserInfo
    },
  ]
})

export default router