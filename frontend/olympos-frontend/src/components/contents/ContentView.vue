<template>
    <div>
        <ContentTitle class="content_title"><slot name="title"></slot></ContentTitle>
        <ContentButtonArea class="content_btn_area"><slot name="buttonArea"></slot></ContentButtonArea>
        <ContentTable><slot name="table"></slot></ContentTable>
    </div>
</template>

<script setup lang="ts">
import ContentTitle from '@/components/contents/ContentTitle.vue';
import ContentButtonArea from '@/components/contents/ContentButtonArea.vue';
import ContentTable from '@/components/contents/ContentTable.vue';

</script>

<style scoped>
.content_title {
    font-size: 21px;
}
.content_btn_area {
    margin: 30px 0;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}
</style>