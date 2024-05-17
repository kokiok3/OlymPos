import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createNotivue } from 'notivue'

import 'notivue/notifications.css' // Only needed if using built-in notifications
import 'notivue/animations.css'

import App from './App.vue'
import router from './router'
import moment from 'moment'

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

/**
* @params {date} date to be converted to timeFormatter
* @returns returns timeFormatter
*/
const momentLib = {
    format: (date: Date):string=>{
        return moment(date).format("YYYY-MM-DD HH:mm:ss");
    }
}
app.config.globalProperties.$momentLib = momentLib;
app.provide('momentLib', momentLib)

app.use(createPinia())
app.use(router)
app.use(notivue)

app.mount('#app')
