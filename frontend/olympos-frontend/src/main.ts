import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createNotivue } from 'notivue'

import 'notivue/notifications.css' // Only needed if using built-in notifications
import 'notivue/animations.css'

import App from './App.vue'
import router from './router'
import momentPlungin from '@/plugins/MomentPlugin'

const notivue = createNotivue({
    position: 'top-center',
    limit: 1,
    enqueue: true,
    notifications: {
        global: {
            duration: 3000
        }
    }
})
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(notivue)
app.use(momentPlungin)

app.mount('#app')
