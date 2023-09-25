<script setup lang="ts">
import router from '@/router';
import Joi from 'joi';
import { ref } from 'vue';

import ValidateMessage from '@/components/validates/ValidateMessage.vue';
import ValidateSignUp from '@/validations/ValidateSignUp';
import { newValidateObj, initValidateObj } from '@/validations/ValidateCommon';

import LogoText from '@/components/logo/LogoText.vue';
import ButtonBig from '@/components/buttons/ButtonBig.vue';

const schema = Joi.object({
    isErrorTerm1: Joi.boolean().required(),
    isErrorTerm2: Joi.boolean().required()
});
let validateObj = ref(newValidateObj({
    isErrorTerm1: false,
    isErrorTerm2: false
}));
const validate = ()=>{
    return schema.validate({isErrorTerm1: signUp.value.term1, isErrorTerm2: signUp.value.term2}, {abortEarly: false});
}
const signUp = ref({
    term1: '',
    term2: ''
});
const createAccount = ()=>{
    initValidateObj(validateObj.value);

    const validateResult = validate();
    if(validateResult.error){
        validateResult.error.details.forEach(element => {
            if(element?.context?.key){
                validateObj.value[element.context.key] = true;
            }
        });
    }
    else{
        // 계정 생성 API
        router.push({path: '/sign-up/complete'});
    }
}
</script>

<template>
    <main>
        <div class="login-wrapper">
            <LogoText />

            <div class="login-box">
                <h2 class="login-title">계정 만들기</h2>
                <h4 class="login-sub-title">약관에 동의해주세요.</h4>
                <form @submit.prevent>
                    <div class="form-row">
                        <input type="checkbox" id="term1" v-model="signUp.term1">
                        <label for="term1">
                            OlymPos(올림포스) 개인정보처리 방침
                        </label>
                        <ValidateMessage v-if="validateObj?.isErrorTerm1" :error-msg="ValidateSignUp.term1"/>
                    </div>
                    <div class="form-row">
                        <input type="checkbox" id="term2" v-model="signUp.term2">
                        <label for="term2">
                            OlymPos(올림포스) 약관
                        </label>
                        <ValidateMessage v-if="validateObj?.isErrorTerm2" :error-msg="ValidateSignUp.term2"/>
                    </div>
                </form>
                <ButtonBig @click="createAccount">계정 만들기</ButtonBig>
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    margin: 0 auto;
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--main-black);
}
.logo {
    text-align: center;
}
.login-title, .login-sub-title {
    text-align: center;
}
.login-sub-title {
    margin-top: 14px;
}
.login-box {
    margin: 23px 0;
    padding: 51px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 450px;
    height: auto;
    min-height: 500px;
    border: 1px solid #CACACA;
    border-radius: 5px;
}
.login-box form {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    width: -webkit-fill-available;
    gap: 23px;
}
.form-row {
    position: relative;
}
.button-big {
    padding: 13px 15px;
    width: -webkit-fill-available;
    height: 52px;
    font-size: 17px;
    border-radius: 5px;
}
.login-box form input:focus {
    outline-color: var(--main);
}
.login-box form input {
    border: 1px solid var(--main-gray-3);
}
.button-big {
    margin-top: 45px;
    border: 0;
    background-color: var(--main);
    color: var(--main-white);
}
</style>