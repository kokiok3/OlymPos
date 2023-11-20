<template>
    <div class="management_view">
        <ManagementTitle class="content_title"><slot name="title"></slot></ManagementTitle>
        <div class="form_area">
            <slot name="form"></slot>
        </div>
        
        <div class="btn_area">
            <slot name="btnArea"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import ManagementTitle from '@/components/management/ManagementTitle.vue';

</script>

<style scoped>
.management_view{
    padding-right: 200px;
}
.content_title {
    font-size: 21px;
}
.form_area {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.btn_area {
    position: fixed;
    padding: 20px 200px 10px 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid var(--main-gray-3);
    display: flex;
    gap: 15px;
    justify-content: flex-end;
}
</style>