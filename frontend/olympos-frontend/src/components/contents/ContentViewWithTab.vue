<template>
    <div>
        <ContentTitle class="content_title"><slot name="title"></slot></ContentTitle>
        <ContentControlArea class="content_control_area"><slot name="controlArea"></slot></ContentControlArea>
        <ContentTab class="content_tab"><slot name="tab"></slot></ContentTab>
        <ContentTable><slot name="table"></slot></ContentTable>
    </div>
</template>

<script setup lang="ts">
import ContentTitle from '@/components/contents/ContentTitle.vue';
import ContentTab from '@/components/contents/ContentTab.vue';
import ContentControlArea from '@/components/contents/ContentControlArea.vue';
import ContentTable from '@/components/contents/ContentTable.vue';

</script>

<style scoped>
.content_title {
    font-size: 21px;
}
.content_control_area {
    margin: 30px 0;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}
</style>