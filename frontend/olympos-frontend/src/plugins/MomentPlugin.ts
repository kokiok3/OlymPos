import moment from 'moment'
import type { App } from 'vue';

export default {
    install(app: App){
        const momentLib = {
            /**
            * @params {date} date to be converted to timeFormatter
            * @returns returns timeFormatter
            */
            format: (date: Date):string=>{
                return moment(date).format("YYYY-MM-DD HH:mm:ss");
            }
        }
        
        app.config.globalProperties.$momentLib = momentLib;
        app.provide('momentLib', momentLib)
    }
}