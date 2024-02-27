<template>
    <div class="main_home">
        <SidebarMenu class="sidebar_menu"/>
        <RouterView class="content_view"/>
    </div>
</template>

<script setup lang="ts">
import SidebarMenu from '@/views/home/SidebarMenu.vue';
import { RouterView } from 'vue-router';
</script>

<style scoped>
.main_home {
    height: 100vh;
    width: -webkit-fill-available;
    display: flex;
}
.sidebar_menu {
    min-width: 192px;
    position: fixed;
    z-index: 3;
}
.content_view {
    margin-left: 192px;
    width: inherit;
    padding: 50px;
}
</style>