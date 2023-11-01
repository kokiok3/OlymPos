<template>
    <div class="store_content">
        <ImageSlider />
        <div class="store_wrapper">
            <ContentView>
                <template #title>
                    매장 관리
                </template>

                <template #buttonArea>
                    <ButtonRectangle>매장 추가</ButtonRectangle>
                </template>

                <template #table>
                    <Table :col-def="testHeader" :row-data="testBody"></Table>
                </template>
            </ContentView>
        </div>
    </div>
</template>

<script setup lang="ts">
import ImageSlider from '@/views/stores/ImageSlider.vue';
import ContentView from '@/components/contents/ContentView.vue';
import ButtonRectangle from '@/components/buttons/ButtonRectangle.vue';

import Table from '@/components/tables/TableView.vue';
import ButtonInTable from '@/components/buttons/ButtonInTable.vue';
import type { ColDef, RowData} from '@/types/TableView';

const testHeader: ColDef[] = [
    { header: '번호', value: 'number', ratio: 1 },
    { header: '매장명', value: 'storeName', ratio: 5 },
    { header: '매장 전화번호', value: 'storeCall', ratio: 5 },
    { header: '주소', value: 'storeAddress', ratio: 5 },
    { header: '사장님 성함', value: 'owner', ratio: 5 },
    { header: '테이블 개수', value: 'tableCount', ratio: 5 },
    { header: '수정', value: 'edit', ratio: 2, extend: true },
    { header: '삭제', value: 'delete', ratio: 2, extend: true },
];
const testBody: RowData<typeof ButtonInTable>[] = [
    {
        storeName: '토끼분식',
        storeCall: '033-333-3333',
        storeAddress: '강원도 원주시 토끼동',
        owner: '정녕훈',
        tableCount: '30',
        edit: {component: ButtonInTable, slot: '수정'},
        delete: {component: ButtonInTable, slot: '삭제'},
    },
    {
        storeName: '음메레스토랑트',
        storeCall: '033-333-3333',
        storeAddress: '서울시 음메읍 음메리',
        owner: '통정소희',
        tableCount: '20',
        edit: {component: ButtonInTable, slot: '수정'},
        delete: {component: ButtonInTable, slot: '삭제'},
    },
    {
        storeName: '호호애견샵',
        storeCall: '033-333-3333',
        storeAddress: '성원아파트',
        owner: '정소현',
        tableCount: '5',
        edit: {component: ButtonInTable, slot: '수정'},
        delete: {component: ButtonInTable, slot: '삭제'},
    },
    {
        storeName: '은마 레스토랑',
        storeCall: '033-333-3333',
        storeAddress: '대치동 은마',
        owner: '정소현',
        tableCount: '14',
        edit: {component: ButtonInTable, slot: '수정'},
        delete: {component: ButtonInTable, slot: '삭제'},
    },
];
</script>

<style scoped>
.image_slider {
    margin: -50px;
    margin-bottom: 0;
}
.store_wrapper {
    margin-top: 50px;
    padding-bottom: 50px;
}
</style>