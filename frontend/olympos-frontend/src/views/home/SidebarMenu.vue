<template>
    <nav>
        <div class="top">
            <LogoText class="logo_text"/>
            <div class="user_profile">k</div>
        </div>
        <div class="middle">
            <button v-for="(item, index) in menuName" :key="index">{{ item }}</button>
        </div>
        <div class="bottom">
            <button>
                <i class="fa-solid fa-right-from-bracket mr10"></i>
                <span>로그아웃</span>
            </button>
        </div>
    </nav>
</template>

<script setup lang="ts">
import LogoText from '@/components/logo/LogoText.vue';

import { ref } from 'vue';

const menuName = ref(['매장 관리', '메뉴 관리', '주문 관리', '주문 내역', '매출 관리']);
</script>

<style scoped>
nav {
    height: 100%;
    padding: 27px 12px 10px 12px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    font-size: 13px;
    font-weight: 400;
    background-color: var(--main-mute-1);
}
.top {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 9px;
}
.top .logo_text {
    font-size: 15px;
}
.top .user_profile {
    padding-top: 3px;
    width: 30px;
    height: 30px;
    border: 1px solid;
    border-radius: 50%;
    text-align: center;
    background-color: var(--main);
    color: var(--main-white);
    border: 1px solid var(--main-white);
}
.middle {
    height: 80%;
    display: flex;
    flex-direction: column;
    gap: 9px;
}
.middle a {
    padding: 7px 10px;
    text-decoration: none;
    color: unset;
    border-radius: 5px;
    text-align: left;
}
.middle a:hover {
    background-color: var(--main);
    color: var(--main-white);
}
.bottom {
    margin-left: 10px;
}
.bottom button {
    background-color: transparent;
    border: none;
}
</style>