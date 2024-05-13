import { defineStore } from "pinia";

export const useTableViewStore = defineStore('tableView', {
    state: ()=>({
        displayOnCustomAlert: false
    }),
    actions: {
        setCustomAlertState(payload: boolean){
            this.displayOnCustomAlert = payload;
        }
    }
})