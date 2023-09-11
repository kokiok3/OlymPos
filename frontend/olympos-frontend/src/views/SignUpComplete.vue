<script setup lang="ts">
import LogoText from '@/components/logo/LogoText.vue';
</script>

<template>
    <main>
        <div class="login-wrapper">
            <LogoText />

            <div class="login-box">
                <h2 class="login-title">계정이 생성되었습니다.</h2>
                <a class="login-sub-title" href="/">로그인 바로하기</a>
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