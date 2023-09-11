<script setup lang="ts">
import router from '@/router';
import Joi from 'joi';
import { ref } from 'vue';

import InputLogin from '@/views/InputLogin.vue';
import ValidateMessage from '@/views/ValidateMessage.vue';
import ValidateSignUp from '@/validations/ValidateSignUp';
import { newValidateObj, initValidateObj } from '@/validations/ValidateCommon';

import LogoText from '@/components/logo/LogoText.vue';

const schema = Joi.object({
    isErrorPassword: Joi.string().required(),
    isErrorPasswordCheck: Joi.string().required()
});
let validateObj = ref(newValidateObj({
    isErrorPassword: false,
    isErrorPasswordCheck: false
}));
const validate = ()=>{
    return schema.validate({isErrorPassword: signUp.value.password, isErrorPasswordCheck: signUp.value.passwordCheck}, {abortEarly: false});
}
const signUp = ref({
    password: '',
    passwordCheck: ''
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
                <form>
                    <div class="form-row">
                        <input type="checkbox" id="term1">
                        <label for="term1">
                            OlymPos(올림포스) 개인정보처리 방침
                        </label>
                        <ValidateMessage v-if="validateObj?.isErrorPassword" :error-msg="ValidateSignUp.password"/>
                    </div>
                    <div class="form-row">
                        <input type="checkbox" id="term2">
                        <label for="term2">
                            OlymPos(올림포스) 약관
                        </label>
                        <ValidateMessage v-if="validateObj?.isErrorPasswordCheck" :error-msg="ValidateSignUp.passwordCheck"/>
                    </div>
                </form>
                <button class="button-big" @click="createAccount">계정 만들기</button>
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