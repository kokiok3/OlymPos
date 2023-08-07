<script setup lang="ts">
import router from '@/router';
import Joi from 'joi';
import { ref, type Ref } from 'vue';

const focusInput = ref({
    firstName: false,
    lastName: false
});
const signUp = ref({
    firstName: '',
    lastName: ''
});
const changeFocusInput = ()=>{
    focusInput.value.firstName = signUp.value.firstName.length > 0 ? true : false;
    focusInput.value.lastName = signUp.value.lastName.length > 0 ? true : false;
}

const schema = Joi.object({
    isErrorFirstName: Joi.string().empty(''),
    isErrorLastName: Joi.string().required()
});
interface ValidateDefaultObj {
    [key: string]: boolean
}
const validateObj: Ref<ValidateDefaultObj> = ref({
    isErrorFirstName: false,
    isErrorLastName: false
});
const initValidateObj = ()=>{
    const validateObjKeysArr = Object.keys(validateObj.value);
    validateObjKeysArr.forEach((element)=>{
        validateObj.value[element] = false;
    });
}
const validate = ()=>{
    return schema.validate({isErrorFirstName: signUp.value.firstName, isErrorLastName: signUp.value.lastName}, {abortEarly: false});
}
const nextStep = ()=>{
    initValidateObj();

    const validateResult = validate();
    if(validateResult.error){
        console.log(validateResult)
        validateResult.error.details.forEach(element => {
            if(element?.context?.key){
                validateObj.value[element.context.key] = true;
            }
        });
    }
    else{
        router.push('/sign-up/user-info');
        // 성공 api 날리기
    }
}
</script>

<template>
    <main>
        <div class="login-wrapper">
            <div class="logo">
                로고 이미지
            </div>
            <div class="login-box">
                <h2 class="login-title">계정 만들기</h2>
                <h4 class="login-sub-title">이름을 입력하세요.</h4>
                <form>
                    <div class="form-row">
                        <div class="login-id">
                            <input type="text" @input="changeFocusInput" v-model="signUp.firstName">
                            <span id="login-id" :class="{'focus-placeholder': focusInput.firstName}">성(선택사항)</span>
                        </div>
                        <div v-if="validateObj.isErrorFirstName" class="validate-error">
                            <i class="fa-solid fa-circle-exclamation"></i>
                            <span>문자만 입력해주세요.</span>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="login-password">
                            <input type="password" @change="changeFocusInput" v-model="signUp.lastName">
                            <span id="login-password" :class="{'focus-placeholder': focusInput.lastName}">이름</span>
                        </div>
                        <div v-if="validateObj.isErrorLastName" class="validate-error">
                            <i class="fa-solid fa-circle-exclamation"></i>
                            <span>필수 정보 입니다.</span>
                        </div>
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
.login-id, .login-password {
    position: relative;
}
.login-id #login-id, .login-password #login-password {
    position: absolute;
    top: 14px;
    left: 13px;
    color: var(--main-black-soft);
}
.login-id input:focus + #login-id,
.login-password input:focus + #login-password,
#login-id.focus-placeholder,
#login-password.focus-placeholder {
    padding: 0 5px;
    top: -10px;
    transition: 200ms;
    font-size: 12px;
    background-color: var(--main-white);
    color: var(--main);
}
#login-id.focus-placeholder,
#login-password.focus-placeholder {
    color: var(--main-black-soft);
}
.login-box form input, .button-big {
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