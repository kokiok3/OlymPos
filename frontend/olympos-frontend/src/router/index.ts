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
            path: '/login',
            component: Login,
        },
        {
            path: '/sign-up/user-name',
            component: SignUpUserName
        },
        {
            path: '/sign-up/user-info',
            component: SignUpUserInfo
        },
        {
            path: '/sign-up/user-id',
            component: SignUpUserId
        },
        {
            path: '/sign-up/user-pw',
            component: SignUpUserPw
        },
        {
            path: '/sign-up/term',
            component: SignUpTerm
        },
        {
            path: '/sign-up/complete',
            component: SignUpComplete
        },
        {
            path: '/',
            component: ()=>import('@/views/home/MainHome.vue'),
            // redirect: '/stores',
            children: [
                {
                    path: '',
                    name: 'stores',
                    component: ()=>import('@/views/stores/StoresManagement.vue')
                },
                {
                    path: '/store/create',
                    component: ()=>import('@/views/stores/CreateStore.vue')
                },
                {
                    path: '/menus',
                    name: 'menus',
                    component: ()=>import('@/views/menus/MenusManagement.vue')
                },
                {
                    path: '/orders',
                    name: 'orders',
                    component: ()=>import('@/views/orders/OrdersManagement.vue')
                },
                {
                    path: '/order-historys',
                    name: 'order-historys',
                    component: ()=>import('@/views/orders/OrderHistorys.vue')
                },
                {
                    path: '/sales',
                    name: 'sales',
                    component: ()=>import('@/views/sales/SalesManagement.vue')
                },
            ]
        },
    ]
})

export default router