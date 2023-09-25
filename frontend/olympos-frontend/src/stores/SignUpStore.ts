import { defineStore } from "pinia";

interface SignUpInfo {
    user_id: string;
    user_pwd: string;
    name: string;
    phone: string;
    email: string;
}
interface Payload {
    [key: string]: string
}
export const useSignUpStore = defineStore('signUp', {
    state: ()=>({
        signUpInfo: {}
    }),
    actions: {
        setSignUpInfo(payload: Payload){
            const keys = Object.keys(payload);
            keys.forEach(e=>{
                this.signUpInfo[e] = payload[e];
            });
            console.log(this.signUpInfo)
        }
    }
})