<script setup lang="ts">
import Joi, { string } from 'joi';
import { ref, Ref } from 'vue';

const focusIdInput = ref(false);
const focusPwInput = ref(false);
const loginId = ref('');
const loginPw = ref('');
const changeFocusInput = ()=>{
    focusIdInput.value = loginId.value.length > 0 ? true : false;
    focusPwInput.value = loginPw.value.length > 0 ? true : false;
}

// 로그인 버튼을 누르면 1유효성 상태 초기화 2유효성 체크 후 3 로그인 성공 / 로그인 실패
// validateObj와 initValidateObj 는 클래스로
const schema = Joi.object({
    isErrorLoginId: Joi.string().required(),
    isErrorLoginPw: Joi.string().required()
});
interface ValidateObj {
    isErrorLoginId: boolean,
    isErrorLoginPw: boolean,
    [key: string]: boolean
}
const validateObj: Ref<ValidateObj> = ref({
    isErrorLoginId: false,
    isErrorLoginPw: false
});
const initValidateObj = ()=>{
    const validateObjKeysArr = Object.keys(validateObj.value);
    validateObjKeysArr.forEach((element: string)=>{
        console.log(element)
        validateObj.value[element] = false;
    });
}
const validate = ()=>{
    return schema.validate({isErrorLoginId: loginId.value, isErrorLoginPw: loginPw.value}, {abortEarly: false});
}
const login = ()=>{
    initValidateObj();

    const validateResult = validate();
    if(validateResult.error){
        validateResult.error.details.forEach(element => {
            validateObj.value[element.context.key] = true;
        });
    }
    else{
        const successValidateKeys = Object.keys(validateResult.value);
        successValidateKeys.forEach(element => {
            validateObj.value[element] = false;
        });
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
                <h2 class="login-title">로그인</h2>
                <h4 class="login-sub-title">아이디와 비밀번호를 입력하세요.</h4>
                <form>
                    <div class="form-row">
                        <div class="login-id">
                            <input type="text" @input="changeFocusInput" v-model="loginId">
                            <span id="login-id" :class="{'focus-placeholder': focusIdInput}">아이디</span>
                        </div>
                        <div v-if="validateObj.isErrorLoginId" class="validate-error">
                            <i class="fa-solid fa-circle-exclamation"></i>
                            <span>잘못된 아이디입니다. 다시 시도해 주세요.</span>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="login-password">
                            <input type="password" @change="changeFocusInput" v-model="loginPw">
                            <span id="login-password" :class="{'focus-placeholder': focusPwInput}">비밀번호</span>
                        </div>
                        <div v-if="validateObj.isErrorLoginPw" class="validate-error">
                            <i class="fa-solid fa-circle-exclamation"></i>
                            <span>잘못된 비밀번호입니다. 다시 시도해 주세요.</span>
                        </div>
                    </div>
                </form>
                <div class="memorize-id">
                    <input type="checkbox" id="memorize-id">
                    <label for="memorize-id">아이디 저장</label>
                </div>
                <button class="button-big" @click="login">로그인</button>
            </div>
            <span class="create-id"><router-link to="sign-up">계정 만들기</router-link></span>
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
.login-box form input, .memorize-id input {
    border: 1px solid var(--main-gray-3);
}
.button-big {
    margin-top: 45px;
    border: 0;
    background-color: var(--main);
    color: var(--main-white);
}
.memorize-id {
    margin-top: 13px;
    display: flex;
    align-items: center;
}
.memorize-id input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 3px;
    cursor: pointer;
    height: 16px;
    outline: 0;
    width: 16px;
}
.memorize-id input[type="checkbox"]::after {
    border: solid #fff;
    border-width: 0 2px 2px 0;
    content: '';
    display: none;
    height: 60%;
    left: 37%;
    position: relative;
    top: 10%;
    transform: rotate(45deg);
    width: 35%;
}
.memorize-id input[type="checkbox"]:checked {
    background: var(--main-success);
}
.memorize-id input[type="checkbox"]:checked::after {
    display: block;
}
.memorize-id label {
    margin-left: 9px;
    color: var(--main-black-soft);
}
.create-id {
    color: var(--main-success);
    font-size: 14px;
    font-weight: 500;
}
</style>