<template>
    <div class="main_home">
        <SidebarMenu class="sidebar_menu"/>
    </div>
</template>

<script setup lang="ts">
import SidebarMenu from '@/views/home/SidebarMenu.vue';

</script>

<style scoped>
.main_home {
    height: 100vh;
}
.sidebar_menu {
    width: 192px;
}
</style>