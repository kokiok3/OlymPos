import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/LoginView.vue'
import SignUpUserNameView from '@/views/SignUpUserNameView.vue'
import SignUpUserInfo from '@/views/SignUpUserInfo.vue'
import SignUpUserId from '@/views/SignUpUserId.vue'
import SignUpUserPw from '@/views/SignUpUserPw.vue'
import SignUpTerm from '@/views/SignUpTerm.vue'
import SignUpComplete from '@/views/SignUpComplete.vue'

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