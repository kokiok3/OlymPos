<script setup lang="ts">
import { ref } from 'vue';
import InputLogin from '@/components/inputs/InputLogin.vue';


const signUp = ref({
    phone: {
        first: '',
        middle: '',
        last: '',
    },
});

const isPhoneNaN = (phoneNumber: string) : boolean =>{
    return isNaN(Number(phoneNumber));
}
const emit = defineEmits(['change-phone']);
const changePhone = ()=>{
    // 길이를 넘으면 자동 탭
    try {
        if(signUp.value.phone.first.length > 3){
            signUp.value.phone.first = signUp.value.phone.first.slice(0,3);
        } else {
            if(isPhoneNaN(signUp.value.phone.first)){
                const end = signUp.value.phone.first.length;
                signUp.value.phone.first = signUp.value.phone.first.slice(0, end-1);
            }
        }

        if(signUp.value.phone.middle.length > 4){
            signUp.value.phone.middle = signUp.value.phone.middle.slice(0,4);
        } else {
            if(isPhoneNaN(signUp.value.phone.middle)){
                const end = signUp.value.phone.middle.length;
                signUp.value.phone.middle = signUp.value.phone.middle.slice(0, end-1);
            }
        }

        if(signUp.value.phone.last.length > 4){
            signUp.value.phone.last = signUp.value.phone.last.slice(0,4);
        } else {
            if(isPhoneNaN(signUp.value.phone.last)){
                const end = signUp.value.phone.last.length;
                signUp.value.phone.last = signUp.value.phone.last.slice(0, end-1);
            }
        }

    } catch (error) {
        return;
    }
    emit('change-phone', signUp.value.phone);
}

</script>

<template>
    <div class="input-phone-wrapper">
        <InputLogin class="first" :type="'text'" :placeholder="'연락처'" @input="changePhone" v-model="signUp.phone.first"/>
        <InputLogin class="middle" :type="'text'" :placeholder="''" @input="changePhone" v-model="signUp.phone.middle"/>
        <InputLogin class="last" :type="'text'" :placeholder="''" @input="changePhone" v-model="signUp.phone.last"/>
    </div>
</template>

<style scoped>
.input-phone-wrapper {
    display: flex;
    justify-content: space-between;
}
.input-phone-wrapper > .first {
    width: 25%;
}
.input-phone-wrapper > .middle,
.input-phone-wrapper > .last {
    width: 35%;
}
</style>