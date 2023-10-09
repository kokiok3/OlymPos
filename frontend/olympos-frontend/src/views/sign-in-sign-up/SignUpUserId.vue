<script setup lang="ts">
import router from '@/router';
import Joi from 'joi';
import { ref } from 'vue';

import InputLogin from '@/components/inputs/InputLogin.vue';
import ValidateMessage from '@/components/validates/ValidateMessage.vue';
import ValidateSignUp from '@/validations/ValidateSignUp';
import { newValidateObj, initValidateObj } from '@/validations/ValidateCommon';

import LogoText from '@/components/logo/LogoText.vue';
import ButtonBig from '@/components/buttons/ButtonBig.vue';

import { useSignUpStore } from '@/stores/SignUpStore';
const signUpStore = useSignUpStore();

import SignUpApi from '@/apis/SignUpApi';

const schema = Joi.object({
    isErrorId: Joi.string().min(5).max(32).required()
});
let validateObj = ref(newValidateObj({
    isErrorId: false,
    isDuplicateId: false,
}));
const validate = ()=>{
    return schema.validate({isErrorId: signUp.value.id}, {abortEarly: false});
}
const signUp = ref({
    id: ''
});
const nextStep = async()=>{
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
        const params = {
            user_id: signUp.value.id
        }
        if(await !isIdDuplicate()){
            signUpStore.setSignUpInfo(params);
            
            router.push({path: '/sign-up/user-pw'});
        }
    }
}
const isIdDuplicate = ()=>{
    return SignUpApi.checkIdDuplicate(signUp.value.id)
    .then(res=>{
        if(res === 0){
            validateObj.value.isDuplicateId = false;
            return false;
        }
        else {
            validateObj.value.isDuplicateId = true;
            return true;
        }
    });
}
</script>

<template>
    <main>
        <div class="login-wrapper">
            <LogoText />

            <div class="login-box">
                <h2 class="login-title">계정 만들기</h2>
                <h4 class="login-sub-title">새 아이디를 만드세요.</h4>
                <form @submit.prevent>
                    <div class="form-row">
                        <InputLogin :type="'text'" :placeholder="'아이디'" v-model="signUp.id" @keyup.enter="nextStep"/>
                        <ValidateMessage v-if="validateObj?.isErrorId" :error-msg="ValidateSignUp.id"/>
                        <ValidateMessage v-if="validateObj?.isDuplicateId" :error-msg="ValidateSignUp.duplicatedId"/>
                    </div>
                </form>
                <ButtonBig @click="nextStep">다음</ButtonBig>
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