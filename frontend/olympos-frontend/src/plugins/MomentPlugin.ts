import moment from 'moment'
import type { App } from 'vue';
import { momentLibKey } from '@/symbols/InjectionKeys';

export default {
    install(app: App){
        const momentLib = {
            /**
            * @params {date} date to be converted to timeFormatter
            * @returns returns timeFormatter
            */
            format: (date: string):string=>{
                return moment(date).format("YYYY-MM-DD HH:mm:ss");
            }
        }
        // template에서 사용할 수 있게 만드는 구문
        app.config.globalProperties.$momentLib = momentLib;

        // script에서 사용할 수 있게 만드는 구문
        app.provide(momentLibKey, momentLib)
    }
}