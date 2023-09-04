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
    isErrorFirstName: Joi.string().empty(''),
    isErrorLastName: Joi.string().required()
});
let validateObj = ref(newValidateObj({
    isErrorFirstName: false,
    isErrorLastName: false
}));
const validate = ()=>{
    return schema.validate({isErrorFirstName: signUp.value.firstName, isErrorLastName: signUp.value.lastName}, {abortEarly: false});
}
const signUp = ref({
    firstName: '',
    lastName: ''
});
const nextStep = ()=>{
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
        router.push({path: '/sign-up/user-info'});
        // 성공 api 날리기
    }
}
</script>

<template>
    <main>
        <div class="login-wrapper">
            <LogoText />

            <div class="login-box">
                <h2 class="login-title">계정 만들기</h2>
                <h4 class="login-sub-title">이름을 입력하세요.</h4>
                <form>
                    <div class="form-row">
                        <InputLogin :type="'text'" :placeholder="'성(선택사항)'" v-model="signUp.firstName"/>
                        <ValidateMessage v-if="validateObj?.isErrorFirstName" :error-msg="ValidateSignUp.firstName"/>
                    </div>
                    <div class="form-row">
                        <InputLogin :type="'text'" :placeholder="'이름'" v-model="signUp.lastName"/>
                        <ValidateMessage v-if="validateObj?.isErrorLastName" :error-msg="ValidateSignUp.lastName"/>
                    </div>
                </form>
                <button class="button-big" @click="nextStep">다음</button>
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