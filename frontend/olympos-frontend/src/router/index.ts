import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/sign-in-sign-up/LoginView.vue'
import SignUpUserName from '@/views/sign-in-sign-up/SignUpUserName.vue'
import SignUpUserInfo from '@/views/sign-in-sign-up/SignUpUserInfo.vue'
import SignUpUserId from '@/views/sign-in-sign-up/SignUpUserId.vue'
import SignUpUserPw from '@/views/sign-in-sign-up/SignUpUserPw.vue'
import SignUpTerm from '@/views/sign-in-sign-up/SignUpTerm.vue'
import SignUpComplete from '@/views/sign-in-sign-up/SignUpComplete.vue'

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
      component: SignUpUserName
    },
    {
      path: '/sign-up/user-info',
      name: 'sign-up/user-info',
      component: SignUpUserInfo
    },
    {
      path: '/sign-up/user-id',
      name: 'sign-up/user-id',
      component: SignUpUserId
    },
    {
      path: '/sign-up/user-pw',
      name: 'sign-up/user-pw',
      component: SignUpUserPw
    },
    {
      path: '/sign-up/term',
      name: 'sign-up/term',
      component: SignUpTerm
    },
    {
      path: '/sign-up/complete',
      name: 'sign-up/complete',
      component: SignUpComplete
    },
  ]
})

export default router